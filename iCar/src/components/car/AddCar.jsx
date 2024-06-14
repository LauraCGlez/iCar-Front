import React, { useState } from "react"
import {addCar} from "../utils/ApiFunctions"
import CarTypeSelector from "../common/CarTypeSelector.jsx"
import { Link } from "react-router-dom"

const AddCar = () => {
	const [newCar, setNewCar] = useState({
		carType: "",
		carPrice: ""
	})

	const [successMessage, setSuccessMessage] = useState("")
	const [errorMessage, setErrorMessage] = useState("")

	const handleCarInputChange = (e) => {
		const name = e.target.name
		let value = e.target.value
		if (name === "carPrice") {
			if (!isNaN(value)) {
				value = parseInt(value)
			} else {
				value = ""
			}
		}
		setNewCar({ ...newCar, [name]: value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const success = await addCar(newCar.carType, newCar.carPrice)
			if (success !== undefined) {
				setSuccessMessage("A new car was  added successfully !")
				setNewCar({ carType: "", carPrice: "" })
				setErrorMessage("")
			} else {
				setErrorMessage("Error adding new car")
			}
		} catch (error) {
			setErrorMessage(error.message)
		}
		setTimeout(() => {
			setSuccessMessage("")
			setErrorMessage("")
		}, 3000)
	}

	return (
		<>
			<section className="container mt-5 mb-5">
				<div className="row justify-content-center">
					<div className="col-md-8 col-lg-6">
						<h2 className="mt-5 mb-2">Add a New Car</h2>
						{successMessage && (
							<div className="alert alert-success fade show"> {successMessage}</div>
						)}

						{errorMessage && <div className="alert alert-danger fade show"> {errorMessage}</div>}

						<form onSubmit={handleSubmit}>
							<div className="mb-3">
								<label htmlFor="carType" className="form-label">
									Car Type
								</label>
								<div>
									<CarTypeSelector
										handleCarInputChange={handleCarInputChange}
										newCar={newCar}
									/>
								</div>
							</div>
							<div className="mb-3">
								<label htmlFor="carPrice" className="form-label">
									Car Price
								</label>
								<input
									required
									type="number"
									className="form-control"
									id="carPrice"
									name="carPrice"
									value={newCar.carPrice}
									onChange={handleCarInputChange}
								/>
							</div>
							<div className="d-grid gap-2 d-md-flex mt-2">
								<Link to={"/existing-cars"} className="btn btn-outline-info">
									Existing cars
								</Link>
								<button type="submit" className="btn btn-outline-primary ml-5">
									Save Car
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	)
}

export default AddCar

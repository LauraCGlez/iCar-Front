import React, { useEffect, useState } from "react"
import { getCarById, updateCar } from "../utils/ApiFunctions"
import { Link, useParams } from "react-router-dom"
import defaultImage from "../../assets/images/A.jpeg"

const EditCar = () => {
	const [car, setRoom] = useState({
		photo: "",
		carType: "",
		carPrice: ""
	})

	const [imagePreview, setImagePreview] = useState("")
	const [successMessage, setSuccessMessage] = useState("")
	const [errorMessage, setErrorMessage] = useState("")
	const { carId } = useParams()

	const handleImageChange = (e) => {
		const selectedImage = e.target.files[0]
		setCar({ ...car, photo: selectedImage })
		setImagePreview(URL.createObjectURL(selectedImage))
	}

	const handleInputChange = (event) => {
		const { name, value } = event.target
		setCar({ ...car, [name]: value })
	}

	useEffect(() => {
		const fetchCar = async () => {
			try {
				const carData = await getCarById(carId)
				setCar(carData)
				setImagePreview(carData.photo)
			} catch (error) {
				console.error(error)
			}
		}

		fetchCar()
	}, [carId])

	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			const response = await updateCar(carId, car)
			if (response.status === 200) {
				setSuccessMessage("Car updated successfully!")
				const updatedCarData = await getCarById(carId)
				setRoom(updatedCarData)
				setImagePreview(updatedCarData.photo)
				setErrorMessage("")
			} else {
				setErrorMessage("Error updating car")
			}
		} catch (error) {
			console.error(error)
			setErrorMessage(error.message)
		}
	}

	return (
		<div className="container mt-5 mb-5">
			<h3 className="text-center mb-5 mt-5">Edit Car</h3>
			<div className="row justify-content-center">
				<div className="col-md-8 col-lg-6">
					{successMessage && (
						<div className="alert alert-success" role="alert">
							{successMessage}
						</div>
					)}
					{errorMessage && (
						<div className="alert alert-danger" role="alert">
							{errorMessage}
						</div>
					)}
					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<label htmlFor="carType" className="form-label app-color">
								Car Type
							</label>
							<input
								type="text"
								className="form-control"
								id="carType"
								name="carType"
								value={car.carType}
								onChange={handleInputChange}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="carPrice" className="form-label app-color">
								Car Price
							</label>
							<input
								type="number"
								className="form-control"
								id="carPrice"
								name="carPrice"
								value={car.carPrice}
								onChange={handleInputChange}
							/>
						</div>

						<div className="mb-3">
							<label htmlFor="photo" className="form-label app-color">
								Photo
							</label>
							<input
								required
								type="file"
								className="form-control"
								id="photo"
								name="photo"
								onChange={handleImageChange}
							/>
							{imagePreview && (
								<img
									src={defaultImage}
									alt="Car preview"
									style={{ maxWidth: "400px", maxHeight: "400" }}
									className="mt-3"
								/>
							)}
						</div>
						<div className="d-grid gap-2 d-md-flex mt-2">
							<Link to={"/existing-cars"} className="btn btn-outline-info ml-5">
								back
							</Link>
							<button type="submit" className="btn btn-outline-warning">
								Edit Car
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
export default EditCar

import React, { useEffect, useState } from "react"
import { deleteCar, getAllCars } from "../utils/ApiFunctions"
import { Col, Row } from "react-bootstrap"
import CarFilter from "../common/CarFilter.jsx"
import CarPaginator from "../common/CarPaginator.jsx"
import { FaEdit, FaEye, FaPlus, FaTrashAlt } from "react-icons/fa"
import { Link } from "react-router-dom"

const ExistingCars = () => {
	const [cars, setCars] = useState([{ id: "", carType: "", carPrice: "" }])
	const [currentPage, setCurrentPage] = useState(1)
	const [carsPerPage] = useState(8)
	const [isLoading, setIsLoading] = useState(false)
	const [filteredCars, setFilteredCars] = useState([{ id: "", carType: "", carPrice: "" }])
	const [selectedCarType, setSelectedCarType] = useState("")
	const [errorMessage, setErrorMessage] = useState("")
	const [successMessage, setSuccessMessage] = useState("")

	useEffect(() => {
		fetchCars()
	}, [])

	const fetchCars = async () => {
		setIsLoading(true)
		try {
			const result = await getAllCars()
			setCars(result)
			setIsLoading(false)
		} catch (error) {
			setErrorMessage(error.message)
			setIsLoading(false)
		}
	}

	useEffect(() => {
		if (selectedCarType === "") {
			setFilteredCars(cars)
		} else {
			const filteredCars = cars.filter((car) => car.carType === selectedCarType)
			setFilteredCars(filteredCars)
		}
		setCurrentPage(1)
	}, [cars, selectedCarType])

	const handlePaginationClick = (pageNumber) => {
		setCurrentPage(pageNumber)
	}

	const handleDelete = async (carId) => {
		try {
			const result = await deleteCar(carId)
			if (result === "") {
				setSuccessMessage(`Car No ${carId} was delete`)
				fetchCars()
			} else {
				console.error(`Error deleting car : ${result.message}`)
			}
		} catch (error) {
			setErrorMessage(error.message)
		}
		setTimeout(() => {
			setSuccessMessage("")
			setErrorMessage("")
		}, 3000)
	}

	const calculateTotalPages = (filteredCars, carsPerPage, cars) => {
		const totalCars = filteredCars.length > 0 ? filteredCars.length : cars.length
		return Math.ceil(totalCars / carsPerPage)
	}

	const indexOfLastCar = currentPage * carsPerPage
	const indexOfFirstCar = indexOfLastCar - carsPerPage
	const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar)

	return (
		<>
			<div className="container col-md-8 col-lg-6">
				{successMessage && <p className="alert alert-success mt-5">{successMessage}</p>}

				{errorMessage && <p className="alert alert-danger mt-5">{errorMessage}</p>}
			</div>

			{isLoading ? (
				<p>Loading existing cars</p>
			) : (
				<>
					<section className="mt-5 mb-5 container">
						<div className="d-flex justify-content-between mb-3 mt-5">
							<h2>Existing Cars</h2>
						</div>

						<Row>
							<Col md={6} className="mb-2 md-mb-0">
								<CarFilter data={cars} setFilteredData={setFilteredCars} />
							</Col>

							<Col md={6} className="d-flex justify-content-end">
								<Link to={"/add-car"}>
									<FaPlus /> Add Car
								</Link>
							</Col>
						</Row>

						<table className="table table-bordered table-hover">
							<thead>
								<tr className="text-center">
									<th>ID</th>
									<th>Car Type</th>
									<th>Car Price</th>
									<th>Actions</th>
								</tr>
							</thead>

							<tbody>
								{currentCars.map((car) => (
									<tr key={car.id} className="text-center">
										<td>{car.id}</td>
										<td>{car.carType}</td>
										<td>{car.carPrice}</td>
										<td className="gap-2">
											<Link to={`/edit-car/${car.id}`} className="gap-2">
												<span className="btn btn-info btn-sm">
													<FaEye />
												</span>
												<span className="btn btn-warning btn-sm ml-5">
													<FaEdit />
												</span>
											</Link>
											<button
												className="btn btn-danger btn-sm ml-5"
												onClick={() => handleDelete(car.id)}>
												<FaTrashAlt />
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						<CarPaginator
							currentPage={currentPage}
							totalPages={calculateTotalPages(filteredCars, carsPerPage, cars)}
							onPageChange={handlePaginationClick}
						/>
					</section>
				</>
			)}
		</>
	)
}

export default ExistingCars

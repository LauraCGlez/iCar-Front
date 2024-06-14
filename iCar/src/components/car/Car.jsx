import React, { useEffect, useState } from "react"
import { getAllCars } from "../utils/ApiFunctions"
import CarCard from "./CarCard.jsx"
import { Col, Container, Row } from "react-bootstrap"
import CarFilter from "../common/CarFilter.jsx"
import CarPaginator from "../common/CarPaginator.jsx"

const Car = () => {
	const [data, setData] = useState([])
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const [carsPerPage] = useState(6)
	const [filteredData, setFilteredData] = useState([{ id: "" }])

	useEffect(() => {
		setIsLoading(true)
		getAllCars()
			.then((data) => {
				setData(data)
				setFilteredData(data)
				setIsLoading(false)
			})
			.catch((error) => {
				setError(error.message)
				setIsLoading(false)
			})
	}, [])
	if (isLoading) {
		return <div>Loading cars.....</div>
	}
	if (error) {
		return <div className=" text-danger">Error : {error}</div>
	}

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber)
	}

	const totalPages = Math.ceil(filteredData.length / carsPerPage)

	const renderCars = () => {
		const startIndex = (currentPage - 1) * carsPerPage
		const endIndex = startIndex + carsPerPage
		return filteredData
			.slice(startIndex, endIndex)
			.map((car) => <CarCard key={car.id} car={car} />)
	}

	return (
		<Container>
			<Row>
				<Col md={6} className="mb-3 mb-md-0">
					<CarFilter data={data} setFilteredData={setFilteredData} />
				</Col>

				<Col md={6} className="d-flex align-items-center justify-content-end">
					<CarPaginator
						currentPage={currentPage}
						totalPages={totalPages}
						onPageChange={handlePageChange}
					/>
				</Col>
			</Row>

			<Row>{renderCars()}</Row>

			<Row>
				<Col md={6} className="d-flex align-items-center justify-content-end">
					<CarPaginator
						currentPage={currentPage}
						totalPages={totalPages}
						onPageChange={handlePageChange}
					/>
				</Col>
			</Row>
		</Container>
	)
}

export default Car

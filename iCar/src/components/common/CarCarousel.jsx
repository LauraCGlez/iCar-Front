import React, { useEffect, useState } from "react"
import { getAllCars } from "../utils/ApiFunctions"
import { Link } from "react-router-dom"
import { Card, Carousel, Col, Container, Row } from "react-bootstrap"
import defaultImage from "../../assets/images/A.jpeg"

const CarCarousel = () => {
	const [cars, setCars] = useState([{ id: "", carType: "", carPrice: "", photo: "" }])
	const [errorMessage, setErrorMessage] = useState("")
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)
		getAllCars()
			.then((data) => {
				setCars(data)
				setIsLoading(false)
			})
			.catch((error) => {
				setErrorMessage(error.message)
				setIsLoading(false)
			})
	}, [])

	if (isLoading) {
		return <div className="mt-5">Loading cars....</div>
	}
	if (errorMessage) {
		return <div className=" text-danger mb-5 mt-5">Error : {errorMessage}</div>
	}

	return (
		<section className="bg-light mb-5 mt-5 shadow">
			<Link to={"/browse-all-cars"} className="hote-color text-center">
				Browse all cars
			</Link>

			<Container>
				<Carousel indicators={false}>
					{[...Array(Math.ceil(cars.length / 4))].map((_, index) => (
						<Carousel.Item key={index}>
							<Row>
								{cars.slice(index * 4, index * 4 + 4).map((car) => (
									<Col key={car.id} className="mb-4" xs={12} md={6} lg={3}>
										<Card>
											<Link to={`/book-car/${car.id}`}>
												<Card.Img
													variant="top"
													src={defaultImage}
													alt="Car Photo"
													className="w-100"
													style={{ height: "200px" }}
												/>
											</Link>
											<Card.Body>
												<Card.Title className="hotel-color">{car.carType}</Card.Title>
												<Card.Title className="room-price">${car.carPrice}/night</Card.Title>
												<div className="flex-shrink-0">
													<Link to={`/book-car/${car.id}`} className="btn btn-hotel btn-sm">
														Book Now
													</Link>
												</div>
											</Card.Body>
										</Card>
									</Col>
								))}
							</Row>
						</Carousel.Item>
					))}
				</Carousel>
			</Container>
		</section>
	)
}

export default CarCarousel

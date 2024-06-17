import React, { useEffect, useState } from "react"
import defaultImage from "../../assets/images/A.jpeg"
import BookingForm from "../booking/BookingForm"
import {
	FaUtensils,
	FaWifi,
	FaTv,
	FaWineGlassAlt,
	FaParking,
	FaCar,
	FaTshirt
} from "react-icons/fa"

import { useParams } from "react-router-dom"
import { getCarById } from "../utils/ApiFunctions"
import CarCarousel from "../common/CarCarousel.jsx"

const Checkout = () => {
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [carInfo, setCarInfo] = useState({
		photo: "",
		carType: "",
		carPrice: ""
	})

	const { carId } = useParams()

	useEffect(() => {
		setTimeout(() => {
			getCarById(carId)
				.then((response) => {
					setCarInfo(response)
					setIsLoading(false)
				})
				.catch((error) => {
					setError(error)
					setIsLoading(false)
				})
		}, 1000)
	}, [carId])

	return (
		<div>
			<section className="container">
				<div className="row">
					<div className="col-md-4 mt-5 mb-5">
						{isLoading ? (
							<p>Loading car information...</p>
						) : error ? (
							<p>{error}</p>
						) : (
							<div className="room-info">
								<img
									src={defaultImage}
									alt="Car photo"
									style={{ width: "100%", height: "200px" }}
								/>
								<table className="table table-bordered">
									<tbody>
										<tr>
											<th>Car Type:</th>
											<td>{carInfo.carType}</td>
										</tr>
										<tr>
											<th>Price per day:</th>
											<td>${carInfo.carPrice}</td>
										</tr>
										<tr>
											<th>Car Service:</th>
											<td>
												<ul className="list-unstyled">
													<li>
														<FaWifi /> Wifi
													</li>
													<li>
														<FaTv /> Netfilx Premium
													</li>
													<li>
														<FaUtensils /> Breakfast
													</li>
													<li>
														<FaWineGlassAlt /> Mini bar refreshment
													</li>
													<li>
														<FaCar /> Car Service
													</li>
													<li>
														<FaParking /> Parking Space
													</li>
													<li>
														<FaTshirt /> Laundry
													</li>
												</ul>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						)}
					</div>
					<div className="col-md-8">
						<BookingForm />
					</div>
				</div>
			</section>
			<div className="container">
				<CarCarousel />
			</div>
		</div>
	)
}
export default Checkout

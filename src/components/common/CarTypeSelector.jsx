import React, { useState, useEffect } from "react"
import { getCarTypes } from "../utils/ApiFunctions"

const CarTypeSelector = ({ handleCarInputChange, newCar }) => {
	const [carTypes, setCarTypes] = useState([""])

	useEffect(() => {
		getCarTypes().then((data) => {
			setCarTypes(data)
		})
	}, [])

	return (
		<>
			{carTypes.length > 0 && (
				<div>
					<select
						required
						className="form-select"
						name="carType"
						onChange={handleCarInputChange}
						value={newCar ? newCar.carType : ""}>
						<option value="">Select a car type</option>
						{carTypes.map((type, index) => (
							<option key={index} value={type}>
								{type}
							</option>
						))}
					</select>
				</div>
			)}
		</>
	)
}

export default CarTypeSelector

import React, { useState } from "react"

const CarFilter = ({ data, setFilteredData }) => {
	const [filter, setFilter] = useState("")

	const handleSelectChange = (e) => {
		const selectedType = e.target.value
		setFilter(selectedType)

		const filteredCars = data.filter((car) =>
			car.carType.toLowerCase().includes(selectedType.toLowerCase())
		)
		setFilteredData(filteredCars)
	}

	const clearFilter = () => {
		setFilter("")
		setFilteredData(data)
	}

	const carTypes = ["", ...new Set(data.map((car) => car.carType))]

	return (
		<div className="input-group mb-3">
			<span className="input-group-text" id="room-type-filter">
				Filter cars by type
			</span>
			<select
				className="form-select"
				aria-label="romm type filter"
				value={filter}
				onChange={handleSelectChange}>
				<option value="">select a car type to filter....</option>
				{carTypes.map((type, index) => (
					<option key={index} value={String(type)}>
						{String(type)}
					</option>
				))}
			</select>
			<button className="btn btn-hotel" type="button" onClick={clearFilter}>
				Clear Filter
			</button>
		</div>
	)
}
export default CarFilter

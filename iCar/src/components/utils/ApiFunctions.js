import axios from "axios"

export const api = axios.create({
	baseURL: "http://localhost:8080"
})

export const getHeader = () => {
	const token = localStorage.getItem("token")
	return {
		Authorization: `Bearer ${token}`,
		"Content-Type": "application/json"
	}
}

/* This function adds a new car to the database */
export async function addCar(carType, carPrice) {
	const formData = new FormData();
	formData.append("carType", carType);
	formData.append("carPrice", carPrice);

	const response = await api.post("/cars/add/new-car", formData, {
		headers: getHeader()
	});

	if (response.status === 201) {
		return true;
	} else {
		return false;
	}
}

/* This function gets all car types from thee database */
export async function getCarTypes() {
	try {
		const response = await api.get("/cars/car/types")
		return response.data
	} catch (error) {
		throw new Error("Error fetching car types")
	}
}
/* This function gets all rooms from the database */
export async function getAllCars() {
	try {
		const result = await api.get("/cars/all-cars")
		return result.data
	} catch (error) {
		throw new Error("Error fetching cars")
	}
}

/* This function deletes a car by the Id */
export async function deleteCar(carId) {
	try {
		const result = await api.delete(`/cars/delete/car/${carId}`, {
			headers: getHeader()
		})
		return result.data
	} catch (error) {
		throw new Error(`Error deleting car ${error.message}`)
	}
}
/* This function update a car */
export async function updateCar(carId, carData) {
	const formData = new FormData()
	formData.append("carType", carData.carType)
	formData.append("carPrice", carData.carPrice)
	formData.append("photo", carData.photo)

	const response = await api.put(`/cars/update/${carId}`, formData,{
		headers: getHeader()
	})
	return response
}

/* This funcction gets a car by the id */
export async function getCarById(carId) {
	try {
		const result = await api.get(`/cars/car/${carId}`)
		return result.data
	} catch (error) {
		throw new Error(`Error fetching car ${error.message}`)
	}
}

/* This function saves a new booking to the databse */
export async function bookCar(carId, booking) {
	try {
		const response = await api.post(`/bookings/car/${carId}/booking`, booking)
		return response.data
	} catch (error) {
		if (error.response && error.response.data) {
			throw new Error(error.response.data)
		} else {
			throw new Error(`Error booking car : ${error.message}`)
		}
	}
}

/* This function gets alll bokings from the database */
export async function getAllBookings() {
	try {
		const result = await api.get("/bookings/all-bookings", {
			headers: getHeader()
		})
		return result.data
	} catch (error) {
		throw new Error(`Error fetching bookings : ${error.message}`)
	}
}

/* This function get booking by the cnfirmation code */
export async function getBookingByConfirmationCode(confirmationCode) {
	try {
		const result = await api.get(`/bookings/confirmation/${confirmationCode}`)
		return result.data
	} catch (error) {
		if (error.response && error.response.data) {
			throw new Error(error.response.data)
		} else {
			throw new Error(`Error find booking : ${error.message}`)
		}
	}
}

/* This is the function to cancel user booking */
export async function cancelBooking(bookingId) {
	try {
		const result = await api.delete(`/bookings/booking/${bookingId}/delete`)
		return result.data
	} catch (error) {
		throw new Error(`Error cancelling booking :${error.message}`)
	}
}

/* This function gets all availavle cars from the database with a given date and a car type */
export async function getAvailableCars(checkInDate, checkOutDate, carType) {
	const result = await api.get(
		`cars/available-cars?checkInDate=${checkInDate}
		&checkOutDate=${checkOutDate}&carType=${carType}`
	)
	return result
}

/* This function register a new user */
export async function registerUser(registration) {
	try {
		const response = await api.post("/auth/register-user", registration)
		return response.data
	} catch (error) {
		if (error.reeponse && error.response.data) {
			throw new Error(error.response.data)
		} else {
			throw new Error(`User registration error : ${error.message}`)
		}
	}
}

/* This function login a registered user */
export async function loginUser(login) {
	try {
		const response = await api.post("/auth/login", login)
		if (response.status >= 200 && response.status < 300) {
			return response.data
		} else {
			return null
		}
	} catch (error) {
		console.error(error)
		return null
	}
}

/*  This is function to get the user profile */
export async function getUserProfile(userId, token) {
	try {
		const response = await api.get(`users/profile/${userId}`, {
			headers: getHeader()
		})
		return response.data
	} catch (error) {
		throw error
	}
}

/* This isthe function to delete a user */
export async function deleteUser(userId) {
	try {
		const response = await api.delete(`/users/delete/${userId}`, {
			headers: getHeader()
		})
		return response.data
	} catch (error) {
		return error.message
	}
}

/* This is the function to get a single user */
export async function getUser(userId, token) {
	try {
		const response = await api.get(`/users/${userId}`, {
			headers: getHeader()
		})
		return response.data
	} catch (error) {
		throw error
	}
}

/* This is the function to get user bookings by the user id */
export async function getBookingsByUserId(userId, token) {
	try {
		const response = await api.get(`/bookings/user/${userId}/bookings`, {
			headers: getHeader()
		})
		return response.data
	} catch (error) {
		console.error("Error fetching bookings:", error.message)
		throw new Error("Failed to fetch bookings")
	}
}

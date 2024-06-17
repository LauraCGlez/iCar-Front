import React from "react"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import ExistingCars from "./components/car/ExistingCars.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"
import EditCar from "./components/car/EditCar.jsx"
import AddCar from "./components/car/AddCar.jsx"
import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer"
import CarListing from "./components/car/CarListing.jsx"
import Admin from "./components/admin/Admin"
import Checkout from "./components/booking/Checkout"
import BookingSuccess from "./components/booking/BookingSuccess"
import Bookings from "./components/booking/Bookings"
import FindBooking from "./components/booking/FindBooking"
import Login from "./components/auth/Login"
import Registration from "./components/auth/Registration"
import Profile from "./components/auth/Profile"
import { AuthProvider } from "./components/auth/AuthProvider.jsx"
import RequireAuth from "./components/auth/RequireAuth"
import UnderDevelopment from "./components/layout/UnderMaintenance/UnderDevelopment.jsx";

function App() {
  return (
    <AuthProvider>
      <main>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/edit-car/:carId" element={<EditCar />} />
            <Route path="/existing-cars" element={<ExistingCars />} />
            <Route path="/add-car" element={<AddCar />} />
            <Route path="/under-development" element={<UnderDevelopment />} />

            <Route
              path="/book-car/:carId"
              element={
                <RequireAuth>
                  <Checkout />
                </RequireAuth>
              }
            />
            <Route path="/browse-all-cars" element={<CarListing />} />

            <Route path="/admin" element={<Admin />} />
            <Route path="/booking-success" element={<BookingSuccess />} />
            <Route path="/existing-bookings" element={<Bookings />} />
            <Route path="/find-booking" element={<FindBooking />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<FindBooking />} />
          </Routes>
        </Router>
        <Footer />
      </main>
    </AuthProvider>
  )
}

export default App

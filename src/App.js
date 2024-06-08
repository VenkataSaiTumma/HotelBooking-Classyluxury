import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllLogins from "./components/Registration/AllLogins";
import Homepage from "./components/Homepage";
import Hotel from "./components/HotelsPage/Hotel";
import ErrorPage from "./components/ErrorPage";
import BookRoom from "./components/Booking/BookRoom";
import Bookings from "./components/Booking/Bookings";
import AddReview from "./components/Review/AddReview";
import ViewReview from "./components/Review/ViewReview";
import Header from "./components/Header/Header";
import ProfilePage from "./components/ProfilePage";
import Reschedule from "./components/UpdateDate/Reschedule";

const App = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AllLogins />} />
        <Route path="/homepage" element={user ? <Homepage /> : <ErrorPage />} />
        <Route path="/hotel" element={user ? <Hotel /> : <ErrorPage />} />
        <Route
          path="/bookroom/:hotelname"
          element={user ? <BookRoom /> : <ErrorPage />}
        />

        <Route path="/bookings" element={user ? <Bookings /> : <ErrorPage />} />

        <Route
          path="/reschedule/:id"
          element={user ? <Reschedule /> : <ErrorPage />}
        />

        <Route
          path="/addReview/:reviews"
          element={user ? <AddReview /> : <ErrorPage />}
        />
        <Route
          path="/viewReview/:reviews"
          element={user ? <ViewReview /> : <ErrorPage />}
        />
        <Route path="/profile/:name" element={<ProfilePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;

import { styled } from "styled-components";
import FormData from "../Registration/FormData";
import { useState, useEffect } from "react";
import axios from "axios";
import { finalData } from "../HotelsPage/Menu";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookRoom = () => {
  const [roomData, setRoomData] = useState({
    startDate: "",
    endDate: "",
    noOfPersons: "",
    noOfRooms: "",
    typeOfRoom: "",
    hotelName: "",
    hotelId: "",
    userId: "",
  });
  // console.log(finalData);

  // Getting the data from Menu[HotelPage] component and assigning to roomData
  roomData.hotelId = finalData.id;
  roomData.hotelName = finalData.hotelname;

  // Assigning it to userId (Server "/bookings")
  const [items, setItems] = useState([]);

  roomData.userId = items.id;
  // console.log(roomData.userId);

  const handleSubmit = async (e) => {
    toast.success("Room Booked Successfully");
    e.preventDefault();

    // To clear the value after form is submitted
    let emptyValues = {
      startDate: "",
      endDate: "",
      noOfPersons: "",
      noOfRooms: "",
      typeOfRoom: "",
    };
    setRoomData(emptyValues);

    try {
      await axios.post("http://localhost:3000/bookings", roomData);
    } catch (error) {
      console.log(error);
    }
  };

  // Getting the used id from local storage
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("userId"));
    if (items) {
      setItems(items);
    }
  }, []);

  const handleChange = (e) => {
    setRoomData({ ...roomData, [e.target.name]: e.target.value });
  };
  return (
    <Wrapper>
      {/* Book a Room */}
      <section>
        <div className="Form">
          <div className="title">Book a Room</div>
          <form onSubmit={handleSubmit} className="allForm">
            <FormData
              type="date"
              name="startDate"
              value={roomData.startDate}
              handleChange={handleChange}
            />

            <FormData
              type="date"
              name="endDate"
              value={roomData.endDate}
              handleChange={handleChange}
            />

            <FormData
              type="text"
              name="noOfPersons"
              value={roomData.noOfPersons}
              handleChange={handleChange}
            />

            <FormData
              type="text"
              name="noOfRooms"
              value={roomData.noOfRooms}
              handleChange={handleChange}
            />

            <FormData
              type="text"
              name="typeOfRoom"
              value={roomData.typeOfRoom}
              handleChange={handleChange}
            />

            <button type="submit" className="btn">
              Register
            </button>
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss={false}
              draggable
              pauseOnHover={false}
              theme="light"
            />
          </form>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .Form {
    display: grid;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: #d1e8e2;
    border-radius: 10px;
    width: 25%;
    height: 430px;
    margin: 96px 0px 0px 512px;
  }

  .allForm {
    margin: 0px 112px 0px -29px;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2c3531;
    font-family: cursive;
    font-size: x-large;
  }

  label {
    color: #907163;
    text-transform: capitalize;
  }

  input {
    width: 150%;
    border: none;
    padding: 4px 13px 5px 0px;
    margin: 4px 2px 9px 15px;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .btn {
    width: 120%;
    padding: 8px;
    margin: 10px 0px 0px 47px;
    background: linear-gradient(to left, #0677a1, #2d4159);
    color: white;
    border: none;
    border-radius: 5px;
  }

  .btn:hover {
    color: hsl(22, 28%, 21%);
    background: linear-gradient(to left, #8fc1e3, #5085a5);
  }

  @media (max-width: 1340px) {
    .Form {
      width: 30%;
      margin: 99px 1px 0px 330px;
    }
  }

  @media (max-width: 1060px) {
    .Form {
      width: 35%;
      margin: 99px 1px 0px 330px;
    }
  }

  @media (max-width: 970px) {
    .Form {
      width: 45%;
      margin: 99px 1px 0px 192px;
    }
  }

  @media (max-width: 820px) {
    .Form {
      width: 50%;
      margin: 99px 1px 0px 192px;
    }
  }

  @media (max-width: 650px) {
    .Form {
      width: 65%;
      margin: 86px 0px 0px 92px;
    }
  }

  /* For Mobile Device */
  @media (max-width: 553px) {
    .Form {
      width: 83%;
      margin: 86px 0px 0px 56px;
    }
  }
`;

export default BookRoom;

import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormData from "../Registration/FormData";
import axios from "axios";

const Reschedule = () => {
  const { id } = useParams();

  const [bookData, setBookData] = useState();

  const [startDate, setStartDate] = useState();

  const [endDate, setEndDate] = useState();

  const noOfPersons = bookData ? bookData.noOfPersons : null;

  const noOfRooms = bookData ? bookData.noOfPersons : null;

  const typeOfRoom = bookData ? bookData.typeOfRoom : null;

  const hotelName = bookData ? bookData.hotelName : null;

  const hotelId = bookData ? bookData.hotelId : null;

  const userId = bookData ? bookData.userId : null;

  const fetchData = async () => {
    await axios
      .get(`http://localhost:3000/bookings/${id}`)
      .then((response) => setBookData(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    toast.success("Updated Successfully");
    e.preventDefault();

    // To clear the values after form is submitted
    let emptyValues = {
      startDate: "",
      endDate: "",
    };
    setStartDate(emptyValues);
    setEndDate(emptyValues);

    try {
      await axios.put(`http://localhost:3000/bookings/${id}`, {
        startDate,
        endDate,
        noOfPersons,
        noOfRooms,
        typeOfRoom,
        hotelName,
        hotelId,
        userId,
      });
    } catch (error) {
      console.log(console.error());
    }
  };

  return (
    <Wrapper>
      <section>
        <div className="Form">
          <div className="title">Book a Room</div>
          <form onSubmit={handleSubmit} className="allForm">
            {/* Start Date */}
            <FormData
              type="date"
              name="startDate"
              value={startDate}
              handleChange={(e) => setStartDate(e.target.value)}
            />

            <FormData
              type="date"
              name="endDate"
              value={endDate}
              handleChange={(e) => setEndDate(e.target.value)}
            />

            <button type="submit" className="btn">
              Reschedule
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
    height: 280px;
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

export default Reschedule;

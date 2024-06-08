import { styled } from "styled-components";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Menu = ({ item }) => {
  // console.log(item);

  // Storing particular user details
  const [items, setItems] = useState([]);

  //Getting the required user Logged details
  const result = item.filter(({ userId }) => userId === items.id);
  // console.log(result);

  // getting the userId for Displaying logged user details & Delete request
  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("userId"));
    if (userDetails) {
      setItems(userDetails);
    }
  }, []);

  if (result == "") {
    return <h2 className="noRoom">You haven't booked any room yet...</h2>;
  }

  return (
    <Wrapper>
      <div className="float-container">
        {result.map((menuItem) => {
          const {
            id,
            hotelName,
            startDate,
            endDate,
            noOfPersons,
            noOfRooms,
            typeOfRoom,
          } = menuItem;
          return (
            <article key={id} className="float-child">
              <div className="Main-section">
                <span>Hotel Name: </span>
                {hotelName}
              </div>
              <div className="Main-section">
                <span>Start Date: </span>
                {startDate}
              </div>
              <div className="Main-section">
                <span>End Date: </span>
                {endDate}
              </div>
              <div className="data">
                <div className="Main-section">
                  <span className="alignData">No of Persons: </span>
                  {noOfPersons}
                </div>
                <div className="Main-section">
                  <span className="alignData">No of Rooms: </span>
                  {noOfRooms}
                </div>
              </div>
              <div className="Main-section">
                <span>Type of Room: </span>
                {typeOfRoom}
              </div>

              {/* Update URL */}
              <Link to={`/reschedule/${id}`} className="btns">
                Reschedule
              </Link>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .float-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
  }

  .float-child {
    display: grid;
    align-items: center;
    justify-content: center;
    width: 20%;
    height: 180px;
    float: left;
    padding: 20px;
    margin-bottom: 1rem;
    background-color: #d1e8e2;
    border-radius: 30px;
  }

  span {
    font-weight: 500;
    color: #282828;
  }

  div {
    color: #950740;
    font-size: 15px;
    font-family: Comic Sans MS, Comic Sans, cursive;
  }

  h4,
  h5 {
    color: #907163;
    font-family: Comic Sans MS, Comic Sans, cursive;
    margin: 5px;
    font-size: small;
  }

  h4 {
    padding: 0px 0px 0px -24px;
  }

  h5 {
    padding: 9px 0px 2px 1px;
  }

  .data {
    display: flex;
  }

  .alignData {
    padding: 5px 0px 0px 2px;
    margin: 5px;
  }

  .btns {
    background: linear-gradient(to left, #0677a1, #2d4159);
    letter-spacing: 0.03rem;
    color: white;
    border: none;
    width: 80px;
    height: 30px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    border-radius: 5px;
  }

  @media (max-width: 1035px) {
    .float-child {
      width: 35%;
    }
  }

  @media screen and (max-width: 710px) {
    .float-child {
      width: 40%;
    }
  }
`;

export default Menu;

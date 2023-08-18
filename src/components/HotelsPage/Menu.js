import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// sending id , hotelname to Bookroom component
export let finalData = [];

const Menu = ({ hotel }) => {
  // console.log(finalData);
  const {
    id: mainId,
    hotelname: mainName,
    city: mainCity,
    amenities: mainAmenities,
    phoneNo: mainPhoneNo,
    address: mainAddress,
    imageUrl: mainImageUrl,
  } = hotel[0] || {};

  const {
    id: mainId1,
    hotelname: mainName1,
    city: mainCity1,
    amenities: mainAmenities1,
    phoneNo: mainPhoneNo1,
    address: mainAddress1,
    imageUrl: mainImageUrl1,
  } = hotel[1] || {};

  const {
    id: mainId2,
    hotelname: mainName2,
    city: mainCity2,
    amenities: mainAmenities2,
    phoneNo: mainPhoneNo2,
    address: mainAddress2,
    imageUrl: mainImageUrl2,
  } = hotel[2] || {};

  // storing id, hotelname of hotel0, hotel1, hotel2 and send to BookRoom component
  const [updated, setUpdated] = useState({
    id: "",
    hotelname: "",
    reviews: "",
  });
  // console.log(updated);

  finalData = updated;

  const [hotelID, setHotelID] = useState([]);
  updated.id = hotelID;

  const [name, setName] = useState([]);
  updated.hotelname = name;

  const [review, setReview] = useState([]);
  updated.reviews = review;

  const navigate = useNavigate();

  // Hotel1
  // Getting the hotelId, hotelName
  const navigateToRoom1 = () => {
    navigate(`/bookroom/${hotel[0].hotelname}`);
    //Getting the hotel id
    const box1 = document.getElementById("id1");
    setHotelID(box1.getAttribute("data-test"));
    setName(hotel[0].hotelname);
    // console.log(box1.getAttribute("data-test"));
  };

  // Hotel2
  const navigateToRoom2 = () => {
    navigate(`/bookroom/${hotel[1].hotelname}`);

    //Getting the hotel id
    const box2 = document.getElementById("id2");
    setHotelID(box2.getAttribute("data-test"));
    setName(hotel[1].hotelname);
  };

  // Hotel3
  const navigateToRoom3 = () => {
    navigate(`/bookroom/${hotel[2].hotelname}`);

    //Getting the hotel id
    const box3 = document.getElementById("id3");
    setHotelID(box3.getAttribute("data-test"));
    setName(hotel[2].hotelname);
  };

  // AddReview1
  // Getting the hotelId on clicking on review button
  const navigateAddReview1 = () => {
    navigate(`/addReview/${hotel[0].hotelname}`);
    const box1 = document.getElementById("id1");
    setHotelID(box1.getAttribute("data-test"));
    setReview(hotel[0].reviews);
  };

  // AddReview2
  const navigateAddReview2 = () => {
    navigate(`/addReview/${hotel[1].hotelname}`);
    const box2 = document.getElementById("id2");
    setHotelID(box2.getAttribute("data-test"));
    setReview(hotel[1].reviews);
  };

  // AddReview3
  const navigateAddReview3 = () => {
    navigate(`/addReview/${hotel[2].hotelname}`);
    const box3 = document.getElementById("id3");
    setHotelID(box3.getAttribute("data-test"));
    setReview(hotel[2].reviews);
  };

  const navigateViewReview1 = () => {
    navigate(`/viewReview/${hotel[0].hotelname}`);
    setReview(hotel[0].reviews);
  };

  const navigateViewReview2 = () => {
    navigate(`/viewReview/${hotel[1].hotelname}`);
    setReview(hotel[1].reviews);
  };

  const navigateViewReview3 = () => {
    navigate(`/viewReview/${hotel[2].hotelname}`);
    setReview(hotel[2].reviews);
    console.log(hotel[2].reviews);
  };

  return (
    <Wrapper>
      <div className="section-center">
        {/* Hotel 1 */}
        <article className="menu-item">
          <div>
            <img src={mainImageUrl} alt="pic" className="image" />
          </div>
          <h3>{mainName}</h3>
          <div className="flex">
            <span>city:{mainCity}</span>
            <span>Amentities:{mainAmenities}</span>
            <span>Address:{mainAddress}</span>
            <span>Contact No:{mainPhoneNo}</span>
          </div>
          <div className="Mainbtns">
            <button
              className="btns"
              id="id1"
              data-test={`${mainId}`}
              onClick={navigateToRoom1}
            >
              Book A Room
            </button>
            <button
              className="btns"
              id="id1"
              data-test={`${mainId}`}
              onClick={navigateAddReview1}
            >
              Add Review
            </button>
            <button className="btns" onClick={navigateViewReview1}>
              View Review
            </button>
          </div>
        </article>

        {/* Hotel 2 */}
        <article className="menu-item">
          <div>
            <img src={mainImageUrl1} alt="pic" className="image" />
          </div>
          <h3>{mainName1}</h3>
          <div className="flex">
            <span>city:{mainCity1}</span>
            <span>Amentities:{mainAmenities1}</span>
            <span>Address:{mainAddress1}</span>
            <span>Contact No:{mainPhoneNo1}</span>
          </div>
          <div className="Mainbtns">
            <button
              className="btns"
              id="id2"
              data-test={`${mainId1}`}
              onClick={navigateToRoom2}
            >
              Book A Room
            </button>
            <button
              className="btns"
              id="id1"
              data-test={`${mainId}`}
              onClick={navigateAddReview2}
            >
              Add Review
            </button>
            <button className="btns" onClick={navigateViewReview2}>
              View Review
            </button>
          </div>
        </article>

        {/* Hotel 3 */}
        <article className="menu-item">
          <div>
            <img src={mainImageUrl2} alt="pic" className="image" />
          </div>
          <h3>{mainName2}</h3>
          <div className="flex">
            <span>city:{mainCity2}</span>
            <span>Amentities:{mainAmenities2}</span>
            <span>Address:{mainAddress2}</span>
            <span>Contact No:{mainPhoneNo2}</span>
          </div>
          <div className="Mainbtns">
            <button
              className="btns"
              id="id3"
              data-test={`${mainId2}`}
              onClick={navigateToRoom3}
            >
              Book A Room
            </button>
            <button
              className="btns"
              id="id1"
              data-test={`${mainId}`}
              onClick={navigateAddReview3}
            >
              Add Review
            </button>
            <button className="btns" onClick={navigateViewReview3}>
              View Review
            </button>
          </div>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;
  .section-center {
    padding: 20px;
    border-radius: 10px;
  }

  .menu-item {
    display: grid;
    gap: 1rem 2rem;
    margin-bottom: 1rem;
    background-color: #d1e8e2;
    border: 1px solid black;
    padding: 1rem 1rem;
    vertical-align: middle;
    border-radius: 10px;
  }

  .image {
    object-fit: cover;
    height: 150px;
    width: 150px;
    border: 0.25rem solid #c59d5f;
    border-radius: 50rem;
    display: block;
  }

  h3 {
    color: #bc4639;
    margin: -181px 0px 0px 172px;
    max-width: 10rem;
    letter-spacing: 0.08rem;
  }

  .flex {
    display: grid;
    margin: -162px 0px 0px 170px;
    letter-spacing: 0.03rem;
  }

  span {
    color: #5f6366;
    font-family: Comic Sans MS, Comic Sans, cursive;
    font-size: small;
  }

  .Mainbtns {
    display: grid;
    align-items: center;
    justify-content: center;
    margin: -226px -249px 2px 533px;
  }

  .btns {
    background: linear-gradient(to left, #0677a1, #2d4159);
    letter-spacing: 0.03rem;
    color: white;
    border: none;
    width: 100px;
    height: 30px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    border-radius: 5px;
  }

  @media (max-width: 1341px) {
    .image {
      width: 130px;
      height: 130px;
      margin: 0px 0px 0px -12px;
    }

    h3 {
      margin: -174px 0px 0px 137px;
    }

    .flex {
      margin: -157px 0px -13px 135px;
    }

    .Mainbtns {
      margin: -111px -521px 0px 0px;
    }
  }

  @media (max-width: 930px) {
    .Mainbtns {
      margin: -46px -335px 0px 0px;
    }

    .btns {
      margin: 9px 22px 0px 0px;
    }
  }

  /* For Mobile Device */
  @media (max-width: 553px) {
    .image {
      width: 100px;
      height: 100px;
    }

    h3 {
      margin: 0px 0px 0px -9px;
    }

    span {
      margin: -15px 0px 14px -20px;
    }

    .Mainbtns {
      margin: -20px -216px -10px 0px;
    }
  }
`;

export default Menu;

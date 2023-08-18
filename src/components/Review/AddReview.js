import { styled } from "styled-components";
import { useState } from "react";
import { finalData } from "../HotelsPage/Menu";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddReview = () => {
  const [review, setReview] = useState("");

  const handleChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/hotels/${finalData.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        reviews: [...finalData.reviews, review],
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());
    // .then((json) => console.log(json));
    toast.success("Thanks For your Review :)");
  };

  return (
    <Wrapper>
      <section className="MainForm">
        <div className="reviewForm">
          <span>Your Reviews Means a Lot For Us</span>
          <p>Add your Review</p>
          <form onSubmit={handleSubmit}>
            <textarea
              name="feedback"
              className="textarea"
              value={review}
              onChange={handleChange}
            />
            <button className="btn reviewbtn">Add Review</button>
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
  .MainForm {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    color: #5f6366;
    font-size: small;
    font-weight: bold;
    padding: 0px 0px 0px 20px;
  }

  .textarea {
    width: 80%;
    height: 80px;
    margin: 0px 0px 0px 46px;
    border: none;
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
    border-radius: 15px;
  }

  @media screen and (min-width: 555px) {
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: cursive;
      color: #bc4639;
      font-size: larger;
    }
    .reviewForm {
      margin: 230px 0px 0px 0px;
      height: 220px;
      background-color: #d1e8e2;
      border-radius: 20px;
    }

    .reviewbtn {
      border: none;
      color: white;
      margin: 5px 0px 0px 393px;
      border-radius: 5px;
    }
  }

  /* For Mobile Device */
  @media (max-width: 554px) {
    .reviewForm {
      margin: 230px 0px 0px 0px;
      height: 220px;
      background-color: #d1e8e2;
      border-radius: 20px;
    }
    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: cursive;
      color: #bc4639;
    }

    .reviewbtn {
      border: none;
      color: white;
      margin: 5px 0px 0px 50px;
      border-radius: 5px;
    }
  }
`;

export default AddReview;

import { useState } from "react";
import FormData from "./FormData";
import axios from "axios";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserRegister = () => {
  const [userData, setUserData] = useState({
    name: "",
    city: "",
    phoneNo: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // To clear the value after form is submitted
    let emptyValues = {
      name: "",
      city: "",
      phoneNo: "",
      email: "",
      password: "",
    };
    setUserData(emptyValues);

    try {
      await axios.post("http://localhost:3000/users", userData);
      toast.success("Form Submitted");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper>
      <section className="MainSection">
        <span className="title">Sign Up</span>
        <form className="signupForm" onSubmit={handleSubmit}>
          {/* Name Filed */}
          <FormData
            type="text"
            name="name"
            value={userData.name}
            handleChange={handleChange}
            errormessage="Required, Min 3 Characters"
            pattern="^[A-Za-z0-9]{3,16}$"
          />

          {/* Address Field */}
          <FormData
            type="text"
            name="city"
            id="city"
            value={userData.city}
            handleChange={handleChange}
            errormessage="Required"
            pattern="^[A-Za-z0-9]{6,20}$"
          />

          {/* PhoneNo Field */}
          <FormData
            type="text"
            name="phoneNo"
            id="phoneNo"
            value={userData.phoneNo}
            handleChange={handleChange}
            errormessage="Required, 10 digits"
            pattern="^[0-9]{10}$"
          />

          {/* EmailId Field */}
          <FormData
            type="email"
            name="email"
            id="email"
            value={userData.email}
            handleChange={handleChange}
            errormessage="Required"
            pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
          />

          {/* Password Field */}
          <FormData
            type="password"
            name="password"
            id="password"
            value={userData.password}
            handleChange={handleChange}
            errormessage="Required"
            pattern="^[a-z]{5,10}$"
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
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .MainSection {
    display: grid;
    align-items: center;
    justify-content: center;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #907163;
    font-family: cursive;
    font-size: xx-large;
    margin: 0px 0px -201px 76px;
  }

  .signupForm {
    display: grid;
    align-items: center;
    justify-content: center;
    margin: 114px 0px 70px 0px;
    padding: 35px;
  }

  label {
    color: #907163;
    text-transform: capitalize;
  }

  input {
    width: 150%;
    border: none;
    padding: 9px 9px 5px 2px;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .btn {
    width: 121%;
    padding: 8px;
    margin-top: 15px;
    background-color: #907163;
    color: white;
    border: none;
    border-radius: 5px;
  }

  .login {
    border: none;
    background-color: #f0f5f5;
  }

  @media (min-width: 641px) {
    .signupForm {
      padding: 10px;
    }
  }

  @media (max-width: 640px) {
    .signupForm {
      padding: 30px;
    }

    input {
      width: 110%;
      margin: 5px 0px 0px 0px;
    }
  }

  /* For Mobile Device */
  @media (max-width: 554px) {
    .signupForm {
      width: 60%;
    }
  }
`;

export default UserRegister;

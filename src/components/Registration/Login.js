import FormData from "./FormData";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AuthService from "../../services/auth.service";
import Loading from "../Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const form = useRef();
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [sample, setSample] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:3000/users")
        .then((response) => setSample(response.data));
    };
    fetchData();
  }, []);

  // Comparing the Email and getting the required Email
  function findmyData(e) {
    return e.email === details.email;
  }

  let myData = sample.find((e) => findmyData(e));
  // console.log(myData);
  const n = myData?.email;
  // console.log(n);

  // Comparing the email true or false
  const MyEmail = JSON.stringify(details.email) === JSON.stringify(n);
  // console.log(MyEmail);

  // Comparing the Password and getting the required Password
  function findPass(e) {
    return e.password === details.password;
  }

  let myPass = sample.find((e) => findPass(e));
  const p = myPass?.password;
  // console.log(p);

  // Comparing the password true or false
  const MyPassword = JSON.stringify(details.password) === JSON.stringify(p);
  // console.log(MyPassword);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (MyEmail && MyPassword) {
      try {
        AuthService.login(details.email, details.password).then(() => {
          // setLoading(false);
          navigate("/homepage");
          window.location.reload();
        });
        localStorage.setItem("userId", JSON.stringify(myData));
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else if (!(MyEmail && MyPassword)) {
      toast.error("Invalid Credentials");
      setLoading(false);
    } else {
      // console.log("Some Error occured");
      toast.warn("Some Error occured");
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <section className="Main">
        <div className="MainForm">
          <span className="title">Login</span>

          <div className="form">
            <form onSubmit={handleSubmit} ref={form}>
              <FormData
                type="email"
                name="email"
                id="email"
                value={details.email}
                handleChange={handleChange}
                required
              />
              <FormData
                type="password"
                name="password"
                id="password"
                value={details.password}
                handleChange={handleChange}
                required
              />

              <div id="errorMessages" style={{ color: "red" }}></div>

              <button type="submit" className="btn loginbtn">
                Login
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
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .Main {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 200px;
  }

  .MainForm {
    background-color: #f0f5f5;
    width: 350px;
    height: 316px;
    border-radius: 10px;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #907163;
    font-family: cursive;
    font-size: xx-large;
    position: relative;
  }

  .form {
    margin: 10px 0px 0px 0px;
  }

  label {
    color: #907163;
    text-transform: capitalize;
    margin: 0px 0px 0px 20px;
  }

  input {
    border: none;
    width: 80%;
    height: 30px;
    margin: 16px 0px 11px 39px;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .loginbtn {
    width: 60%;
    height: 40px;
    border: none;
    color: white;
    border-radius: 10px;
    margin: 10px 0px 0px 80px;
  }

  /* For Mobile Device */
  @media (max-width: 554px) {
    .MainForm {
      width: 65%;
    }
  }
`;
export default Login;

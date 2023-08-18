import styled from "styled-components";
import { Link } from "react-router-dom";
import Err from "./Err.jpg";

const ErrorPage = () => {
  return (
    <Wrapper>
      <section>
        <center>
          <h3 className="error-page">Oops! Something WentWrong</h3>
          <img src={Err} alt="Not Found" className="error-container" />
          <Link to="/" className="btn">
            Back To HomePage
          </Link>
        </center>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .error-page {
    display: flex;
    justify-content: center;
    color: white;
    letter-spacing: 0.1rem;
  }
  .error-container {
    display: flex;
    padding: 20px;
    width: 10cm;
    border-radius: 30px;
  }
`;

export default ErrorPage;

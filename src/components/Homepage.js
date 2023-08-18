import styled from "styled-components";
import { Link } from "react-router-dom";
import B1 from "./B1.jpg";

const Homepage = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h2>
          Sometimes, the best you <br />
          can do is lock yourself in a <br />
          hotel room by yourself. <br /> <br />
          <p>Happiness is a when Booking a Room, and it's second home.</p>
          <Link to="/hotel" className="btn">
            Book Now
          </Link>
        </h2>
      </article>
      <article className="images">
        <img src={B1} alt="upStairs" className="main-img" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  place-items: center;

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: hsl(210, 22%, 49%);
    font-size: 1rem;
  }

  @media (min-width: 555px) {
    min-height: 93.5vh;
    grid-template-columns: 1fr 1fr;

    h2 {
      margin-bottom: 5rem;
      font-style: italic;
    }

    p {
      font-size: 1.25rem;
      color: lightcyan;
    }

    .images {
      display: block;
      position: relative;
    }

    .main-img {
      width: 100%;
      height: 500px;
      position: relative;
      border-radius: 15px;
      display: block;
      object-fit: cover;
    }
  }

  /* For Mobile Device */
  @media (max-width: 554px) {
    .main-img {
      width: 50%;
      border-radius: 20px;
      margin: -104px 0px 0px 160px;
    }

    h2 {
      margin-bottom: 5rem;
      font-style: italic;
    }
    p {
      font-size: 1rem;
      color: lightcyan;
    }
  }
`;

export default Homepage;

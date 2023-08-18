import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import Menu from "./Menu";

const Hotel = () => {
  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:3000/hotels")
        .then((response) => setHotel(response.data));
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <section>
        <div className="hotel">
          <Menu hotel={hotel} />
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  section {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hotel {
    width: 70%;
    height: 250px;
    margin: 20px;
  }

  @media screen and (max-width: 710px) {
    .hotel {
      width: 100%;
    }
  }
`;

export default Hotel;

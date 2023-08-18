import styled from "styled-components";
import { useState } from "react";
import Register from "./Register";
import Login from "./Login";

const AllLogins = () => {
  const [value, setValue] = useState({
    isMember: true,
  });

  const toggleMember = () => {
    setValue({ ...value, isMember: !value.isMember });
    // if isMember is true then value should be false
    // if isMember is false then value should be true
  };

  return (
    <Wrapper>
      <section className="container">
        <div>
          <div>{value.isMember ? <Register /> : <Login />}</div>
          <p className="Toggletext">
            {value.isMember ? "Already a Member?" : "Not a Member Yet?"}
            <button type="button" onClick={toggleMember} className="member-btn">
              {value.isMember ? "Login" : "Register"}
            </button>
          </p>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    margin: 0 auto;
  }

  .Toggletext {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .member-btn {
    background: transparent;
    border: transparent;
    color: #fcc133;
    font-size: medium;
    cursor: pointer;
    letter-spacing: 0.2rem;
  }
`;

export default AllLogins;

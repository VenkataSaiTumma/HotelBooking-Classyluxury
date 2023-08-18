import P2 from "./P2.jpg";
import UserRegister from "./UserRegister";
import styled from "styled-components";

const Register = () => {
  return (
    <Wrapper>
      {/* Registration Page */}
      <section className="Main">
        <div className="MainForm">
          {/* Registration image */}
          <img src={P2} alt="Registration pic" className="MainImg" />

          {/* Registration Form */}
          <div>
            <UserRegister />
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
    padding-top: 40px;
  }

  .MainForm {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0f5f5;
    width: 600px;
    height: 490px;
    border-radius: 10px;
  }

  .MainImg {
    width: 45%;
    height: 440px;
  }

  .text {
    color: lightseagreen;
    font-family: cursive;
    margin: -68px 80px;
    font-size: larger;
  }

  @media (min-width: 641px) {
    .MainImg {
      margin: 14px 10px 21px -93px;
    }
  }

  @media (max-width: 554px) {
    .MainImg {
      margin: 0px 0px 0px 10px;
    }
  }
`;

export default Register;

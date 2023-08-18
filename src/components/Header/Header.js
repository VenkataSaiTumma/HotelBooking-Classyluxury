import { Link } from "react-router-dom";
import styled from "styled-components";
import P1 from "./P1.jpg";

export let userDetails = [];

const Header = () => {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  const user = JSON.parse(localStorage.getItem("userId"));
  userDetails = user;

  return (
    <Wrapper>
      <div className="header">
        {user ? (
          <>
            <span className="mainHeader">
              <Link to="/homepage" className="header-link">
                Classy Luxury
              </Link>
            </span>
            <ul className="navlinks">
              <div className="sub-links">
                <Link to="/hotel" className="link">
                  Hotels
                </Link>
                <Link to="/bookings" className="link">
                  Bookings
                </Link>
              </div>
              <Link to={`/profile/${userDetails.name}`}>
                <img src={P1} alt="profile-pic" className="profileImg" />
              </Link>
              <button className="btn logout" type="button" onClick={logout}>
                Logout
              </button>
            </ul>
          </>
        ) : null}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;

  .header {
    background: linear-gradient(to left, #2c3531, #116466);
    height: 40px;
  }

  .mainHeader {
    font-family: cursive;
    padding: 5px;
    font-size: large;
  }

  .header-link {
    text-decoration: none;
    color: #8fc1e3;
  }

  .navlinks {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    column-gap: 30px;
    margin: -20px 71px 0px 0px;
  }

  .sub-links {
    display: contents;
  }

  .link {
    color: white;
    text-decoration: none;
    border: none;
    color: white;
    letter-spacing: 0.1rem;
  }

  .link:hover {
    color: #8fc1e3;
    text-decoration: underline;
  }

  .profileImg {
    width: 30px;
    height: 30px;
    border-radius: 50px;
  }

  @media (min-width: 555px) {
    .sub-links {
      column-gap: 20px;
    }
  }

  /* For Mobile Device */
  @media (max-width: 554px) {
    .navlinks {
      column-gap: 8px;
      margin: -28px 64px 0px -3px;
    }

    .logout {
      margin: 6px -60px 11px 0px;
    }
  }
`;

export default Header;

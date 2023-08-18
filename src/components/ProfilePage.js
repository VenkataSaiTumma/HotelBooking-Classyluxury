import { styled } from "styled-components";
import { userDetails } from "./Header/Header";
import P1 from "./Header/P1.jpg";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const ProfilePage = () => {
  return (
    <Wrapper>
      <div className="profile-card">
        <div className="top-section">
          {/* <img src={P1} alt="coverphoto" /> */}
          <div className="pic">
            <img src={P1} alt="Profilephoto" />
          </div>
          <div className="name">{userDetails.name}</div>
          <div className="tag">{userDetails.email}</div>
        </div>

        <div className="bottom-section">
          <div className="social-media">
            <a href="https://www.facebook.com/">
              <i className="icons">
                <FaFacebook />
              </i>
            </a>
            <a href="https://twitter.com/">
              <i className="icons">
                <FaTwitter />
              </i>
            </a>
            <a href="https://www.instagram.com/">
              <i className="icons">
                <FaInstagram />
              </i>
            </a>
          </div>

          <div>
            {userDetails.id}
            <span>Id</span>
          </div>
          <div className="border"></div>
          <div>
            {userDetails.city} <span>Address</span>
          </div>
          <div className="border"></div>
          <div>
            {userDetails.phoneNo} <span>PhoneNo</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;

  * {
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
    box-sizing: border-box;
    text-decoration: none;
  }

  .profile-card {
    width: 420px;
    overflow: hidden;
    text-align: center;
    position: relative;
    box-shadow: 0 0 10px #00000070;
    border-radius: 15px;
  }

  .top-section {
    padding: 60px 40px;
    background: white;
  }

  .pic {
    width: 150px;
    height: 150px;
    margin: auto;
    margin-bottom: 20px;
    border: 2px solid #116466;
    border-radius: 50%;
    padding: 8px;
    position: relative;
  }

  .pic:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    border: 1px solid #116466;
    left: 0;
    top: 0;
    box-sizing: border-box;
    border-radius: 50%;
    animation: wave 1.5s infinite linear;
  }

  @keyframes wave {
    to {
      transform: scale(1.5);
      opacity: 0;
    }
  }

  .pic img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .name {
    font-size: 28px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .tag {
    font-size: 18px;
    color: #222;
  }

  .bottom-section {
    padding: 60px 40px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    text-transform: uppercase;
    color: #f1f1f1;
  }

  /* For Horizontal line */
  .border {
    width: 1px;
    height: 40px;
    background: red;
    margin: 0 30px;
  }

  .bottom-section span {
    font-size: small;
    display: block;
    color: gray;
    color: #bbb;
  }

  .social-media {
    position: absolute;
    width: 100%;
    top: -30px;
    left: 0;
    z-index: 1;
  }

  .social-media i {
    width: 60px;
    height: 60px;
    background: #116466;
    border-radius: 50%;
    color: #f1f1f1;
    font-size: 30px;
    line-height: 70px !important;
    margin: 0 10px;
    position: relative;
  }

  .social-media i:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: #116466;
    left: 0;
    top: 0;
    box-sizing: border-box;
    border-radius: 50%;
    z-index: -1;
    transition: 0.4s linear;
  }

  /* placing social icons in circle */
  .icons {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    line-height: 1;
  }

  .social-media i:hover:after {
    transform: scale(1.4);
    opacity: 0;
  }
`;

export default ProfilePage;

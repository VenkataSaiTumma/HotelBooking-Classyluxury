import axios from "axios";

const API_URL = "http://localhost:3000/users";

const login = async (email, password) => {
  const response = await axios.post(API_URL, {
    email,
    password,
  });
  if (response.data.email) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const AuthService = {
  login,
};

export default AuthService;

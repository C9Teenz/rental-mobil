import axios from "axios";
const url = "http://localhost:3000/api/login";

const login = async (o) => {
  try {
    const { username, password } = o;
    const response = await axios.post(`${url}/login`, {
      username: username,
      password: password,
    });
    localStorage.setItem("token", response.token);
    return response.data;
  } catch (error) {
    return error;
  }
};
const logout = () => {
  localStorage.removeItem("token");
};
export { login, logout };

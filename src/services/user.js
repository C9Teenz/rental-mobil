import axios from "axios";
const url = "http://localhost:3000/api/user";

const getUsers = async (cb) => {
  const { data } = await axios.get(url);
  cb(data);
};
const addUser = async (o) => {
  const { name, telphone, image } = o;

  const response = await axios.post(`${url}/create`, {
    name: name,
    telphone: +telphone,
    image: image,
  });
  return response.data;
};
const getUserById = async (cb, id) => {
  const { data } = await axios.get(`${url}/${id}`);
  cb(data);
};
const editUser = async (o) => {
  const { id, name, telphone, image } = o;

  const response = await axios.put(`${url}/update/${id}`, {
    name: name,
    telphone: +telphone,
    image: image,
  });
  console.log(response);
};
const deleteUser = async (id) => {
  const res = await axios.delete(`${url}/remove/${id}`);
  console.log(res);
};
export { getUsers, addUser, getUserById, editUser, deleteUser };

import axios from "axios";
const url = "http://localhost:3000/api/item";

const getItems = async (cb) => {
  const { data } = await axios.get(url);
  cb(data);
};
const addItem = async (o) => {
  const { name, license_plate, color, rate, brand_id, image } = o;

  const response = await axios.post(`${url}/create`, {
    name: name,
    license_plate: license_plate,
    color: color,
    rate: +rate,
    image: image,
    brand_id: +brand_id,
  });
  console.log(response);
};
const getItemById = async (cb, id) => {
  const { data } = await axios.get(`${url}/${id}`);
  cb(data);
};
const editItem = async (o) => {
  const { id, name, license_plate, color, rate, brand_id, user_id, image } = o;

  const response = await axios.put(`${url}/update/${id}`, {
    name: name,
    license_plate: license_plate,
    color: color,
    rate: +rate,
    image: image,
    brand_id: +brand_id,
    user_id: +user_id,
  });
  console.log(response);
};
const editItemUser = async (uid) => {
  const { id, user_id } = uid;

  const res = await axios.put(`${url}/update-user/${id}`, { user_id: user_id });
  console.log(res);
};
const deleteItem = async (id) => {
  const res = await axios.delete(`${url}/remove/${id}`);
  console.log(res);
};
export { getItems, addItem, editItem, deleteItem, editItemUser };

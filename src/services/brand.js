import axios from "axios";
const url = "http://localhost:3000/api/brand";

const getBrands = async (cb) => {
  const { data } = await axios.get(url);
  cb(data);
};
const addBrand = async (o) => {
  const { name } = o;

  const response = await axios.post(`${url}/create`, { name: name });
  console.log(response);
};
const getBrandById = async (cb, id) => {
  const { data } = await axios.get(`${url}/${id}`);
  cb(data);
};
const editBrand = async (o) => {
  const { id, name } = o;

  const response = await axios.put(`${url}/update/${id}`, { name: name });
  console.log(response);
};
const deleteBrand = async (id) => {
  const res = await axios.delete(`${url}/remove/${id}`);
  console.log(res);
};
export { getBrands, addBrand, getBrandById, editBrand, deleteBrand };

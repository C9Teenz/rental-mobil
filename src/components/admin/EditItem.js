import React, { useState, useEffect } from "react";
import { getBrands } from "../../services/brand";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { editItem } from "../../services/item";
import { getUsers } from "../../services/user";
const EditItem = () => {
  const { id } = useParams();
  const [item, setItem] = useState("");

  const [brands, setBrands] = useState([]);
  const [users, setUsers] = useState([]);
  const getItemById = async () => {
    const { data } = await axios.get(`http://localhost:3000/api/item/${id}`);
    setItem(data);
  };
  useEffect(() => {
    getItemById();
  }, []);
  //Get data brand
  const getDataBrand = () => {
    getBrands((data) => {
      setBrands(data);
    });
  };
  useEffect(() => {
    getDataBrand();
  }, []);
  //get data user
  const getDataUser = () => {
    getUsers((datauser) => {
      setUsers(datauser);
    });
  };
  useEffect(() => {
    getDataUser();
  }, []);
  const onChange = (e) => {
    setItem({ ...item, ...{ [e.target.name]: e.target.value } });
    console.log(item);
  };
  // handler button submit
  const submitHandler = () => {
    editItem(item);
  };
  let back = useNavigate();
  return (
    <div className="edit-item">
      <div className="text-center" style={{ fontSize: "32px" }}>
        Edit Item
      </div>
      <div className="mb-3">
        <label className="form-label">Nama</label>

        <input
          type="text"
          className="form-control"
          value={item.name}
          name="name"
          onChange={(e) => onChange(e)}
        ></input>
      </div>

      <div className="mb-3">
        <label className="form-label">Plat Nomor</label>

        <input
          type="text"
          className="form-control"
          value={item.license_plate}
          name="license_plate"
          onChange={(e) => onChange(e)}
        ></input>
      </div>

      <div className="mb-3">
        <label className="form-label">Warna</label>

        <input
          type="text"
          className="form-control"
          value={item.color}
          name="color"
          onChange={(e) => onChange(e)}
        ></input>
      </div>

      <div className="mb-3">
        <label className="form-label">Harga</label>

        <input
          type="text"
          className="form-control"
          defaultValue={item.rate}
          name="rate"
          onChange={(e) => onChange(e)}
        ></input>
      </div>
      <div className="mb-3">
        <label className="form-label">Gambar</label>

        <input
          type="text"
          className="form-control"
          value={item.image}
          name="image"
          onChange={(e) => onChange(e)}
        ></input>
      </div>
      {/* <div className="mb-3">
        <label for="formFile" className="form-label">
          Gambar
        </label>
        <input
          className="form-control"
          type="file"
          id="formFile"
          accept="image/*"
        ></input>
      </div> */}
      <div className="mb-3">
        <label className="form-label">Brand</label>

        <select
          className="form-select"
          name="brand_id"
          onChange={(e) => onChange(e)}
        >
          <option value="0"></option>
          {brands.map((brand) => {
            return (
              <option selected value={brand.id}>
                {brand.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Penyewa</label>

        <select
          className="form-select"
          name="user_id"
          onChange={(e) => onChange(e)}
        >
          <option value="0">Sudah kembali</option>
          {users.map((user) => {
            return (
              <option selected value={user.id}>
                {user.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="mb-3">
        <button
          type="button"
          className="btn btn-secondary w-100"
          onClick={() => {
            submitHandler();
            back(-1);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default EditItem;

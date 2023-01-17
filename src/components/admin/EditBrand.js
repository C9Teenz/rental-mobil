import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { editBrand } from "../../services/brand";
const EditBrand = () => {
  let back = useNavigate();
  const { id } = useParams();
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const getBrandById = async () => {
    const { data } = await axios.get(`http://localhost:3000/api/brand/${id}`);
    setBrand(data);
  };

  useEffect(() => {
    getBrandById();
  }, []);
  const submitHandler = () => {
    const tempObj = {
      id,
      name,
    };
    editBrand(tempObj);
  };
  console.log(brand);
  return (
    <div className="edit-brand">
      <div className="text-center" style={{ fontSize: "32px" }}>
        Edit Brand
      </div>
      <div className="mb-3">
        <label className="form-label">Nama</label>

        <input
          type="text"
          className="form-control"
          placeholder={brand.name}
          onChange={(e) => setName(e.target.value)}
        ></input>
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

export default EditBrand;

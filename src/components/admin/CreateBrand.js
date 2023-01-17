import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBrand } from "../../services/brand";

const CreateBrand = () => {
  const [name, setName] = useState("");
  const submitHandler = () => {
    const tempObj = {
      name,
    };
    addBrand(tempObj);
  };
  let back = useNavigate();
  return (
    <div className="create-brand">
      <div className="text-center" style={{ fontSize: "32px" }}>
        Tambah Brand
      </div>
      <div className="mb-3">
        <label className="form-label">Nama</label>

        <input
          type="text"
          className="form-control"
          placeholder="Nama"
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

export default CreateBrand;

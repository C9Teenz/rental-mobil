import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../services/user";

const CreateUserAdmin = () => {
  const [name, setName] = useState("");
  const [telphone, setTelphone] = useState("");
  const [image, setImage] = useState("");

  const submitHandler = () => {
    const tempObj = {
      name,
      telphone,
      image,
    };
    addUser(tempObj);
  };
  let back = useNavigate();
  return (
    <div className="create-user">
      <div className="text-center" style={{ fontSize: "32px" }}>
        Tambah User
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
        <label className="form-label">No. Telphone</label>
        <div className="input-group">
          <span className="input-group-text">+0822</span>
          <input
            type="text"
            className="form-control"
            maxlength="6"
            placeholder="98xxx"
            onChange={(e) => setTelphone(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Foto-KTP</label>

        <input
          type="text"
          className="form-control"
          placeholder="Foto"
          onChange={(e) => setImage(e.target.value)}
        ></input>
      </div>
      {/* <div className="mb-3">
        <label for="formFile" className="form-label">
          Foto KTP
        </label>
        <input
          className="form-control"
          type="file"
          id="formFile"
          accept="image/*"
        ></input>
      </div> */}
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

export default CreateUserAdmin;

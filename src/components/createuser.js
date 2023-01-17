import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editItemUser } from "../services/item";
import { addUser } from "../services/user";

const CreateUser = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [telphone, setTelphone] = useState("");
  const [image, setImage] = useState("");

  const submitHandler = async () => {
    const tempObj = {
      name,
      telphone,
      image,
    };
    const res = await addUser(tempObj);
    const user_id = res.data.id;
    const tempObj2 = {
      id,
      user_id,
    };
    editItemUser(tempObj2);
  };
  let back = useNavigate();
  return (
    <div className="create-user">
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
            placeholder="98xxx"
            maxLength="6"
            onChange={(e) => setTelphone(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Foto KTP</label>

        <input
          type="text"
          className="form-control"
          placeholder="Nama"
          onChange={(e) => setImage(e.target.value)}
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
export default CreateUser;

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { editUser } from "../../services/user";

const EditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState("");
  const getUserById = async () => {
    const { data } = await axios.get(`http://localhost:3000/api/user/${id}`);
    setUser(data);
  };
  useEffect(() => {
    getUserById();
  }, []);

  const onChange = (e) => {
    setUser({ ...user, ...{ [e.target.name]: e.target.value } });
    console.log(user);
  };

  const submitHandler = () => {
    console.log(user);
    editUser(user);
  };
  let back = useNavigate();
  return (
    <div className="edit-user">
      <div className="text-center" style={{ fontSize: "32px" }}>
        Edit User
      </div>
      <div className="mb-3">
        <label className="form-label">Nama</label>

        <input
          type="text"
          className="form-control"
          value={user.name}
          name="name"
          onChange={(e) => {
            onChange(e);
          }}
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
            value={user.telphone}
            name="telphone"
            onChange={(e) => onChange(e)}
          ></input>
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Foto-KTP</label>

        <input
          type="text"
          className="form-control"
          value={user.image}
          name="image"
          onChange={(e) => onChange(e)}
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

export default EditUser;

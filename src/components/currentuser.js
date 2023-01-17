import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editItemUser } from "../services/item";
import { getUsers } from "../services/user";

const CurrentUser = () => {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({ telphone: "", image: "" });
  const getData = () => {
    getUsers((data) => {
      setUsers(data);
      console.log(data);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  const selectId = (e) => {
    const selectedId = e.target.value;
    for (let index in users) {
      if (users[index].id == selectedId) {
        setSelectedUser(users[index]);
      }
    }
  };
  const submitHandler = () => {
    const user_id = selectedUser.id;
    const tempObj = {
      id,
      user_id,
    };
    editItemUser(tempObj);
    console.log(tempObj);
  };

  let back = useNavigate();
  return (
    <div className="current-users">
      <div className="create-user">
        <div className="mb-3">
          <label className="form-label">Nama</label>

          <select className="form-select" onChange={(e) => selectId(e)}>
            {users.map((user) => {
              return (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">No. Telphone</label>
          <div className="input-group">
            <span className="input-group-text">+0822</span>
            <input
              type="text"
              className="form-control"
              placeholder="98xxx"
              value={selectedUser.telphone}
            ></input>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Foto KTP</label>

          <input
            type="text"
            className="form-control"
            placeholder=".jpg/.png"
            value={selectedUser.image}
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
    </div>
  );
};
export default CurrentUser;

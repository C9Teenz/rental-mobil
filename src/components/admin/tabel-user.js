import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers, deleteUser } from "../../services/user";

const TabelUser = () => {
  const [users, setUsers] = useState([]);
  const getData = () => {
    getUsers((data) => {
      setUsers(data);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="tabel">
      <br />
      <div className="col-5">
        <Link id="add" class="btn btn-primary btn-add" to="/create-user">
          +Add
        </Link>
      </div>
      <div className="tabel-user">
        <table class="table table-bordered">
          <thead>
            <tr className="text-center">
              <th scope="col">no</th>
              <th scope="col">Nama</th>
              <th scope="col">Nomor Telphone</th>
              <th scope="col">Foto KTP</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length !== 0 ? (
              users.map((user, i) => {
                const { name, telphone, image } = user;
                return (
                  <tr className="text-center">
                    <th scope="row">{i + 1}</th>
                    <td>{name}</td>
                    <td>{telphone}</td>
                    <td>
                      <img src={image} style={{ width: "100px" }} />
                    </td>

                    <td>
                      <div className="row text-center">
                        <div className="col btn-action text-end">
                          <Link
                            type="button"
                            className="btn btn-success btn-sm"
                            to={`edit-user/${user.id}`}
                            style={{ marginRight: "10px" }}
                          >
                            edit
                          </Link>
                        </div>
                        <span className="col btn-action text-start">
                          <button
                            type="button"
                            className="btn btn-danger btn-sm"
                            style={{ marginLeft: "10px" }}
                            onClick={() => {
                              deleteUser(user.id);
                            }}
                          >
                            delete
                          </button>
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <h2>loading....</h2>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default TabelUser;

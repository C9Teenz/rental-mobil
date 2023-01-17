import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getItems, deleteItem } from "../../services/item";

const TabelItem = () => {
  const [items, setItems] = useState([]);
  const getData = () => {
    getItems((data) => {
      setItems(data);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="tabel">
      <br />
      <div className="col-5">
        <Link id="add" class="btn btn-primary btn-add" to="/create-item">
          +Add
        </Link>
      </div>
      <div className="tabel-item">
        <table class="table table-bordered">
          <thead>
            <tr className="text-center">
              <th scope="col">no</th>
              <th scope="col">Nama</th>
              <th scope="col">Plat Nomor</th>
              <th scope="col">Brand</th>
              <th scope="col">Warna</th>
              <th scope="col">Penyewa</th>
              <th scope="col">Harga</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.length !== 0 ? (
              items.map((item, i) => {
                return (
                  <tr className="text-center">
                    <th scope="row">{i + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.license_plate}</td>
                    <td>{item.brands.name}</td>
                    <td>{item.color}</td>
                    {item.users !== null ? (
                      <td>{item.users.name}</td>
                    ) : (
                      <td>-</td>
                    )}

                    <td>{item.rate}</td>
                    <td>
                      <div className="row text-center">
                        <div className="col btn-action">
                          <Link
                            className="btn btn-success btn-sm"
                            to={`edit-item/${item.id}`}
                          >
                            edit
                          </Link>
                        </div>
                        <span className="col btn-action">
                          <button
                            type="button"
                            className="btn btn-danger btn-sm"
                            onClick={() => deleteItem(item.id)}
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
              <h2>loading...</h2>
            )}
          </tbody>
        </table>
        {/* <div>
          <button onClick={() => getHandler()}>get users</button>
        </div> */}
      </div>
    </div>
  );
};
export default TabelItem;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBrands, deleteBrand } from "../../services/brand";
const TabelBrand = () => {
  const [brands, setBrands] = useState([]);
  const getData = () => {
    getBrands((data) => {
      setBrands(data);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="tabel">
      <br />
      <div className="col-5">
        <Link id="add" class="btn btn-primary btn-add" to="/create-brand">
          +Add
        </Link>
      </div>
      <div className="tabel-brand">
        <table class="table table-bordered">
          <thead>
            <tr className="text-center">
              <th scope="col">no</th>
              <th scope="col">Nama</th>

              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {brands.length !== 0 ? (
              brands.map((brand, i) => {
                return (
                  <tr className="text-center">
                    <th scope="row">{i + 1}</th>
                    <td>{brand.name}</td>

                    <td>
                      <div className="row text-center">
                        <div className="col btn-action text-end">
                          <Link
                            className="btn btn-success btn-sm"
                            to={`edit-brand/${brand.id}`}
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
                            onClick={() => deleteBrand(brand.id)}
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
      </div>
    </div>
  );
};
export default TabelBrand;

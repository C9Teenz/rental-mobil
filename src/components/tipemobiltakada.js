import React from "react";
import { Link } from "react-router-dom";
const TipeMobilUnavailable = (props) => {
  const name = props.name;
  const image = props.image;
  const harga = props.harga;
  const brand = props.brand;

  return (
    <div className="card card-sewa" style={{ width: "420px" }}>
      <div className="image-sewa">
        <img
          src={image}
          className="card-img-top"
          style={{ height: "250px" }}
        ></img>
        <span className="unavailable-text posisi-text">Tidak Tersedia</span>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <h5 className="card-text text-start brand-text">{brand}</h5>
            <h5 className="card-title text-start mobil-text">{name}</h5>
          </div>
          <div className="col-6 price-text-wrapper">
            <h4 className="card-title text-end fs-6 price-text">
              Rp.{harga}
              <span className="card-text day-text">/hari</span>
            </h4>
          </div>
        </div>
      </div>

      <div className="d-grid gap-2 col-10 mx-auto">
        <button className="btn btn-primary btn-sewa" disabled>
          Sewa Sekarang
        </button>
      </div>
    </div>
  );
};

export default TipeMobilUnavailable;

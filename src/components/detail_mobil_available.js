import React from "react";
import { Link } from "react-router-dom";
const DetailMobilAvailable = (props) => {
  const name = props.name;
  const image = props.image;
  const plate = props.plate;
  const brand = props.brand;
  const color = props.color;
  const rate = props.rate;
  const id = props.id;

  return (
    <div className="detail-mobil">
      <div className="mb-3">
        <div className="row g-1">
          <div className="col-md-8">
            <img
              src={image}
              className="img-fluid w-100"
              alt="..."
              style={{ height: "500px" }}
            />
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="deskripsi-text">Deskripsi Mobil</div>
              <hr />
              <div className="row detail-row">
                <div className="col-6">
                  <div className="detail-text">Nama</div>
                  <div className="detail-text">Plat Nomor</div>
                  <div className="detail-text">Brand</div>
                  <div className="detail-text">Warna</div>
                  <div className="detail-text">Status</div>
                </div>
                <div className="col-6 text-end">
                  <div className="isi-text">{name}</div>
                  <div className="isi-text">{plate} </div>
                  <div className="isi-text">{brand}</div>
                  <div className="isi-text">{color}</div>
                  <span className="available-text">Tersedia</span>
                </div>
              </div>
              <hr />
              <div className="row detail-row">
                <div className="col-6">
                  <div className="detail-text">Nama Penyewa</div>
                  <div className="detail-text">No. Telp</div>
                </div>
                <div className="col-6 text-end">
                  <div className="isi-text">-</div>
                  <div className="isi-text">-</div>
                </div>
              </div>
              <hr />
              <div className="row detail-row">
                <div className="col-6">
                  <h4 className="card-title text-start fs-6 price-text">
                    Rp.{rate}
                    <span className="card-text day-text">/hari</span>
                  </h4>
                </div>
                <div className="col-6 text-end">
                  <Link
                    className="btn btn-primary detail-sewa"
                    to={`/input-user/${id}`}
                  >
                    Sewa Sekarang
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailMobilAvailable;

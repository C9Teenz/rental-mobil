import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
const DetailMobil = (props) => {
  console.log(props);
  const name = props.name;
  const image = props.image;
  const plate = props.plate;
  const brand = props.brand;
  const color = props.color;
  const penyewa = props.penyewa;
  const telp = props.telp;
  const rate = props.rate;
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Payment bill",
    onAfterPrint: () => alert("print succes"),
  });
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
            <div ref={componentRef}>
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
                    <div className="text-end isi-text">{name}</div>
                    <div className="text-end isi-text">{plate}</div>
                    <div className="text-end isi-text">{brand}</div>
                    <div className="text-end isi-text">{color}</div>
                    <span className="text-end unavailable-text">
                      Tidak Tersedia
                    </span>
                  </div>
                </div>
                <hr />
                <div className="row detail-row">
                  <div className="col-6">
                    <div className="detail-text">Nama Penyewa</div>
                    <div className="detail-text">No. Telp</div>
                  </div>
                  <div className="col-6">
                    <div className="text-end isi-text">{penyewa}</div>
                    <div className="text-end isi-text">+(0281) {telp}</div>
                  </div>
                </div>
                <hr />
                <div className="row detail-row">
                  <div className="col-6">
                    <h4 className="card-title text-start fs-6 price-text">
                      <span className="card-text day-text">Total: </span>
                      Rp.{rate}
                    </h4>
                  </div>
                  <div className="col-6 text-end">
                    <button
                      className="btn btn-primary detail-sewa"
                      onClick={handlePrint}
                    >
                      Bayar Sekarang
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailMobil;

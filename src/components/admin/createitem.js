import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getBrands } from "../../services/brand";
import { addItem } from "../../services/item";

const CreateItem = () => {
  const [name, setName] = useState("");
  const [license_plate, setLicense] = useState("");
  const [color, setColor] = useState("");
  const [rate, setRate] = useState("");
  const [brand_id, setBrandId] = useState("");
  const [image, setImage] = useState("");
  const [brands, setBrands] = useState([]);

  const getData = () => {
    getBrands((data) => {
      setBrands(data);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  const submitHandler = () => {
    const tempObj = {
      name,
      license_plate,
      color,
      rate,
      brand_id,
      image,
    };
    addItem(tempObj);
  };
  let back = useNavigate();
  return (
    <div className="create-Item">
      <div className="text-center" style={{ fontSize: "32px" }}>
        Tambah Item
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
        <label className="form-label">Plat Nomor</label>

        <input
          type="text"
          className="form-control"
          placeholder="R 345 XZ"
          onChange={(e) => setLicense(e.target.value)}
        ></input>
      </div>

      <div className="mb-3">
        <label className="form-label">Warna</label>

        <input
          type="text"
          className="form-control"
          placeholder="Merah"
          onChange={(e) => setColor(e.target.value)}
        ></input>
      </div>

      <div className="mb-3">
        <label className="form-label">Harga</label>

        <input
          type="text"
          className="form-control"
          placeholder="120000"
          onChange={(e) => setRate(e.target.value)}
        ></input>
      </div>
      <div className="mb-3">
        <label className="form-label">Gambar</label>

        <input
          type="text"
          className="form-control"
          placeholder="gambar"
          onChange={(e) => setImage(e.target.value)}
        ></input>
      </div>
      {/* <div className="mb-3">
        <label for="formFile" className="form-label">
          Gambar
        </label>
        <input
          className="form-control"
          type="file"
          id="formFile"
          accept="image/*"
        ></input>
      </div> */}
      <div className="mb-3">
        <label className="form-label">Brand</label>

        <select
          className="form-select"
          onChange={(e) => setBrandId(e.target.value)}
        >
          <option selected></option>
          {brands.map((brand) => {
            return <option value={brand.id}>{brand.name}</option>;
          })}
        </select>
      </div>
      {/* <div className="mb-3">
        <label className="form-label">Penyewa</label>

        <select class="form-select">
          <option selected></option>
          <option value="1">Joni</option>
          <option value="2">Bani</option>
          <option value="3">Sony</option>
          <option value="4">Sony</option>
          <option value="5">Sony</option>
          <option value="6">Sony</option>
        </select>
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

export default CreateItem;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DetailMobil, Header, DetailMobilAvailable } from "../../components";
import arrow from "../../logo/arrow.png";

const Detail = () => {
  const { id } = useParams();
  const [item, setItem] = useState("");
  const getItemById = async () => {
    const { data } = await axios.get(`http://localhost:3000/api/item/${id}`);
    setItem(data);
    console.log(item);
  };
  useEffect(() => {
    getItemById();
  }, []);

  return (
    <div className="detail-mobil">
      <Header />
      <div className="container">
        <Link className="content-back" to="/">
          <img className="logo-back" src={arrow}></img>
          <span>Kembali</span>
        </Link>
        <div className="header-detail">
          <h3>Detail {item.name}</h3>
          <div className="header-detail-text">Home/{item.name}</div>
        </div>
        {item == "" ? (
          <h2>loading....</h2>
        ) : item.user_id == 0 ? (
          <DetailMobilAvailable
            name={item.name}
            image={item.image}
            plate={item.license_plate}
            brand={item.brands.name}
            color={item.color}
            rate={item.rate}
            id={item.id}
          />
        ) : (
          <DetailMobil
            name={item.name}
            image={item.image}
            plate={item.license_plate}
            brand={item.brands.name}
            color={item.color}
            penyewa={item.users.name}
            telp={item.users.telphone}
            rate={item.rate}
          />
        )}
      </div>
    </div>
  );
};
export default Detail;

import React, { useState, useEffect } from "react";
import { Header, TipeMobil, TipeMobilUnavailable } from "../../components";
import { getItems } from "../../services/item";
const Home = () => {
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
    <div className="Home">
      <Header />
      <br />
      <div className="list-mobil">
        <div className="container">
          <div className="list-text">List Mobil</div>
          <div className="row g-2">
            {items.map((item) => {
              return item.users == null ? (
                <div className="col-4">
                  <TipeMobil
                    id={item.id}
                    name={item.name}
                    brand={item.brands.name}
                    image={item.image}
                    harga={item.rate}
                  />
                </div>
              ) : (
                <div className="col-4">
                  <TipeMobilUnavailable
                    id={item.id}
                    name={item.name}
                    brand={item.brands.name}
                    image={item.image}
                    harga={item.rate}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

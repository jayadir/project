import React from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Slides from "./components/Slides";
import { Helper } from "./Helper";
import { useState } from "react";

export default function Homepage() {
  const [searchvalue, setSearchvalue] = useState("");
  const [searchvaluebutton, setsearchvaluebutton] = useState("");
  // localStorage.removeItem('cartlist')
  // for (let i = 0; i < localStorage.length; i++) {
  //   const key = localStorage.key(i);
  //   const value = localStorage.getItem(key);
  
  //   console.log(`Key: ${key}, Value: ${value}`);
  // }
  const handlechange = () => {
    let val = document.getElementById("search").value;
    setsearchvaluebutton(val);
  };

  const [food_categories, food_items] = Helper();
  console.log(food_categories);

  return (
    <>
      {/* <div className="d-flex justify-content-center align-items-center" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
        <img src="/cbit logo.png" alt="Background" style={{ objectFit: 'cover', width: '8rem', height: '7rem' }} />
      </div>     */}
      <div>
      <Navigation />
      {/* <div>
        <Slides />
      </div> */}
      <div className="container mt-3">
        <div className="d-flex justify-content-center">
          <input
            className="form-control me-2"
            type="search"
            id="search"
            placeholder="Search"
           
            value={searchvalue}
            onChange={(event) => {
              setSearchvalue(event.target.value);
            }}
          />
          <button
            className="btn btn-outline-success"
            type="button"
            onClick={handlechange}
          >
            Search
          </button>
        </div>
        <div>
          {food_categories.length > 0 ? (
            food_categories.map((data) => (
              <div key={data.CategoryName} className="row m-3">
                <hr/>
                <div className="d-flex Fs-4 m-3 justify-content-center align-items-center">{data.CategoryName}</div>
                <hr />
                {food_items.length > 0 ? (
                  food_items
                    .filter(
                      (x) =>
                        x.CategoryName === data.CategoryName &&
                        x.name.includes(searchvaluebutton)
                    )
                    .map((fooditem) => (
                      <div key={fooditem.name} className="col-12 col-md-6 col-lg-4">
                        <Items
                          name={fooditem.name}
                          price={fooditem.price}
                          image={fooditem.img}
                        />
                      </div>
                    ))
                ) : (
                  <div>None</div>
                )}
              </div>
            ))
          ) : (
            <div>Empty</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
}

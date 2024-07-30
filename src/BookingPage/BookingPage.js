import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { Button, Input, Select, Space, ConfigProvider, Divider } from "antd";
import { Checkbox } from 'antd';
import { getDatabase, ref, child, get } from "firebase/database";
import { Link } from "react-router-dom";
import NAV from "../Constant/SinglePage";

const { Search } = Input;
const options = [
  {
    value: "District 1",
  },
  {
    value: "District 2",
  },
  {
    value: "District 3",
  },
  {
    value: "District 4",
  },
  {
    value: "District 5",
  },
  {
    value: "District Go Vap",
  },
];

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
const SearchBar = () => (
  <Space direction="vertical" size="middle" className="hello">
    <Space.Compact>
      <Select
        defaultValue="District"
        options={options}
        style={{
          width: "200px",
          height: "30px"
        }}
      />
      <Input id="hi" placeholder="Court name"
        style={{
          width: "687px",
          height: "32px"
        }} />
      <Button type="primary" style={{
        background: "#00b96b"
      }}>Search</Button>
    </Space.Compact>
  </Space>
);

const Filter = () => (

  <div>
    <p class="filtertitle">Filter</p>
    <div class="itemcategory">
      <p class="category">Rating</p>
      <div class="itemrate"><Checkbox onChange={onChange}>5 stars</Checkbox></div>
      <div class="itemrate"><Checkbox onChange={onChange}>4 stars</Checkbox></div>
      <div class="itemrate"><Checkbox onChange={onChange}>3 stars</Checkbox></div>
      <div class="itemrate"><Checkbox onChange={onChange}>2 stars</Checkbox></div>
      <div class="itemrate"><Checkbox onChange={onChange}>1 star</Checkbox></div>
    </div>
    <div class="itemcategory">
      <p class="category">Type of court</p>
      <div class="itemrate"><Checkbox onChange={onChange}>Indoor</Checkbox></div>
      <div class="itemrate"><Checkbox onChange={onChange}>Outdoor</Checkbox></div>
    </div>
    <div class="itemserivce">
      <p class="category">Service</p>
      <div class="itemrate"><Checkbox onChange={onChange}>Parking available</Checkbox></div>
      <div class="itemrate"><Checkbox onChange={onChange}>Canteen/Cafeteria</Checkbox></div>
      <div class="itemrate"><Checkbox onChange={onChange}>Sport Shop</Checkbox></div>
      <div class="itemrate"><Checkbox onChange={onChange}>Hosting Tournament</Checkbox></div>
      <div class="itemrate"><Checkbox onChange={onChange}>Training</Checkbox></div>
    </div>

  </div>

);

const BookingPage = () => {
  const [data, setData] = useState();
  const dbRef = ref(getDatabase());

  useEffect(() => {
    get(child(dbRef, `data`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.val());
          console.log(snapshot.val())
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])

  return (
    <div class="level2_Containter">
      <div className="big-container">
        <div class="filter">
          <Filter />
        </div>


        {/* <p class="title">BOOKING COURTS</p> */}
        <a class="bookingsection">

          <div class="SearchBar">
            <SearchBar />
          </div>
          <link
            rel="stylesheet"
            href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
            integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
            crossorigin="anonymous"
          />
          <div class="grid">
            <div class="container">
              {data?.map((item, index) => (
                <div class="item" key={index}>
                  <img
                    class="product_img"
                    src="https://thegioithethao.vn/images/news/2021/02/02/large/thiet-ke-thi-cong-san-cau-long_1612255518.jpg"
                  ></img>
                  <div class="product_info">
                    <h3 class="name">{item.name}</h3>
                    <div class="rate_item">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </div>
                    <div class="address_item"><span id='fieldname'>Address</span>: {item.address}</div>
                    <div class="people_rate cls"><span id='fieldname'>Feature</span>: {item.feature}</div>
                    <div class="price_range"><span id='fieldname'>Price</span>: {item.price / 1000}.000 đ / {item.time}h</div>
                    <div class="time_range"><span id='fieldname'>Open from</span>: {item.open_time} to {item.close_time}h</div>
                    <Space.Compact>
                      <Button type="primary" style={{
                        marginTop: "20px",
                        marginRight: "20px",
                        background: "#00b96b",
                        width: "120px",
                        height: "35px",
                        fontSize: "15px"
                      }}>More details</Button>
                    </Space.Compact>
                    <Space.Compact>
                      <Link to={NAV.PAYMENT}>
                        <Button type="primary" style={{
                          marginTop: "20px",
                          marginRight: "20px",
                          background: "#00b96b",
                          width: "65px",
                          height: "35px",
                          fontSize: "15px"
                        }}>Book</Button>
                      </Link>
                    </Space.Compact>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default BookingPage;

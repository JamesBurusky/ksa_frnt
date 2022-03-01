import React from "react";
import placeholder from "../../assets/imgs/product.png";
import okay from "../../assets/imgs/okay-white.png";

export default function FeaturedProd(props) {
  const handleFormatPrices = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <div
      onClick={() => {
        window.location.href = "/product/m";
      }}
      className="featuredProd"
    >
      <img src={placeholder}/>
      <div className="overlay"></div>
      <div className="fcat">
        <h3>
          Available <br></br> Now!!!
        </h3>
        <img src={okay} alt="okay indicator" />
      </div>
      <h1>Mangoes</h1>
      <div className="fprice">
        <div className="container">
          <h4>500 Kgs</h4>
          <i className="fa fa-at"></i>
          <h4>KSh {handleFormatPrices(props.price)}</h4>
        </div>
      </div>
    </div>
  );
}

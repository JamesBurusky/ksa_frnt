import React from "react";
import placeholder from "../../assets/imgs/product.png";
import okay from "../../assets/imgs/okay.png";

export default function Prod(props) {
  const handleFormatPrices = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

 const classN = (props.class != null)? props.class : "prod"

  return (
    <div
      onClick={() => {
        window.location.href = "/product/m";
      }}
      className={classN}
    >
      <img src={placeholder} alt="" />
      <div className="cat">
        <h3>Ripe oranges</h3>
        <img src={okay} alt="" />
      </div>

      <p>Delicious oranges. Naturally ripened in their parent orange trees.</p>
      <div className="price">
        <h4>500 Kgs</h4>
        <i className="fa fa-at"></i>
        <h4>KSh {handleFormatPrices(props.price)}</h4>
      </div>
      <h6>Posted 7/12/2021</h6>
    </div>
  );
}

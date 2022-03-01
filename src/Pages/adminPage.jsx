import React, { useState, useEffect, useRef } from "react";
//import imgProduct from "../../assets/imgs/product.png";
import Button from "../components/Utils/button";
import Button2 from "../components/Utils/button2";
import Input from "../components/Utils/input";
import Select from "../components/Utils/select";
import useFetch from "../components/Utils/useFetch";
// import ApiLoading from "../Utils/apiLoading";
import TextArea from "../components/Utils/textarea";
import ApiMessages from "../components/Utils/apiMessages";
import Form from "../components/Utils/form";

export default function AdminPage(props) {
  let categories = [];
  let subcategories = [];

  const { data, isPending, error } = useFetch("gis");
  const [currentCategory, setCurrentCategory] = useState("");
  

  //input references
  // const getMessage = useRef();
  // const file = useRef();
  // const preview = useRef();
  // // const slcats = useRef();
  // // const slsubcats = useRef();
  // const title = useRef();
  // const category = useRef();
  // const description = useRef();
  // const thumbnail = useRef();
  // const url = useRef();

  // const selectCategory = (cat) => {
  //   categories = [];
  //   cat.forEach((element) => {
  //     categories.push(element.name);
  //   });
  //   return categories;
  // };

  // const initSubCategory = (cat) => {
  //   if (currentCategory === "") {
  //     setCurrentCategory(data[0].name);
  //     setApiLoading(false)
  //   }
  //   if (subcats.length === 0) {
  //     subcategories = [];
  //     cat[0].varieties.forEach((element) => {
  //       subcategories.push(element.name);
  //       console.log("var id: ", variety);
  //     });
  //     setSubcats(subcategories);
  //   }
  // };

  // const selectSubCategory = (cat) => {
  //   setCurrentCategory(slcats.current.getValue());
  //   subcategories = [];
  //   if (slcats.current != undefined) {
  //     const found = cat.find(
  //       (element) => element.name == slcats.current.getValue()
  //     );

  //     found.varieties.forEach((element) => {
  //       subcategories.push(element.name);
  //     });
  //   }
  //   if (subcategories.length > 0) setSubcats(subcategories);
  // };

  

  return (
    <div className="acnewoffer">
      {error && <div>{error}</div>}
      {/* {apiLoading && <ApiLoading />} */}
      {data && (
        <>
          {/* {initSubCategory(data)} */}
          <Form target="gis"/>
          <br/><br/>
          <Form target="events"/>
        </>
      )}
    </div>
  );
}

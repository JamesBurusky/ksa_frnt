import React from "react";
import useFetch from "../Utils/useFetch"

let lks = [
  "Nairobi",
  "Mombasa",
  "Nakuru",
  "Kisumu",
  "Eldoret",
  "Machakos"
];

function Link(props) {
  return (
    <p
      className="link"
      onClick={() => {
        window.location.href = props.link;
      }}
    >
      {props.link.split('/')[2]}
    </p>
  );
}

export default function Links() {
 const { data, isPending, error } = useFetch(`product/listsubcategories`);
    return (
      <div className="links">
        <div className="container">
          {error && <div>{error}</div>}
          {isPending && <div>Loading...</div>}
          {data && (
            <>
              <h2>Other Useful Links</h2>
              <p>
                Take a minute off your browsing and try one of our picks below.
              </p>
              <div className="list">
                {lks.map((item) => {
                  return <Link key={item} link={"/searchresults/" + item} />;
                })}
                {data.map((item) => {
                  return (
                    <Link
                      key={item.SubCategory}
                      link={"/subcategory/" + item.SubCategory}
                    />
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    );
}
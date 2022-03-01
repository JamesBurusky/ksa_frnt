import React from "react";
import Page from "./page";

export default function Pagination(props) {
  let array = [];
  const total = Math.floor(props.count / 12) + 1;
  const count = total > 5 ? 5 : total;

  for (let i = 1; i < count + 1; i++) {
    array.push(i);
  }

  return (
    <div className="pagination">
      <div className="container">
        <i
          className="fa fa-arrow-left"
          onClick={() => {
            props.handlePreviousPage(props.page);
          }}
        ></i>
        <div className="pages">
          {array.map((item) => {
            return (
              <Page
                key={item}
                handlePages={props.handlePages}
                offset={props.page}
                number={item}
                count={props.count}
              />
            );
          })}
          {count === 5 && (
            <>
              <h5>...</h5>
              <Page
                number={total}
                handlePages={props.handlePages}
                offset={props.page}
                count={props.count}
              />
            </>
          )}
        </div>
        <i
          className="fa fa-arrow-right"
          onClick={() => {
            props.handleNextPage(props.page);
          }}
        ></i>
      </div>
    </div>
  );
}

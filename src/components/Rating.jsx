import React from "react";


export function Rating(props) {
  return (
    <div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
        <div
          style={{
            display: "inline-block",
            width: "10px",
            height: "10px",
            background: index < props.rating ? "black" : "#dedede",
          }}
        ></div>
      ))}
    </div>
  );
}

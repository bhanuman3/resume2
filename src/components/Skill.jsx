import React from "react";
import { Rating } from "./Rating";

export function Skill(props) {
  return (
    <div
      style={{
        display: "flex",
        marginBottom: "6px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ flex: 1 }}>{props.name}</div>
      <div style={{ flex: 1 }}>
        <Rating rating={props.rating} />
      </div>
    </div>
  );
}

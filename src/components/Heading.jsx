import React from "react";

export function Heading({ name, dob, address, email, phone }) {
  return (
    <div
      style={{
        // borderBottom: '1px solid black',
        paddingBottom: "5px",
        // padding: '32px',
      }}
    >
      <div className="my-name" style={{ marginBottom: "0.3rem" }}>
        {name}
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <i
            class="material-icons"
            style={{ fontSize: "12px", lineHeight: "1.2rem" }}
          >
            perm_identity
          </i>
        </div>
        &nbsp;
        <div>
          <div>
            {dob}
          </div>
        </div>
      </div>

      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <i
              class="material-icons"
              style={{ fontSize: "12px", lineHeight: "1.2rem" }}
            >
              location_on
            </i>
          </div>
          &nbsp;
          <div>{address}</div>
          <div style={{ width: "2rem" }}></div>
          <div>
            <i
              class="material-icons"
              style={{ fontSize: "12px", lineHeight: "1.2rem" }}
            >
              phone_iphone
            </i>
          </div>
          &nbsp;
          <div>{phone}</div>
        </div>
      </div>

      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <i
              class="material-icons"
              style={{ fontSize: "12px", lineHeight: "1.2rem" }}
            >
              mail
            </i>
          </div>
          &nbsp;
          <div>{email}</div>
        </div>
      </div>

      <div style={{ marginBlock: "0rem" }}></div>
    </div>
  );
}

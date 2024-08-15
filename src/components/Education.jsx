import React from "react";

export function Education({ from, to, location, role, company, ...props }) {
  return (
    <div className="Education">
      <div>
        <div
          className="duration-location"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div>
            <i class="material-icons">date_range</i>
            &nbsp;
          </div>
          <div>
            {from} – {to}
          </div>

          <div style={{ width: "1rem" }}></div>

          <div>
            <i class="material-icons">location_on</i>
            &nbsp;
            {location}
          </div>
        </div>

        
        <div>
          <div className="role">{role}</div>
          <div className="company">{company}</div>
        </div>

        {props.children}
      </div>
    </div>
  );
}

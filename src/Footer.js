import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">{/* Column1 */}</div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Game-Commerce | All rights reserved
            | Terms Of Service | Javokhir Rikhsiev
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

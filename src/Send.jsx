import React, { useState } from "react";
import { Link } from "react-router-dom";

function Send() {
  return(
    <div className="toSendDiv">
        <p> Select the source of your funds. </p>
        <Link to = "/Mpesa">
            <button className="moneyButton"> Mpesa </button>
        </Link>
        <Link to = "/Bank">
            <button className="moneyButton"> Bank </button>
        </Link>
    </div>
  );
}

export default Send;

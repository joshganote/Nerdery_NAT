import React from "react";

import "./CurrentSnack.css";

export const CurrentSnack = (props) => {
  /**
   * Thought I would try and show an example of a reusable component 
   * to help render the current selections
   */
  return (
    <>
      <div className="snack-box">
        <div className="vote-corner">
          <p className="vote-number">{props.votes}</p>
        </div>

        <div className="img-container">
          <div className="img-inner">
            <img className="image" src={props.image} alt={props.product} />
          </div>
        </div>

        <div className="snack-info">
          <p className="info top">{props.product}</p>
          <p className="info bottom">{props.brand}</p>
        </div>
      </div>
    </>
  );
};

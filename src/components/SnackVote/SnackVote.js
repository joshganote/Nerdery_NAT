import React from "react";
import {
  CurrentSnackContainer,
  CurrentSnackImg,
  CurrentSnackBox,
} from "../SnackVote/SnackVoteStyled";

import "./snack.css";

export const SnackVote = (props) => {
  /**
   * Thought I would try and show an example of a "dumb component" 
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

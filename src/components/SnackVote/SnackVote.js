import React from "react";
import { useFetchSnacks } from "../../api/useSnacks";
import {
  CurrentSnackContainer,
  CurrentSnackImg,
  CurrentSnackBox,
} from "../SnackVote/SnackVoteStyled";

import "./snack.css";

export const SnackVote = (props) => {
  const { data, error } = useFetchSnacks();
  console.log(`Error: ${error}`);

  return (
    <div className="snack-container">
      <h1>SnackVote</h1>
      {data.map((item, index) => (
        // <CurrentSnackContainer>
        //   <CurrentSnackBox>

        /* <p>{item.brand}</p>
            <p>{item.description}</p>
            <p>{item.product}</p>
            <p>{item.votes}</p> */
        <div className="snack-box">

          <div className="vote-corner">
            <p className="vote-number">{item.votes}</p>
          </div>

          <div className="img-container">
            <div className="img-inner">
              <img className="image" src={item.image} alt={item.product} />
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

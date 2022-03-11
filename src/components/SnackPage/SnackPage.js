import React from "react";
import { SnackVote } from "../SnackVote/SnackVote";
import { useFetchSnacks } from "../../api/useSnacks";

import "./SnackPage.css";

export const SnackPage = () => {
  const { data } = useFetchSnacks();
  console.log(data)

  /**
   * Sort array highest to low based on vote count
   */
  const dataVotes = data.sort((a,b) => {
    return b.votes - a.votes;
  });
  console.log(dataVotes)
  return (
    <div className="snack-container">
      <div className="hdg-container">
        <div className="hdg hdg_2 hdg-align">
          <h1>Currently In Stock</h1>
        </div>
        <div className="hdg hdg_4 hdg-align">
          <p>
            Here are the snacks that are available in the Nerdery kitchen now
          </p>
        </div>
      </div>
      <div className="grid-container">
        <div className="snack-grid">
          {dataVotes.map((snack, index) => (
            <SnackVote
              key={index}
              votes={snack.votes}
              image={snack.image}
              product={snack.product}
              brand={snack.brand}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

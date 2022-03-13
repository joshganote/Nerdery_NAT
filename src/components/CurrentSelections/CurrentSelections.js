import React from "react";
import { CurrentSnack } from "../CurrentSnack/CurrentSnack";
import { useFetchSnacks } from "../../api/useSnacks";

import "./CurrentSelections.css";

export const CurrentSelections = () => {
  const { currentSnacks } = useFetchSnacks();
  /**
   * I added data to the server to account for the snacks that up for vote.
   * Those snacks where then showing up in this section as well so I added this
   * filter to insure that I only mapped through data that contains a description.
   */
  const current = currentSnacks.filter(x => x.description)
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
          {current.map((snack, index) => (
            <CurrentSnack
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

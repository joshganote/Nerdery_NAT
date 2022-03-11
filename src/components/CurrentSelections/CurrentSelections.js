import React from "react";
import { CurrentSnack } from "../CurrentSnack/CurrentSnack";
import { useFetchSnacks } from "../../api/useSnacks";

import "./CurrentSelections.css";

export const CurrentSelections = () => {
  const { data } = useFetchSnacks();
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
          {data.map((snack, index) => (
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

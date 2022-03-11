import React from "react";
import {useFetchSnacks} from "../../api/useSnacks";
import "./SnackVote";

export const SnackVote =() => {
  const {data, error} = useFetchSnacks();
  console.log(`Error: ${error}`);

  return (
    <div>
      <h1>SnackVote</h1>
      {data.map((item, index) => (
        <div key={index}>
        <p>{item.brand}</p>
        <p>{item.description}</p>
        <p>{item.product}</p>
        <p>{item.votes}</p>
        <img src={item.image} alt={item.product}/>
        </div>
      ))}
    </div>
  );
}

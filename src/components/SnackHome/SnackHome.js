import React from "react";
import { CurrentSelections } from "../CurrentSelections/CurrentSelections";
import { SnackVoting } from "../SnackVoting/SnackVoting";
import { Maintenance } from "../Maintenance/Maintenance";
import { useFetchSnacks } from "../../api/useSnacks";

export const SnackHome = () => {
  /**
   * Not sure if this is best practice or necessarily practical here but I figured I would just make 
   * one api call and then pass props.
   */
  const { currentSnacks, voteSnacks, postSnackVote, error } = useFetchSnacks();
  return (
    <>
      {voteSnacks.length ? (
        <>
          <CurrentSelections currentSnacks={currentSnacks} />
          <SnackVoting
            voteSnacks={voteSnacks}
            postSnackVote={postSnackVote}
            error={error}
          />
        </>
      ) : (
        <Maintenance />
      )}
    </>
  );
};

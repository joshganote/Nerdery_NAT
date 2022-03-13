import React from "react";
import { addMonths } from "https://cdn.jsdelivr.net/npm/date-fns/+esm";

export const VoteLimitExceeded = () => {
  /**
   * Tried to find a cool way to let the user know when the voting will be enabled after a month passes.
   * Im sure this solution won't be entirely correct. Not sure if it's worth going into storing todays date
   * letting a month pass, clearing the previous month and updating it with the new one but you get the point.. ha
   */
   let nextMonth = addMonths(new Date(), 1).toLocaleDateString();
  return (
    <>
      <p>We love that you are excited about the upcoming snack selections!</p>
      <p>You will need to come back on {`${nextMonth}`} to vote again.</p>
    </>
  );
};

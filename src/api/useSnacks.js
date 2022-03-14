import React, { useEffect, useState } from "react";
import axios from "axios";
import { VoteLimitExceeded } from "../error/errorMessages";
// import { setSnackSlice } from "../redux/slice/snackSlice";
// import { useDispatch } from "react-redux";

/**
 * Could probably through this in an .env file but Im just going to keep it simple.
 */
const authToken = "33b55673-57c7-413f-83ed-5b4ae8d18827";

export const useFetchSnacks = () => {
  // const dispatch = useDispatch();
  const [currentSnacks, setCurrentSnacks] = useState([]);
  const [voteSnacks, setVoteSnacks] = useState([]);
  const [voteCount, setVoteCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getSnacks();
  }, []);

  const getSnacks = () => {
    setLoading(true);
    axios
      .get("http://localhost:3001/snacks", {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then((response) => {
        /**
         * Sort array highest to low based on vote count.
         * This will be used for Current Snack Selections that uses brand images
         */
        const sortDataByVotes = response.data.sort((a, b) => {
          return b.votes - a.votes;
        });
        setCurrentSnacks(sortDataByVotes);
        /**
         * Sort Array Alphabetically.
         * This will be used for the snacks up for vote.
         */
        const sortAlphabetically = response.data.sort((a, b) => {
          if (a.brand < b.brand) {
            return -1;
          }
          if (a.brand > b.brand) {
            return 1;
          }
          return 0;
        });
        setVoteSnacks(sortAlphabetically);
      })
      /**
       *  Trying to use Redux here to store snacks in reducer
       */
      // .then((res) => {
      //   dispatch(setSnackSlice(res.data));
      // })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const postSnackVote = (snack) => {
    if (voteCount < 3) {
      setVoteCount(voteCount + 1);

      const response = axios
        .post(
          `http://localhost:3001/snacks/vote/${snack.id}`,
          {},
          { headers: { Authorization: `Bearer ${authToken}` } }
        )
        .then((res) => {
          console.log(res);
        })
        .then(() => {
          getSnacks();
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
      return response;
    } else {
      return setError(<VoteLimitExceeded />);
    }
  };

  return {
    currentSnacks,
    voteSnacks,
    loading,
    error,
    postSnackVote,
  };
};

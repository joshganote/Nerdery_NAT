import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import axios from "axios";
import { getSnack } from "../redux/features/snackSelectionReducer";

const authToken = "33b55673-57c7-413f-83ed-5b4ae8d18827";

export const useFetchSnacks = () => {
  const dispatch = useDispatch();
  const [currentSnacks, setCurrentSnacks] = useState([]);
  const [voteSnacks, setVoteSnacks] = useState([]);
  const [selections, setSelections] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getSnack();
  }, []);

  const filterSnack = () => {
    const test2 = voteSnacks.filter(v => v.votes +1)
    if(test2) {
      return
    }
  }

  const getSnack = async () => {
    setLoading(true);
    const response = axios
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
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
      dispatch(getSnack(currentSnacks, voteSnacks));
  };

  const postSnackVote = async (snack) => {
    const response = axios
      .post(
        `http://localhost:3001/snacks/vote/${snack.id}`,
        {},
        { headers: { Authorization: `Bearer ${authToken}` } }
      )
      .then(res => {
        console.log(res)
      })
      .then(() => {
        getSnack()
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
      return response
  };

  return { currentSnacks, voteSnacks, loading, error, postSnackVote, selections,  };
};

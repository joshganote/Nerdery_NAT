import React, { useState, useEffect } from "react";
import { useFetchSnacks } from "../../api/useSnacks";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Grid from "@mui/material/Grid";
import { GoPlus } from "react-icons/go";
import { styled, createTheme } from "@mui/material/styles";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { VoteLimitExceeded } from "../../error/errorMessages";
import { Container } from "@mui/material";
import { getAllSnacks } from "../../redux/slice/snackSlice";

import "./SnackVoting.css";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const AvailableItemsCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#3d9bb3",
    color: "white",
    padding: 10,
    fontSize: 32,
  },
}));

const AvailableItemsCount = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    color: "#3d9bb3",
    fontSize: 12,
    padding: 12,
    width: 1,
  },
}));

const SelectionCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    color: "grey",
    padding: 10,
    fontSize: 32,
  },
}));

const AvailableCountCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: 12,
    padding: 12,
    width: 1,
  },
}));

const AvailableItemsRow = styled(TableRow)(() => ({
  "&:nth-of-type(even)": {
    backgroundColor: "#CFCFCF",
  },
  "&:nth-of-type(odd)": {
    backgroundColor: "#E1E1E1",
  },
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.25) !important",
  },
  border: 0,
}));

const BrandCountCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    width: "100%",
    color: "#7E7E7E",
  },
}));

const SnackVoteContainer = styled(Container)(({ theme }) => ({
  width: "100px",
  marginLeft: "auto",
  marginRight: "auto",
  [theme.breakpoints.up("xs")]: {
    width: "450px",
  },
  [theme.breakpoints.up("sm")]: {
    width: "550px",
  },
  [theme.breakpoints.up("md")]: {
    width: "900px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "1000px",
  },
}));

export const SnackVoting = () => {
  /**
   * TODO Redux Documentation
   */
  // const snackList = useSelector(state => state.snacks);
  // const dispatch = useDispatch();

  const { voteSnacks, postSnackVote, error } = useFetchSnacks();
  const [addToSelection, setAddToSelection] = useState([]);
  /**
   * Even though the user only gets 3 votes, Im trying to check for how many votes are left in my POST request.
   * If I set the default value to 3 then when I add a vote my vote count starts at 2 in my if checker for the POST
   * request which makes since because it's getting a current shot of that state. Im trying to compensate for that by starting with 4 and subtracting 1. Doubt this is best practice but it'll do for now.
   */
  const [numOfVotes, setNumOfVotes] = useState(3);

  /**
   * Needed a way to filter for the snacks that I added in the server config snacks array.
   * I didn't see a list of snacks that represented what was in the Available Items Section
   * from the design mockup so I added some data. Since these snacks technically are not inStock
   * I used that key with a value of 0. Since the POST route is looking for matching id's in
   * the snacks array this was the only way I thought I could use in order to increment the votes
   * by one each time it is selected.
   */
  const snackVote = voteSnacks.filter((x) => x.inStock === 0);

  const newSelection = (vote) => {
    if (numOfVotes > 0) {
      setNumOfVotes(numOfVotes - 1);

      /**
         * Trying to find a way to check previous state with the new state when a selection is voted on
         * trying to compare the old array with what is being returned from the the post request to I can
        //  * push the incoming new totals into an array to then show in the Selection table
        //  */
      setAddToSelection((state) => [...state, vote]);
    }
  };

  /**
   * Im using the addToSelection array to push the selected snack into. My guess from the UI mock up was to have what
   * the user voted for showing the table to the right. This is my attempt to grab that data and check for matching id's.
   * If the id's match then don't show it a second time.
   */
  const uniqueSnacks = Array.from(new Set(addToSelection.map((a) => a.id))).map(
    (id) => {
      return voteSnacks.find((a) => a.id === id);
    }
  );

  return (
    <SnackVoteContainer>
      <div className="upper-align">
        <div className="text-c">
          <h1>Snack Voting</h1>
          <h2>Vote on the snacks you want to see in this month's rotation</h2>
          <div className="divider"></div>
          <p>{`${numOfVotes}`} Votes Remaining</p>
          {error !== null && error}
        </div>
      </div>
      <div className="table-section">
        <div className="table-align">
          <Grid container spacing={2}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div className="table-left">
                <TableContainer>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow sx={{ backgroundColor: "#3d9bb3" }}>
                        <AvailableItemsCell>Available Items</AvailableItemsCell>
                        <TableCell></TableCell>
                        <AvailableItemsCount>
                          <div className="circle-count circle-color_1">
                            {snackVote.length}
                          </div>
                        </AvailableItemsCount>
                      </TableRow>
                    </TableHead>
                  </Table>
                </TableContainer>
                <TableContainer>
                  <Table aria-label="simple table">
                    <TableBody>
                      {snackVote.map((vote) => (
                        <AvailableItemsRow key={vote.id}>
                          <div className="plus-icon">
                            <TableCell>
                              <GoPlus
                                color="white"
                                size={25}
                                onClick={() => postSnackVote(vote, numOfVotes)}
                                onClickCapture={() => newSelection(vote)}
                              />
                            </TableCell>
                          </div>
                          <BrandCountCell>
                            <div className="brand-vote align_1">
                              <p>{vote.brand}</p>
                              <p>{vote.votes}</p>
                            </div>
                          </BrandCountCell>
                        </AvailableItemsRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div className="table-right">
                <TableContainer>
                  <Table sx={{ minWidth: 250 }} aria-label="simple table">
                    <TableHead>
                      <TableRow sx={{ borderBottom: "1.5px solid #B1B1B1" }}>
                        <SelectionCell>Selection</SelectionCell>
                        <AvailableCountCell>
                          <div className="circle-count circle-color_2">
                            {addToSelection.length}
                          </div>
                        </AvailableCountCell>
                      </TableRow>
                    </TableHead>
                  </Table>
                </TableContainer>
                <TableContainer>
                  <Table sx={{ minWidth: 250 }} aria-label="simple table">
                    <TableBody>
                      {uniqueSnacks.map((vote) => (
                        <TableRow key={vote.id} sx={{ border: 0 }}>
                          <BrandCountCell sx={{ padding: 0 }}>
                            <div className="brand-vote align_2">
                              <p>{vote.brand}</p>
                              <p>{vote.votes}</p>
                            </div>
                          </BrandCountCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </SnackVoteContainer>
  );
};

// let testArr = [];
// testArr = [...testArr, addVote]
// console.log(addVote, 'selections')
// let testArr = [];
// testArr.push(addVote)
// console.log('test Array', testArr);
// console.log('snack', snackData);

// console.log(selections, 'yaaaaa')

// const handle = (vote) => {
//   if (vote.votes < snackVote) {
//   }
// };

// const test = voteSnacks.find((t) => t.votes +1);
// console.log(test)
// useEffect(() => {
//   const test = voteSnacks.find((t) => t.votes + 1);
//   console.log(test)
// }, [voteSnacks])
// setAddToSelection(state => [...state, test])

// const test = voteSnacks.find((t) => t.votes +1);
//   if(test) {
//     setAddToSelection(() => prev => [...prev, test])
//   }

// const newSelection = () => {
//   setAddToSelection(snackVote);
//   console.log(addToSelection);
// };

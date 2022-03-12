import React from "react";
import { useFetchSnacks } from "../../api/useSnacks";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { GoPlus } from "react-icons/go";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";

import "./SnackVoting.css";

const StyledAvailableItems = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#3d9bb3",
    color: "white",
    padding: 10,
    fontSize: 32,
  },
}));

const StyledAvailableItemsCount = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    color: "#3d9bb3",
    fontSize: 12,
    padding: 12,
    width: 1,
  },
}));

const StyledPlusIcon = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    // '&:nth-of-type(odd)':{
    //   backgroundColor: "yellow",
    // }
    backgroundColor: "lightgray",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: 'blue',
  },
  '&:nth-of-type(odd)': {
    backgroundColor: 'grey',
  },
  border: 0
}));

const StyledBrandName = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    width: "100%",
  },
}));

const StyledBrandVoteCount = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: "blue",
  },
}));

export const SnackVoting = (props) => {
  const { data, error } = useFetchSnacks();
  console.log(error);
  const snackVote = data.filter((x) => x.inStock === 0);
  console.log(snackVote);
  return (
    <div className="container2">
      <div className="upper-align">
        <div className="text-c">
          <h1>Snack Voting</h1>
          <p>Vote on the snacks you want to see in this month's rotation</p>
          <div className="divider divider_1"></div>
          {/* Will need to make this vote count dynamic */}
          <p>3 Votes Remaining</p>
        </div>
      </div>
      <div className="test">
        <div className="test2">
          <div className="table one">
            <TableContainer sx={{ width: "max-content" }}>
              <Table sx={{ minWidth: 250 }} aria-label="simple table">
                <TableHead>
                  <TableRow className="hd">
                    <StyledAvailableItems>Available Items</StyledAvailableItems>
                    <TableCell align="right"></TableCell>
                    <StyledAvailableItemsCount align="right">
                      <div className="count-box">8</div>
                    </StyledAvailableItemsCount>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {snackVote.map((vote) => (
                    <TableRow
                      key={vote.votes}
                      sx={{ border: 0 }}
                    >
                      <StyledPlusIcon>
                        <GoPlus color="white" size={18} />
                      </StyledPlusIcon>
                      <StyledBrandName align="left">
                        {" "}
                        {vote.brand}
                      </StyledBrandName>
                      <StyledBrandVoteCount align="right">
                        {" "}
                        {vote.votes}
                      </StyledBrandVoteCount>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="table two">
            <Table
              // sx={{ minWidth: 250 }}
              // lg={{ maxWidth: 1000 }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Available Items</TableCell>
                  <TableCell align="right"></TableCell>
                  <TableCell align="right">8</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {snackVote.map((vote) => (
                  <TableRow
                    key={vote.votes}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {vote.brand}
                    </TableCell>
                    <TableCell align="left"></TableCell>
                    <TableCell align="right">{vote.votes}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {/* <div className="selection">
          <div className="selection-header">
            <p>Selection</p>
            <p>3</p>
          </div>
          <div className="divider divider_2"></div>
          <div className="selection-header">
            <p>Selection</p>
            <p>3</p>
          </div>
          <div className="selection-header">
            <p>Selection</p>
            <p>3</p>
          </div>
          <div className="selection-header">
            <p>Selection</p>
            <p>3</p>
          </div>
        </div> */}
        </div>
      </div>
      <div className="boxxxx">
        <div className="box2 box-size box-color_1">
          <p className="p-txt">Available Items</p>
          <div className="count-box">8</div>
        </div>
        {snackVote.map((snack, index) => (
          <div className="box2 box-size box-color_2" key={index}>
            <GoPlus
              color="white"
              size={16}
              className="plus box-color_3"
              onClick={() => console.log("clicked")}
            />
            <p className="josh">{snack.brand}</p>
            <p className="snack">{snack.votes}</p>
          </div>
        ))}
      </div>
      <div>
        <TableContainer>
          <Table sx={{ minWidth: 250 }} aria-label="simple table">
            <TableHead className="the">
              <TableRow className="hd">
                <StyledAvailableItems>Available Items</StyledAvailableItems>
                <TableCell align="right"></TableCell>
                <StyledAvailableItemsCount align="right">
                  <div className="count-box">8</div>
                </StyledAvailableItemsCount>
              </TableRow>
            </TableHead>
            {/* <TableBody>
                  {snackVote.map((vote) => (
                    <TableRow
                      key={vote.votes}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <StyledPlusIcon>
                        <GoPlus color="white" size={18} />
                      </StyledPlusIcon>
                      <StyledBrandName align="left">
                        {" "}
                        {vote.brand}
                      </StyledBrandName>
                      <StyledBrandVoteCount align="right">
                        {" "}
                        {vote.votes}
                      </StyledBrandVoteCount>
                    </TableRow>
                  ))}
                </TableBody> */}
          </Table>
        </TableContainer>
        <TableContainer>
          <Table sx={{ minWidth: 250 }} aria-label="simple table">
            {/* <TableHead>
                  <TableRow className="hd">
                    <StyledAvailableItems>Available Items</StyledAvailableItems>
                    <TableCell align="right"></TableCell>
                    <StyledAvailableItemsCount align="right">
                      <div className="count-box">8</div>
                    </StyledAvailableItemsCount>
                  </TableRow>
                </TableHead> */}
            <TableBody>
              {snackVote.map((vote) => (
                <StyledTableRow
                  key={vote.votes}
                >
                  <StyledPlusIcon component="td">
                    <GoPlus color="white" size={25} />
                  </StyledPlusIcon>
                  <StyledBrandName align="left">
                    <div className="noooo">
                      <p>{vote.brand}</p>
                      <p>{vote.votes}</p>
                    </div>
                  </StyledBrandName>
                  {/* <StyledBrandVoteCount align="right">
                      </StyledBrandVoteCount> */}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

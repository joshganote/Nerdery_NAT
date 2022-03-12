import React from "react";
import { useFetchSnacks } from "../../api/useSnacks";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { GoPlus } from "react-icons/go";
import { styled } from "@mui/material/styles";

import "./SnackVoting.css";

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

const AvailableItemsRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: "#CFCFCF",
  },
  "&:nth-of-type(odd)": {
    backgroundColor: "#E1E1E1",
  },
  border: 0,
}));

const BrandCountCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    width: "100%",
    color: "#7E7E7E",
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
          <h2>Vote on the snacks you want to see in this month's rotation</h2>
          <div className="divider"></div>
          {/* Will need to make this vote count dynamic */}
          <p>3 Votes Remaining</p>
        </div>
      </div>
      <div className="table-section">
        <div className="table-align">
          <div className="table-left">
            <TableContainer>
              <Table sx={{ minWidth: 250 }} aria-label="simple table">
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#3d9bb3'}}>
                    <AvailableItemsCell>Available Items</AvailableItemsCell>
                    <TableCell></TableCell>
                    <AvailableItemsCount>
                      <div className="circle-count circle-color_1">8</div>
                    </AvailableItemsCount>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
            <TableContainer>
              <Table sx={{ minWidth: 250 }} aria-label="simple table">
                <TableBody>
                  {snackVote.map((vote) => (
                    <AvailableItemsRow key={vote.votes}>
                      <div className="plus-icon">
                        <TableCell>
                          <GoPlus color="white" size={25} />
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
          <div className="table-right">
            <TableContainer>
              <Table sx={{ minWidth: 250 }} aria-label="simple table">
                <TableHead>
                  <TableRow sx={{ borderBottom: "1.5px solid #B1B1B1" }}>
                    <SelectionCell>Selection</SelectionCell>
                    <AvailableCountCell>
                      <div className="circle-count circle-color_2">8</div>
                    </AvailableCountCell>
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>
            <TableContainer>
              <Table sx={{ minWidth: 250 }} aria-label="simple table">
                <TableBody>
                  {snackVote.map((vote) => (
                    <TableRow key={vote.votes} sx={{ border: 0}}>
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
        </div>
      </div>
    </div>
  );
};

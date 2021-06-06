import {
  FormControlLabel,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import React, { useReducer, useState } from "react";
import IOSSwitch from "../IosSwitch";
import TablePaginationActions from "../TablePagination";
import "./styles.scss";
import { rows, initialState } from "./data";
const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SWITCH_OFF":
      const newArr = [...state];
      newArr[action.indexState].check[action.roleState] = false;
      return newArr;
    case "SWITCH_ON":
      const newArray = [...state];
      newArray[action.indexState].check[action.roleState] = true;
      return newArray;
    default:
      return state;
  }
};
const RoleTable: React.FC = () => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = (event: any, itemID: number) => {
    const roles = event.target.getAttribute("name");
    const index = itemID - 1;
    if (state[index].check[roles]) {
      // console.log("dang true");
      dispatch({
        type: "SWITCH_OFF",
        indexState: index,
        roleState: roles,
      });
    } else {
      // console.log("dang false");
      dispatch({
        type: "SWITCH_ON",
        indexState: index,
        roleState: roles,
      });
    }
  };
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  console.log(state);
  return (
    <TableContainer component={Paper} className="tableRoles">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ width: "45%" }} className="actionColumn">
              <span>HÀNH ĐỘNG</span>
            </TableCell>
            <TableCell style={{ width: "15%" }}>
              <span>General manager</span>
            </TableCell>
            <TableCell style={{ width: "15%" }}>
              <span>Local manager</span>
            </TableCell>
            <TableCell style={{ width: "15%" }}>
              <span>Branch manager</span>
            </TableCell>
            <TableCell style={{ width: "10%" }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((item: any) => (
            <TableRow key={item.id}>
              <TableCell component="th" scope="row" className="actionColumn">
                <span>{item.name}</span>
              </TableCell>
              <TableCell align="center">
                <FormControlLabel
                  control={
                    <IOSSwitch
                      checked={state[item.id - 1].check["general"]}
                      onChange={(e) => handleChange(e, item.id)}
                      name="general"
                    />
                  }
                  label=""
                />
              </TableCell>
              <TableCell align="center">
                <FormControlLabel
                  control={
                    <IOSSwitch
                      checked={state[item.id - 1].check["local"]}
                      onChange={(e) => handleChange(e, item.id)}
                      name="local"
                    />
                  }
                  label=""
                />
              </TableCell>
              <TableCell align="center">
                <FormControlLabel
                  control={
                    <IOSSwitch
                      checked={state[item.id - 1].check["branch"]}
                      onChange={(e) => handleChange(e, item.id)}
                      name="branch"
                    />
                  }
                  label=""
                />
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 1 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter className="tableFooter">
          <TableRow className="tablePagination">
            <TablePagination
              // rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              // SelectProps={{
              //   inputProps: { "aria-label": "rows per page" },
              //   native: true,
              // }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
export default RoleTable;

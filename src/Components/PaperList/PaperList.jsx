import React, { useState, useEffect } from "react";
import HOC from "../../Common/HOC";
import "../CreateLevel/CreateLevel.css";
import { Grid, Card } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useNavigate } from "react-router";
//pagination
import TablePagination from "@material-ui/core/TablePagination";

const PaperList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const [addOrder, setaddOrder] = useState([
    {
      id: 1,

      title: "Level-1",
      Mark: "Choose the Correct Answer.",
    },
    {
      id: 2,

      title: "Level-1",
      Mark: "Choose the Correct Answer.",
    },
    {
      id: 3,

      title: "Level-1",
      Mark: "Choose the Correct Answer.",
    },
    {
      id: 3,

      title: "Level-1",
      Mark: "Choose the Correct Answer.",
    },
    {
      id: 3,

      title: "Level-1",
      Mark: "Choose the Correct Answer.",
    },
    {
      id: 3,

      title: "Level-1",
      Mark: "Choose the Correct Answer.",
    },
    {
      id: 3,

      title: "Level-1",
      Mark: "Choose the Correct Answer.",
    },
    {
      id: 3,

      title: "Level-1",
      Mark: "Choose the Correct Answer.",
    },
  ]);

  let navigate = useNavigate();
  // for pagination hadler
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

  const handleChangePage = (event, newPage) => {
    window.scrollTo(0, 0);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [titlename, settitlename] = useState("");

  const filterData = addOrder.filter((event) => {
    return event.title.toLowerCase().indexOf(titlename.toLowerCase()) !== -1;
  });

  const classes = useStyles();
  return (
    <>
      <div className="content_padding_component">
        <nav aria-label="breadcrumb">
          <div className="content_width">
            <Grid className="Component_main_grid">
              <Grid item md={12}>
                <div className="level_content">
                  <h2 className="pl-5 py-3">Paper List</h2>
                  <div>
                    <button
                      type="button"
                      class="btn btn-info mr-4 mt-3"
                      onClick={() => navigate(-1)}
                    >
                      <i class="fa fa-arrow-left"></i>Go Back
                    </button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </nav>

        {/* table */}
        <div className="table_class">
          <Card classname="main_card p-3">
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>S. No.</TableCell>

                    <TableCell>Paper Name</TableCell>

                    <TableCell>Paper Date</TableCell>
                    <TableCell>Paper Duration</TableCell>
                    <TableCell>Paper Marks</TableCell>

                    <TableCell className="text-center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? filterData.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : filterData
                  ).map((row, index) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>

                      <TableCell>Paper</TableCell>
                      <TableCell>2021-12-08 00:00:00</TableCell>
                      <TableCell>2</TableCell>

                      <TableCell>12</TableCell>

                      <TableCell className="text-center d-flex">
                        <button type="button" class="btn btn-info mr-3">
                          Edit
                        </button>

                        <button type="button" class="btn btn-danger">
                          Delete
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <TablePagination
                true
                rowsPerPageOptions={false}
                component="div"
                count={filterData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </TableContainer>
          </Card>
        </div>
      </div>
    </>
  );
};

export default HOC(PaperList);

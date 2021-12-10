import React, { useState, useEffect } from "react";
import HOC from "../../Common/HOC";
import "../CreateLevel/CreateLevel.css";
import { Grid, Card } from "@material-ui/core";
import { useNavigate } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
//pagination
import TablePagination from "@material-ui/core/TablePagination";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";

const Create_heading = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [EditDailogOpen, setEditDailogOpen] = useState(false);
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
                  <h2 className="pl-5 py-3">Heading</h2>
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
              {/* <Grid item md={10} sm={10} xs={10}>
                <h2 className="pl-5 py-3">Heading</h2>
              </Grid>
              <Grid item md={2} sm={2} xs={2}>
                <button
                  type="button"
                  class="btn btn-info mr-4 mt-3"
                  onClick={() => navigate(-1)}
                >
                  <i class="fa fa-arrow-left"></i>Go Back
                </button>
              </Grid> */}
            </Grid>
          </div>
        </nav>
        <div className="typeclass mx-5 my-4">
          <Card className="p-4">
            <Grid className="Component_main_grid">
              <Grid item md={12}>
                <div className="text_filed_heading pl-1 ">Heading *</div>
                <div className=" mt-1 mr-2">
                  <input
                    type="text"
                    className="form-control "
                    autoComplete="off"
                  />
                </div>
              </Grid>
            </Grid>

            <Grid className="Component_main_grid">
              <Grid item md={5}>
                <div className="text_filed_heading pl-1 ">Level *</div>
                <div className=" mt-1 mr-2">
                  <select class="custom-select custom-select-md mb-3">
                    <option selected>Select</option>
                    <option value="1">Level-1</option>
                    <option value="2">Level-2</option>
                    <option value="3">Level-3</option>
                  </select>
                </div>
              </Grid>
              <Grid item md={5}>
                <div className="text_filed_heading pl-1 ">Question Type *</div>
                <div className=" mt-1 mr-2">
                  <select class="custom-select custom-select-md mb-3">
                    <option selected>Select</option>
                    <option value="1">Long Question</option>
                    <option value="2">Short Question</option>
                    <option value="3">Level-3Multiplication (MCQs)</option>
                  </select>
                </div>
              </Grid>

              <Grid item md={2}>
                <button type="button" class="btn btn-info mt-4 ml-3">
                  Submit
                </button>
              </Grid>
            </Grid>
          </Card>
        </div>
        {/* table */}
        <div className="table_class">
          <Card classname="main_card p-3">
            <TableContainer>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>

                    <TableCell>TITLE</TableCell>

                    <TableCell>Heading</TableCell>

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

                      <TableCell>{row.title}</TableCell>

                      <TableCell>{row.Mark}</TableCell>

                      <TableCell className="text-center">
                        <button
                          type="button"
                          class="btn btn-info mr-3"
                          onClick={() => setEditDailogOpen(!EditDailogOpen)}
                        >
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
      <div className="">
        <Dialog
          open={EditDailogOpen}
          aria-labelledby="form-dialog-title"
          maxWidth="sm"
          fullWidth="fullWidth"
        >
          <DialogTitle>
            Add Level
            <span
              className="float-right icon_color"
              onClick={() => setEditDailogOpen(!EditDailogOpen)}
            >
              <i class="fa fa-times hover_cursor" aria-hidden="true"></i>{" "}
            </span>
          </DialogTitle>
          <DialogContent>
            <Grid className="Component_main_grid">
              <Grid item md={12}>
                <div className="text_filed_heading pl-1 ">Heading *</div>
                <div className=" mt-1 mr-2">
                  <input
                    type="text"
                    className="form-control "
                    autoComplete="off"
                  />
                </div>
              </Grid>
            </Grid>

            <Grid className="Component_main_grid">
              <Grid item md={5}>
                <div className="text_filed_heading pl-1 ">Level *</div>
                <div className=" mt-1 mr-2">
                  <select class="custom-select custom-select-md mb-3">
                    <option selected>Select</option>
                    <option value="1">Level-1</option>
                    <option value="2">Level-2</option>
                    <option value="3">Level-3</option>
                  </select>
                </div>
              </Grid>
              <Grid item md={5}>
                <div className="text_filed_heading pl-1 ">Question Type *</div>
                <div className=" mt-1 mr-2">
                  <select class="custom-select custom-select-md mb-3">
                    <option selected>Select</option>
                    <option value="1">Long Question</option>
                    <option value="2">Short Question</option>
                    <option value="3">Level-3Multiplication (MCQs)</option>
                  </select>
                </div>
              </Grid>

              <Grid item md={2}>
                <button type="button" class="btn btn-info mt-4 ml-3">
                  Submit
                </button>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              className="button_formatting"
              onClick={() => setEditDailogOpen(!EditDailogOpen)}
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default HOC(Create_heading);

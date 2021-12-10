import React, { Component, PropTypes, useState, useEffect } from "react";
import HOC from "../../Common/HOC";
import { Grid, Card } from "@material-ui/core";
import RichTextEditor from "react-rte-17";
import { useNavigate } from "react-router";

const Question_create = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [rte, setrte] = useState(RichTextEditor.createEmptyValue());
  let navigate = useNavigate();
  const onChange = (value) => {
    setrte(value);
    if (props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      props.onChange(value.toString("html"));
    }
  };

  return (
    <>
      <div className="content_padding_component">
        <nav aria-label="breadcrumb">
          <div className="content_width">
            <Grid className="Component_main_grid">
              <Grid item md={12}>
                <div className="level_content">
                  <h2 className="pl-5 py-3">Question Entry</h2>
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

        <div className="typeclass_main  my-4">
          <Card className="p-4">
            <Grid className="Component_main_grid">
              <Grid item md={3}>
                <div className="text_filed_heading pl-1 ">Chapter *</div>
                <div className=" mt-1 mr-2">
                  <select class="custom-select custom-select-md mb-3">
                    <option selected>Select</option>
                    <option value="1">Chapter-1</option>
                    <option value="2">Chapter-2</option>
                    <option value="3">Chapter-3</option>
                  </select>
                </div>
              </Grid>
              <Grid item md={3}>
                <div className="text_filed_heading pl-1 ">Level *</div>
                <div className=" mt-1 mr-2">
                  <select class="custom-select custom-select-md mb-3">
                    <option selected>Select</option>
                    <option value="1">Chapter-1</option>
                    <option value="2">Chapter-2</option>
                    <option value="3">Chapter-3</option>
                  </select>
                </div>
              </Grid>
              <Grid item md={3}>
                <div className="text_filed_heading pl-1 ">Question Type *</div>
                <div className=" mt-1 mr-2">
                  <select class="custom-select custom-select-md mb-3">
                    <option selected>Select</option>
                    <option value="1">Chapter-1</option>
                    <option value="2">Chapter-2</option>
                    <option value="3">Chapter-3</option>
                  </select>
                </div>
              </Grid>
              <Grid item md={3}>
                <div className="text_filed_heading pl-1 ">Book Name *</div>
                <div className=" mt-1 mr-2">
                  <select class="custom-select custom-select-md mb-3">
                    <option selected>Select</option>
                    <option value="1">Chapter-1</option>
                    <option value="2">Chapter-2</option>
                    <option value="3">Chapter-3</option>
                  </select>
                </div>
              </Grid>
            </Grid>
          </Card>
          <div>
            <span>
              <h6 className="mt-3">Question *</h6>
            </span>
          </div>
          <RichTextEditor
            value={rte}
            className="employment_jobdescribee"
            onChange={onChange}
          />

          <div>
            <span>
              <h6 className="mt-3">Solution *</h6>
            </span>
          </div>
          <RichTextEditor
            value={rte}
            className="employment_jobdescribee"
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
};

export default HOC(Question_create);

import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Button, Card, TextField } from "@material-ui/core";
// import axios from "axios";

//import css
import "./AdminLogin.css";

const Resetpassword = (props) => {
  let navigate = useNavigate();
  return (
    <div>
      <div className="admin_card">
        <h5 className="font_change ml-2 mb-4">
          <i class="fa fa-lock"></i> Please enter your OTP.
        </h5>
        <Card className="card_shadow">
          <TextField
            id="standard-password-input"
            className="email_field m-3"
            label="Email Id"
            type="text"
            autoComplete="Enter Email"
          />
          <TextField
            id="standard-password-input"
            className="email_field m-3"
            label="Enter OTP"
            type="text"
            autoComplete="off"
          />
          <TextField
            id="standard-password-input"
            className="email_field m-3"
            label="Enter New Password"
            type="text"
            autoComplete="off"
          />
          <br />

          {/* <span className="forgot_pass ml-3">Forgotten Password</span> */}
          <br />
          <span className="text-center mt-2">
            <Button
              color="primary"
              className="login_btn text-centre ml-2 mt-2 mb-3 mt-3"
              onClick={() => navigate("/dashboard")}
            >
              Verify
            </Button>
          </span>
        </Card>
      </div>
    </div>
  );
};

export default Resetpassword;

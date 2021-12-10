import React, { useEffect, useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
//material ui appbar
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useNavigate } from "react-router";

//css file
import "./Header.css";

import { height, width } from "@mui/system";

//import image

const Header = (props) => {
  let navigate = useNavigate();
  /*local state */
  const [Sidebar, setSidebar] = useState(false);
  // const [count, setCount] = useState(1);

  // console.log(count);

  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  //   setCount((prev) => prev + 1);
  // }, []);

  /*function to open a sidebar */
  // const setLoadingnewside = () => {
  //   document.getElementById("mySidenav").style.transform =
  //     "translate3d(-100%,0,0)";
  //   setSidebar(true);
  // };

  // /*function to close a sidebar */
  // const Closesidebar = () => {
  //   document.getElementById("mySidenav").style.transform = "translate3d(0,0,0)";
  //   setSidebar(false);
  // };
  return (
    <div className="topheader">
      <AppBar position="fixed" className="MainHeader">
        <Toolbar className="header_padding">
          <div className="d-flex">
            <span className="toggle_button_sidebar mt-2">
              <i
                class="fa fa-bars mr-2"
                onClick={() => {
                  props.setLoading();
                }}
              ></i>
            </span>
            <span className=" mt-2">Test Generator</span>
          </div>

          <div className="header_grow" />
          <div className="header_links">
            <span className="header_link_color" onClick={() => navigate("/")}>
              Home
            </span>

            <span
              className="header_link_color"
              //   onClick={() => navigate("/login")}
            >
              Login
            </span>
          </div>

          <div className="mobile_Burger_Menu">
            <span
              className="logout_Pointer_cursor mr-3 text-right mt-2"
              onClick={() => {
                setSidebar((prev) => !prev);
              }}
              style={{ zIndex: "100" }}
            >
              <i class="fa fa-bars"></i>
            </span>

            {/* <div id="mySidenav" className="sidenav"> */}
            {/* <div className="cross_icon_style">
                <i
                  class="fa fa-times cursor"
                  onClick={() => {
                    document.getElementById("mySidenav").style.width = "0px";
                    setSidebar(false);
                  }}
                ></i>
              </div> */}

            <ProSidebar
              id="mySidenav"
              className="sidenav"
              style={{
                transition: "ease 500ms",
                marginTop: "54px",
                transform: `translate3d(${Sidebar ? "0%" : "-100%"},0,0)`,
                paddingTop: "0px",
              }}
            >
              <Menu iconShape="square">
                <MenuItem onClick={() => navigate("/dashboard")}>
                  Dashboard
                </MenuItem>
                <SubMenu title="Master">
                  <MenuItem
                    onClick={() => {
                      setSidebar((prev) => !prev);
                      navigate("/createLevel");
                    }}
                  >
                    Create Level
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSidebar((prev) => !prev);
                      navigate("/question_Type");
                    }}
                  >
                    Create Question Type
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSidebar((prev) => !prev);
                      navigate("/Bookname");
                    }}
                  >
                    Create Book Name
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSidebar((prev) => !prev);
                      navigate("/create_heading");
                    }}
                  >
                    Create Heading Name
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSidebar((prev) => !prev);
                      navigate("/chapter_Name");
                    }}
                  >
                    {" "}
                    Create Chapter Name
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      setSidebar((prev) => !prev);
                      navigate("/QuestionCreate");
                    }}
                  >
                    {" "}
                    Create Question Entry
                  </MenuItem>
                </SubMenu>
                <SubMenu title="Genrate Paper">
                  <MenuItem
                    onClick={() => {
                      setSidebar((prev) => !prev);
                      navigate("/genratePaper");
                    }}
                  >
                    Genrate Paper
                  </MenuItem>
                </SubMenu>
                <SubMenu title="Paper List">
                  <MenuItem
                    onClick={() => {
                      setSidebar((prev) => !prev);
                      navigate("/paperList");
                    }}
                  >
                    Paper List
                  </MenuItem>
                </SubMenu>
                <SubMenu title="Logout">
                  <MenuItem>Logout</MenuItem>
                </SubMenu>
              </Menu>
            </ProSidebar>
            {/* </div> */}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

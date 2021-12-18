import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import React from "react";
import "react-pro-sidebar/dist/css/styles.css";
import { useNavigate } from "react-router";
import {
  faFile,
  faLaptopHouse,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sidebar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Sidebar = (props) => {
  let navigate = useNavigate();
  return (
    <>
      <div className="sidebar_in_mobile_view sidebar_class">
        <ProSidebar collapsed={props.isloading}>
          <Menu iconShape="circle">
            <MenuItem
              icon={<FontAwesomeIcon icon={faLaptopHouse} />}
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </MenuItem>

            <SubMenu
              title="Add Category"
              icon={<FontAwesomeIcon icon={faPeopleArrows} />}
            >
              <MenuItem onClick={() => navigate("/medium")}>
                Add Medium
              </MenuItem>
              <MenuItem onClick={() => navigate("/board")}>Add Board</MenuItem>
              <MenuItem onClick={() => navigate("/grade")}>Add Grade</MenuItem>
              <MenuItem onClick={() => navigate("/topics")}>
                Add Topics
              </MenuItem>
              <MenuItem onClick={() => navigate("/Course")}>
                Add Course
              </MenuItem>
            </SubMenu>

            <SubMenu
              title="Master"
              icon={<FontAwesomeIcon icon={faPeopleArrows} />}
            >
              <MenuItem onClick={() => navigate("/createLevel")}>
                Create Level
              </MenuItem>

              <MenuItem onClick={() => navigate("/question_Type")}>
                Create Question Type
              </MenuItem>

              <MenuItem onClick={() => navigate("/Bookname")}>
                Create Book Name
              </MenuItem>
              <MenuItem onClick={() => navigate("/create_heading")}>
                Create Heading Name
              </MenuItem>
              <MenuItem onClick={() => navigate("/chapter_Name")}>
                Create Chapter Name
              </MenuItem>
              <MenuItem onClick={() => navigate("/QuestionCreate")}>
                Create Question Entry
              </MenuItem>
            </SubMenu>
            <MenuItem
              icon={<FontAwesomeIcon icon={faFile} />}
              onClick={() => navigate("/genratePaper")}
            >
              Genrate Paper
            </MenuItem>

            <MenuItem
              icon={<FontAwesomeIcon icon={faFile} />}
              onClick={() => navigate("/paperList")}
            >
              Paper List
            </MenuItem>

            <MenuItem icon={<FontAwesomeIcon icon={faPeopleArrows} />}>
              Logout
            </MenuItem>
          </Menu>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;

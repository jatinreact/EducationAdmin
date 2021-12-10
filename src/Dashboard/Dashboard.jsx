import React, { useEffect } from "react";
import HOC from "../Common/HOC.jsx";
import "../Dashboard/dashboard.css";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="content_padding_component">
        <nav aria-label="breadcrumb">
          <div className="content_width">
            <h2 className="dashboard">Dashboard</h2>
          </div>
        </nav>
        <div>
          <h3 className="text-center mt-5">
            Welcome to Test_Generator Admin Panel
          </h3>
        </div>
      </div>
    </>
  );
}

export default HOC(Home);

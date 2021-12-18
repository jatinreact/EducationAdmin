import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import CreateLevel from "./Components/CreateLevel/CreateLevel";
import Question_Type from "./Components/Question_Type/Question_Type";
import CreateBookname from "./Components/CreateBookname/CreateBookname";
import Create_heading from "./Components/Create_heading/Create_heading";
import Chapter_Name from "./Components/Chapter_Name/Chapter_Name";
import Question_create from "./Components/Question_create/Question_create";
import GenratePaper from "./Components/GenratePaper/GenratePaper";
import PaperList from "./Components/PaperList/PaperList";
import AdminLogin from "./Components/AdminLogin/AdminLogin";
import EmailVerify from "./Components/AdminLogin/EmailVerify";
import Resetpassword from "./Components/AdminLogin/Resetpassword";
import Medium from "./Components/Pages/Medium/Medium";
import Board from "./Components/Pages/Board";
import Grade from "./Components/Pages/Grade";
import Topics from "./Components/Pages/Topics";
import Course from "./Components/Pages/Course";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="/createLevel" element={<CreateLevel />} />
        <Route path="/question_Type" element={<Question_Type />} />
        <Route path="/Bookname" element={<CreateBookname />} />
        <Route path="/create_heading" element={<Create_heading />} />
        <Route path="/chapter_Name" element={<Chapter_Name />} />
        <Route path="/QuestionCreate" element={<Question_create />} />
        <Route path="/genratePaper" element={<GenratePaper />} />
        <Route path="/paperList" element={<PaperList />} />
        <Route path="/" element={<AdminLogin />} />
        <Route path="/emailVerify" element={<EmailVerify />} />
        <Route path="/resetpassword" element={<Resetpassword />} />
        <Route path="/medium" element={<Medium />} />
        <Route path="/board" element={<Board />} />
        <Route path="/grade" element={<Grade />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/Course" element={<Course />} />
      </Routes>
    </>
  );
}

export default App;

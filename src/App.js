import "./App.css";
import Home from "./components/home/home";
import Sidebar from "./components/sidebar/sidebar";
import { HashRouter, Routes, Route } from "react-router-dom";
import JavascriptQA from "./components/js/javascript-qa";
import ReactInterviewQuestions from "./components/react/react";
import AngularInterviewQuestions from "./components/angular/angular-component";

function App() {
  return (
    <HashRouter>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 sidebar-wrapper">
            <Sidebar></Sidebar>
          </div>
          <div className="col-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Javascript" element={<JavascriptQA />} />
              <Route path="/Angular" element={<AngularInterviewQuestions />} />
              <Route path="/React" element={<ReactInterviewQuestions />} />
            </Routes>
          </div>
        </div>
        <div className="links-wrapper">
          <div className="row">
            <div className="col-4">
              <ul>
                <li><a href="https://interviewguru.github.io/#/React"> Top 10 React Interview Questions</a></li>
                <li><a href="https://interviewguru.github.io/#/Angular"> Top 10 Angular Interview Questions</a></li>
                <li><a href="https://interviewguru.github.io/#/Javascript"> Top 10 Javascript Interview Questions</a></li>
                <li><a href="https://interviewguru.github.io/#/HTML"> Top 10 HTML Interview Questions</a></li>
                <li><a href="https://interviewguru.github.io/#/CSS"> Top 10 CSS Interview Questions</a></li>
                <li><a href="https://interviewguru.github.io/#/Vue JS"> Top 10 Vue JS Interview Questions</a></li>
                <li><a href="https://interviewguru.github.io/#/Flutter"> Top 10 Flutter Interview Questions</a></li>
              </ul>
              </div>
          </div>
          <div className="row">
          <div className="footer">© 2024 Interview Guru</div>
          </div>
        </div>
       
      </div>
    </HashRouter>
  );
}

export default App;

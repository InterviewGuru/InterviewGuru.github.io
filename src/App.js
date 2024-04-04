import "./App.css";
import Home from "./components/home/home";
import Sidebar from "./components/sidebar/sidebar";
import { HashRouter, Routes, Route } from "react-router-dom";
import JavascriptQA from "./components/js/javascript-qa";
import ReactInterviewQuestions from "./components/react/react";

function App() {
  return (
    <HashRouter>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar></Sidebar>
          </div>
          <div className="col-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Javascript" element={<JavascriptQA />} />
              <Route path="/React" element={<ReactInterviewQuestions />} />
            </Routes>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;

import "./App.css";
import Home from "./components/home/home";
import Sidebar from "./components/sidebar/sidebar";
import { HashRouter, Routes, Route } from "react-router-dom";
import HtmlTemplate from "./components/front-end/html/html-template";
import ReactTemplate from "./components/front-end/react/react-template";
import IonicTemplate from "./components/front-end/ionic/ionic-template";
import CSSTemplate from "./components/front-end/css/css-template";
import JavascriptTemplate from "./components/front-end/javascript/javascript-template";
import AngularTemplate from "./components/front-end/angular/angular-template";
import ReactNativeTemplate from "./components/front-end/react-native/react-native-template";
import FlutterTemplate from "./components/front-end/flutter/flutter-template";
import VueJsTemplate from "./components/front-end/vuejs/vuejs-template";
import CSharpTemplate from "./components/back-end/csharp/csharp-template";
import AzureTemplate from "./components/cloud/azure/azure";

function App() {
  return (
    <HashRouter>
      <div className="container-fluid">
        <div className="row main">
          <div className="col-2 sidebar-wrapper">
            <Sidebar></Sidebar>
          </div>
          <div className="col-8 main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/javascript-interview-questions-and-answers" element={<JavascriptTemplate />} />
              <Route path="/html-interview-questions-and-answers" element={<HtmlTemplate />} />
              <Route path="/css-interview-questions-and-answers" element={<CSSTemplate />} />
              <Route path="/angular-interview-questions-and-answers" element={<AngularTemplate />} />
              <Route path="/react-interview-questions-and-answers" element={<ReactTemplate />} />
              <Route path="/vuejs-interview-questions-and-answers" element={<VueJsTemplate />} />
              <Route path="/flutter-interview-questions-and-answers" element={<FlutterTemplate />} />
              <Route path="/react-native-interview-questions-and-answers" element={<ReactNativeTemplate />} />
              <Route path="/ionic-interview-questions-and-answers" element={<IonicTemplate />} />
              <Route path="/csharp-interview-questions-and-answers" element={<CSharpTemplate />} />
              <Route path="/azure-interview-questions-and-answers" element={<AzureTemplate />} />
            </Routes>
          </div>
        </div>
        <div className="links-wrapper">
          <div className="row">
            <div className="col-4 footer-top-section">
              <ul>
                <li><a href="https://www.techschool.in//#/react-interview-questions-and-answers"> Top 10 React Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/javascript-interview-questions-and-answers"> Top 10 Javascript Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/html-interview-questions-and-answers"> Top 10 HTML Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/css-interview-questions-and-answers"> Top 10 CSS Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/angular-interview-questions-and-answers"> Top 10 Angular Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/vuejs-interview-questions-and-answers"> Top 10 Vue JS Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/flutter-interview-questions-and-answers"> Top 10 Flutter Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/react-native-interview-questions-and-answers"> Top 10 React Native Interview Questions</a></li>
                <li><a href="https://www.techschool.in//#/ionic-interview-questions-and-answers"> Top 10 Ionic Interview Questions</a></li>
              </ul>
              </div>
          </div>
          <div className="row">
          <div className="footer">©techschool.in 2025</div>
          </div>
        </div>
       
      </div>
    </HashRouter>
  );
}

export default App;

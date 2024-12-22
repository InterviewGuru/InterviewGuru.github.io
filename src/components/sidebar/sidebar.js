import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="logo">
        <div className="logo-text"> &lt;tech-school/&gt;</div>
        <div className="hide-in-mobile"> <img alt="logo" src="../images/logo/tech-school.png"></img></div>
      </div>
      <div id="toggle-btn" onClick={handleToggle}>
        <i class="bi bi-list"></i> Menu
      </div>
      <div
        id="sidebar"
        className={isSidebarOpen ? 'sidebar open' : 'sidebar'}
      >
        <ul>
          <li className="link-header">Front-End Interview</li>
          <li onClick={handleToggle}>
            <Link to="/javascript-interview-questions-and-answers">
              Javascript <span>(5)</span>
            </Link>
          </li>
          <li onClick={handleToggle}>
            <Link to="/html-interview-questions-and-answers">
              HTML <span>(5)</span>
            </Link>
          </li>
          <li onClick={handleToggle}>
            <Link to="/css-interview-questions-and-answers">
              CSS <span>(5)</span>
            </Link>
          </li>
          <li onClick={handleToggle}>
            <Link to="/angular-interview-questions-and-answers">
              Angular <span>(5)</span>
            </Link>
          </li>
          <li onClick={handleToggle}>
            <Link to="/react-interview-questions-and-answers">
              React <span>(9)</span>
            </Link>
          </li>
          <li onClick={handleToggle}>
            <Link to="/vuejs-interview-questions-and-answers">
              Vue JS <span>(5)</span>
            </Link>
          </li>
          <li onClick={handleToggle}>
            <Link to="/flutter-interview-questions-and-answers">
              Flutter <span>(5)</span>
            </Link>
          </li>
          <li onClick={handleToggle}>
            <Link to="/react-native-interview-questions-and-answers">
              React Native <span>(5)</span>
            </Link>
          </li>
          <li onClick={handleToggle}>
            <Link to="/ionic-interview-questions-and-answers">
              Ionic <span>(5)</span>
            </Link>
          </li>
          <li className="link-header">BackEnd</li>
          <li onClick={handleToggle}>
            <Link to="/Node">
              Node <span>(5)</span>
            </Link>
          </li>
          <li onClick={handleToggle}>
            <Link to="/Express">
              Express <span>(5)</span>
            </Link>
          </li>
          <li onClick={handleToggle}>
            <Link to="/MongoDB">
              MongoDB <span>(5)</span>
            </Link>
          </li>
          <li className="link-header">Cloud</li>
          <li onClick={handleToggle}>
            <Link to="/Azure">
              Azure <span>(5)</span>
            </Link>
          </li>
          <li onClick={handleToggle}>
            <Link to="/AWS">
              AWS <span>(5)</span>
            </Link>
          </li>
          <li onClick={handleToggle}>
            <Link to="/Google-cloud">
              Google Cloud <span>(5)</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

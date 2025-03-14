import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AppContext } from "../shared/contexts/AppProvider";


export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { totalQuestions, setTotalQuestions } = useContext(AppContext);

  const handleToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="logo">
          <NavLink to="/">
            <div className="logo-wrapper">
              <div className="logo-tech"> <i className="bi bi-laptop"></i> TECH</div>
              <div className="logo-school">SCHOOL</div>
            </div></NavLink>
      </div>
      <div id="toggle-btn" onClick={handleToggle}>
        <i className="bi bi-list"></i> Menu
      </div>
      <div
        id="sidebar"
        className={isSidebarOpen ? 'sidebar open' : 'sidebar'}
      >
        <ul>
          <li className="link-header">Front-End</li>
          <li onClick={handleToggle}>
            <NavLink to="/javascript-interview-questions-and-answers">
              Javascript <span>({totalQuestions.javascript})</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink to="/html-interview-questions-and-answers">
              HTML <span>({totalQuestions.html})</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink to="/css-interview-questions-and-answers">
              CSS <span>({totalQuestions.css})</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink to="/angular-interview-questions-and-answers">
              Angular <span>({totalQuestions.angular})</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink to="/react-interview-questions-and-answers">
              React <span>({totalQuestions.react})</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink to="/vuejs-interview-questions-and-answers">
              Vue JS <span>({totalQuestions.vuejs})</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink to="/flutter-interview-questions-and-answers">
              Flutter <span>({totalQuestions.flutter})</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink to="/react-native-interview-questions-and-answers">
              React Native <span>({totalQuestions.reactNative})</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink to="/ionic-interview-questions-and-answers">
              Ionic <span>({totalQuestions.ionic})</span>
            </NavLink>
          </li>
          <li className="link-header">BackEnd</li>
          <li onClick={handleToggle}>
            <NavLink to="/csharp-interview-questions-and-answers">
              C # <span>({totalQuestions.csharp})</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink to="/dotnetcore-interview-questions-and-answers">
              .NET Core <span>(5)</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink to="/node-interview-questions-and-answers">
              Node <span>(5)</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink to="/express-interview-questions-and-answers">
              Express <span>(5)</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink to="/java-interview-questions-and-answers">
              Java <span>(5)</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink to="/spring-boot-interview-questions-and-answers">
              Spring-boot <span>(5)</span>
            </NavLink>
          </li>
          <li className="link-header">Cloud</li>
          <li onClick={handleToggle}>
            <NavLink to="/azure-interview-questions-and-answers">
              Azure <span>({totalQuestions.azure})</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink to="/AWS">
              AWS <span>(5)</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink to="/Google-cloud">
              Google Cloud <span>(5)</span>
            </NavLink>
          </li>
          <li className="link-header">Database</li>
          <li onClick={handleToggle}>
            <NavLink to="/Azure">
              MySQL <span>(5)</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink to="/AWS">
            PostgreSQL <span>(5)</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink to="/Google-cloud">
            Oracle  <span>(5)</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink to="/Google-cloud">
            MongoDB  <span>(5)</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink to="/Google-cloud">
            Cassandra  <span>(5)</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink to="/Google-cloud">
            DynamoDB  <span>(5)</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink to="/Google-cloud">
            ConsmosDB  <span>(5)</span>
            </NavLink>
          </li>
          <li className="link-header">System Design and Architecture</li>
          <li onClick={handleToggle}>
            <NavLink to="/Azure">
            System Design Interview Questions <span>(5)</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink to="/AWS">
            Design Patterns Interview Questions <span>(5)</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink to="/Google-cloud">
            Microservices Interview Questions <span>(5)</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink to="/Google-cloud">
            REST API Interview Questions <span>(5)</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink to="/Google-cloud">
            CQRS Interview Questions <span>(5)</span>
            </NavLink>
          </li>
          <li onClick={handleToggle}>
            <NavLink to="/Google-cloud">
            Event Sourcing Interview Questions <span>(5)</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

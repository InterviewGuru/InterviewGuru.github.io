// import React, { useContext, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { AppContext } from "../shared/contexts/AppProvider";


// export default function Sidebar() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const { totalQuestions, setTotalQuestions } = useContext(AppContext);

//   const handleToggle = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div>
//       <div className="logo">
//           <NavLink to="/">
//             <div className="logo-wrapper">
//               <div className="logo-tech"> <i className="bi bi-laptop"></i> TECH</div>
//               <div className="logo-school">SCHOOL</div>
//             </div></NavLink>
//       </div>
//       <div id="toggle-btn" onClick={handleToggle}>
//         <i className="bi bi-list"></i> Menu
//       </div>
//       <div
//         id="sidebar"
//         className={isSidebarOpen ? 'sidebar open' : 'sidebar'}
//       >
//         <ul>
//           <li className="link-header">Front-End</li>
//           <li onClick={handleToggle}>
//             <NavLink to="/javascript-interview-questions-and-answers">
//               Javascript <span>({totalQuestions.javascript})</span>
//             </NavLink>
//           </li>
//           <li onClick={handleToggle}>
//             <NavLink to="/html-interview-questions-and-answers">
//               HTML <span>({totalQuestions.html})</span>
//             </NavLink>
//           </li>
//           <li onClick={handleToggle}>
//             <NavLink to="/css-interview-questions-and-answers">
//               CSS <span>({totalQuestions.css})</span>
//             </NavLink>
//           </li>
//           <li onClick={handleToggle}>
//             <NavLink to="/angular-interview-questions-and-answers">
//               Angular <span>({totalQuestions.angular})</span>
//             </NavLink>
//           </li>
//           <li onClick={handleToggle}>
//             <NavLink to="/react-interview-questions-and-answers">
//               React <span>({totalQuestions.react})</span>
//             </NavLink>
//           </li>
//           <li onClick={handleToggle}>
//             <NavLink to="/vuejs-interview-questions-and-answers">
//               Vue JS <span>({totalQuestions.vuejs})</span>
//             </NavLink>
//           </li>
//           <li onClick={handleToggle}>
//             <NavLink to="/flutter-interview-questions-and-answers">
//               Flutter <span>({totalQuestions.flutter})</span>
//             </NavLink>
//           </li>
//           <li onClick={handleToggle}>
//             <NavLink to="/react-native-interview-questions-and-answers">
//               React Native <span>({totalQuestions.reactNative})</span>
//             </NavLink>
//           </li>
//           <li onClick={handleToggle}>
//             <NavLink to="/ionic-interview-questions-and-answers">
//               Ionic <span>({totalQuestions.ionic})</span>
//             </NavLink>
//           </li>
//           <li className="link-header">BackEnd</li>
//           <li onClick={handleToggle}>
//             <NavLink to="/csharp-interview-questions-and-answers">
//               C # <span>({totalQuestions.csharp})</span>
//             </NavLink>
//           </li>
//           <li onClick={handleToggle}>
//             <NavLink to="/dotnetcore-interview-questions-and-answers">
//               .NET Core <span>(5)</span>
//             </NavLink>
//           </li>
//           <li onClick={handleToggle}>
//             <NavLink to="/node-interview-questions-and-answers">
//               Node <span>(5)</span>
//             </NavLink>
//           </li>
//           <li onClick={handleToggle}>
//             <NavLink to="/express-interview-questions-and-answers">
//               Express <span>(5)</span>
//             </NavLink>
//           </li>
//           <li onClick={handleToggle}>
//             <NavLink to="/java-interview-questions-and-answers">
//               Java <span>(5)</span>
//             </NavLink>
//           </li>
//           <li onClick={handleToggle}>
//             <NavLink to="/spring-boot-interview-questions-and-answers">
//               Spring-boot <span>(5)</span>
//             </NavLink>
//           </li>
//           <li className="link-header">Cloud</li>
//           <li onClick={handleToggle}>
//             <NavLink to="/azure-interview-questions-and-answers">
//               Azure <span>({totalQuestions.azure})</span>
//             </NavLink>
//           </li>
//           <li onClick={handleToggle}>
//             <NavLink to="/AWS">
//               AWS <span>(5)</span>
//             </NavLink>
//           </li>
//           <li onClick={handleToggle}>
//             <NavLink to="/Google-cloud">
//               Google Cloud <span>(5)</span>
//             </NavLink>
//           </li>
//           <li className="link-header">Database</li>
//           <li onClick={handleToggle}>
//             <NavLink to="/Azure">
//               MySQL <span>(5)</span>
//             </NavLink>
//           </li>
//           <li onClick={handleToggle}>
//             <NavLink to="/AWS">
//             PostgreSQL <span>(5)</span>
//             </NavLink>
//           </li>
//           <li onClick={handleToggle}>
//             <NavLink to="/Google-cloud">
//             Oracle  <span>(5)</span>
//             </NavLink>
//           </li>
//           <li onClick={handleToggle}>
//             <NavLink to="/Google-cloud">
//             MongoDB  <span>(5)</span>
//             </NavLink>
//           </li>
//           <li onClick={handleToggle}>
//             <NavLink to="/Google-cloud">
//             Cassandra  <span>(5)</span>
//             </NavLink>
//           </li>
//           <li onClick={handleToggle}>
//             <NavLink to="/Google-cloud">
//             DynamoDB  <span>(5)</span>
//             </NavLink>
//           </li>
//           <li onClick={handleToggle}>
//             <NavLink to="/Google-cloud">
//             ConsmosDB  <span>(5)</span>
//             </NavLink>
//           </li>
//           <li className="link-header">System Design and Architecture</li>
//           <li onClick={handleToggle}>
//             <NavLink to="/url-shortening-system-design">
//             URL Shortener System Design
//             </NavLink>
//           </li>
//           <li onClick={handleToggle}>
//             <NavLink to="/Distributed-File-Storage-System-Design">
//             Distributed File Storage System Design
//             </NavLink>
//           </li>
//           <li onClick={handleToggle}>
//             <NavLink to="/e-commerce-platform-design">
//             E Commerce Platform Design
//             </NavLink>
//           </li>
//           <li onClick={handleToggle}>
//             <NavLink to="/real-time-chat-application-system-design">
//             Real-Time Chat Application Design
//             </NavLink>
//           </li>
//           <li onClick={handleToggle}>
//             <NavLink to="/video-streaming-service-design">
//             Video Streaming Service Design
//             </NavLink>
//           </li>
//           <li onClick={handleToggle}>
//             <NavLink to="/social-media-feed-system-design">
//               Social Media Feed System Design
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AppContext } from "../shared/contexts/AppProvider";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { totalQuestions } = useContext(AppContext);
  
  // Track which sections are expanded
  const [expandedSections, setExpandedSections] = useState({
    frontend: true,
    backend: false,
    cloud: true,
    database: false,
    systemDesign: true,
  });

  const handleToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSectionToggle = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],  // Toggle the current section
    }));
  };

  return (
    <div>
      <div className="logo">
        <NavLink to="/">
          <div className="logo-wrapper">
            <div className="logo-tech"><i className="bi bi-laptop"></i> TECH</div>
            <div className="logo-school">SCHOOL</div>
          </div>
        </NavLink>
      </div>
      
      <div id="toggle-btn" onClick={handleToggle}>
        <i className="bi bi-list"></i> Menu
      </div>

      <div id="sidebar" className={isSidebarOpen ? "sidebar open" : "sidebar"}>
        <ul>
          {/* Front-End Section */}
          <li className="link-header" onClick={() => handleSectionToggle("frontend")}>
            Front-End <i className={`bi ${expandedSections.frontend ? "bi-chevron-down" : "bi-chevron-right"}`}></i>
          </li>
          {expandedSections.frontend && (
            <>
              <li><NavLink to="/javascript-interview-questions-and-answers">Javascript <span>({totalQuestions.javascript})</span></NavLink></li>
              <li><NavLink to="/html-interview-questions-and-answers">HTML <span>({totalQuestions.html})</span></NavLink></li>
              <li><NavLink to="/css-interview-questions-and-answers">CSS <span>({totalQuestions.css})</span></NavLink></li>
              <li><NavLink to="/angular-interview-questions-and-answers">Angular <span>({totalQuestions.angular})</span></NavLink></li>
              <li><NavLink to="/react-interview-questions-and-answers">React <span>({totalQuestions.react})</span></NavLink></li>
              <li><NavLink to="/vuejs-interview-questions-and-answers">Vue JS <span>({totalQuestions.vuejs})</span></NavLink></li>
              <li><NavLink to="/flutter-interview-questions-and-answers">Flutter <span>({totalQuestions.flutter})</span></NavLink></li>
              <li><NavLink to="/react-native-interview-questions-and-answers">React Native <span>({totalQuestions.reactNative})</span></NavLink></li>
              <li><NavLink to="/ionic-interview-questions-and-answers">Ionic <span>({totalQuestions.ionic})</span></NavLink></li>
            </>
          )}

          {/* Back-End Section */}
          <li className="link-header" onClick={() => handleSectionToggle("backend")}>
            Back-End <i className={`bi ${expandedSections.backend ? "bi-chevron-down" : "bi-chevron-right"}`}></i>
          </li>
          {expandedSections.backend && (
            <>
              <li><NavLink to="/csharp-interview-questions-and-answers">C# <span>({totalQuestions.csharp})</span></NavLink></li>
              <li><NavLink to="/dotnetcore-interview-questions-and-answers">.NET Core <span>(5)</span></NavLink></li>
              <li><NavLink to="/node-interview-questions-and-answers">Node <span>(5)</span></NavLink></li>
              <li><NavLink to="/express-interview-questions-and-answers">Express <span>(5)</span></NavLink></li>
              <li><NavLink to="/java-interview-questions-and-answers">Java <span>(5)</span></NavLink></li>
              <li><NavLink to="/spring-boot-interview-questions-and-answers">Spring Boot <span>(5)</span></NavLink></li>
            </>
          )}

          {/* Cloud Section */}
          <li className="link-header" onClick={() => handleSectionToggle("cloud")}>
            Cloud <i className={`bi ${expandedSections.cloud ? "bi-chevron-down" : "bi-chevron-right"}`}></i>
          </li>
          {expandedSections.cloud && (
            <>
              <li><NavLink to="/azure-interview-questions-and-answers">Azure <span>({totalQuestions.azure})</span></NavLink></li>
              <li><NavLink to="/AWS">AWS <span>(5)</span></NavLink></li>
              <li><NavLink to="/Google-cloud">Google Cloud <span>(5)</span></NavLink></li>
            </>
          )}

          {/* Database Section */}
          <li className="link-header" onClick={() => handleSectionToggle("database")}>
            Database <i className={`bi ${expandedSections.database ? "bi-chevron-down" : "bi-chevron-right"}`}></i>
          </li>
          {expandedSections.database && (
            <>
              <li><NavLink to="/mysql">MySQL <span>(5)</span></NavLink></li>
              <li><NavLink to="/postgresql">PostgreSQL <span>(5)</span></NavLink></li>
              <li><NavLink to="/oracle">Oracle <span>(5)</span></NavLink></li>
              <li><NavLink to="/mongodb">MongoDB <span>(5)</span></NavLink></li>
              <li><NavLink to="/cassandra">Cassandra <span>(5)</span></NavLink></li>
              <li><NavLink to="/dynamodb">DynamoDB <span>(5)</span></NavLink></li>
              <li><NavLink to="/cosmosdb">CosmosDB <span>(5)</span></NavLink></li>
            </>
          )}

          {/* System Design Section */}
          <li className="link-header" onClick={() => handleSectionToggle("systemDesign")}>
            System Design and Architecture <i className={`bi ${expandedSections.systemDesign ? "bi-chevron-down" : "bi-chevron-right"}`}></i>
          </li>
          {expandedSections.systemDesign && (
            <>
              <li><NavLink to="/url-shortening-system-design">URL Shortener System Design</NavLink></li>
              <li><NavLink to="/Distributed-File-Storage-System-Design">Distributed File Storage System Design</NavLink></li>
              <li><NavLink to="/e-commerce-platform-design">E-Commerce Platform Design</NavLink></li>
              <li><NavLink to="/real-time-chat-application-system-design">Real-Time Chat Application Design</NavLink></li>
              <li><NavLink to="/video-streaming-service-design">Video Streaming Service Design</NavLink></li>
              <li><NavLink to="/social-media-feed-system-design">Social Media Feed System Design</NavLink></li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}


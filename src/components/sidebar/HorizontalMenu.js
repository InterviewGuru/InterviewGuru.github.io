import React from "react";

const HorizontalMenu = () => {
  const menuItems = [
    "Frontend",
    "Backend",
    "Database",
    "Cloud Storage",
    "System Design",
    "Caching",
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <ul className="navbar-nav d-flex flex-row">
          {menuItems.map((item, index) => (
            <li key={index} className="nav-item mx-2">
              <a className="nav-link text-white" href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default HorizontalMenu;

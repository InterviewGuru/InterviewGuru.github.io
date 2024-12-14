import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
      <div className="logo"> <img alt="logo" src="../images/logo/tech-school.png"></img> </div>
      <ul>
        <li className="link-header">Front-End Interview</li>
        <li>
          <Link to="/Javascript">
            Javascript <span>(5)</span>
          </Link>
        </li>
        <li>
          <Link to="/HTML">
            HTML <span>(5)</span>
          </Link>
        </li>
        <li>
          <Link to="/CSS">
            CSS <span>(5)</span>
          </Link>
        </li>
        <li>
          <Link to="/Angular">
            Angular <span>(5)</span>
          </Link>
        </li>
        <li>
          <Link to="/React">
            React <span>(9)</span>
          </Link>
        </li>
        <li>
          <Link to="/Vue JS">
            Vue JS <span>(5)</span>
          </Link>
        </li>
        <li>
          <Link to="/Flutter">
            Flutter <span>(5)</span>
          </Link>
        </li>
        <li>
          <Link to="/ReactNative">
            React Native <span>(5)</span>
          </Link>
        </li>
        <li>
          <Link to="/ReactNative">
            Ionic <span>(5)</span>
          </Link>
        </li>
        <li className="link-header">BackEnd</li>
        <li>
          <Link to="/Node">
            Node <span>(5)</span>
          </Link>
        </li>
        <li>
          <Link to="/Express">
            Express <span>(5)</span>
          </Link>
        </li>
        <li>
          <Link to="/MongoDB">
            MongoDB <span>(5)</span>
          </Link>
        </li>
        <li className="link-header">Cloud</li>
        <li>
          <Link to="/Azure">
            Azure <span>(5)</span>
          </Link>
        </li>
        <li>
          <Link to="/AWS">
            AWS <span>(5)</span>
          </Link>
        </li>
        <li>
          <Link to="/Google-cloud">
            Google Cloud <span>(5)</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

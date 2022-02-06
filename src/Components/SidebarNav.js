import React from "react";
import { Link } from "react-router-dom";
import "./SidebarNav.css";

function SidebarNav() {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/addNewLot" className="nav-link">
              Add New Lot
            </Link>
          </li>
        </ul>

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Report Scrap</span>
        </h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <Link to="/forgingList" className="nav-link">
              <span data-feather="file-text"></span>
              Forging
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <span data-feather="file-text"></span>
              Pressing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <span data-feather="file-text"></span>
              Tapping
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <span data-feather="file-text"></span>
              Wash
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <span data-feather="file-text"></span>
              Vision Scan
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default SidebarNav;

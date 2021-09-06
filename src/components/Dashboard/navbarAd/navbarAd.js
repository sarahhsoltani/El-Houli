import React from 'react'
import {Link} from "react-router-dom"
import { useDispatch} from 'react-redux'
import {logoutUser } from '../../../redux/actions/authentification'
function NavbarAdmin() {
  const dispatch = useDispatch()
  const logout =()=>{
    dispatch (logoutUser())
}
    return (
        <div>
            <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <Link to="/dashboard/home" className="navbar-brand brand-logo mr-5" >
            <img src="/image/logBrand.png" className="mr-2" alt="logo"/></Link>
        <a className="navbar-brand brand-logo-mini" href="hh">
            <img src="/image/newLog.png"  alt="logo"/></a>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
          <span className="icon-menu"></span>
        </button>
        <ul className="navbar-nav mr-lg-2">
          <li className="nav-item nav-search d-none d-lg-block">
            <div className="input-group">
              <div className="input-group-prepend hover-cursor" id="navbar-search-icon">
                <span className="input-group-text" id="search">
                  <i className="icon-search"></i>
                </span>
              </div>
              <input type="text" className="form-control" id="navbar-search-input" placeholder="Search now" aria-label="search" aria-describedby="search"/>
            </div>
          </li>
        </ul>
        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item dropdown">
            <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="vvv" data-toggle="dropdown">
              
              <i className="fas fa-bell fa-1x"></i>
              <span className="count"></span>
            </a>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
              <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
              <a href="hh" className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-success">
                    <i className="ti-info-alt mx-0"></i>
                  </div>
                </div>
               
              </a>
              <a className="dropdown-item preview-item" href="hh">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-warning">
                    <i className="ti-settings mx-0"></i>
                  </div>
                </div>
                <div className="preview-item-content">
                  <h6 className="preview-subject font-weight-normal">Settings</h6>
                  <p className="font-weight-light small-text mb-0 text-muted">
                    Private message
                  </p>
                </div>
              </a>
             
            </div>
          </li>
          <li className="nav-item nav-profile dropdown">
            <a className="nav-link dropdown-toggle" href="bb" data-toggle="dropdown" id="profileDropdown">
            <i className="fas fa-user "></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
              <a className="dropdown-item" href="hh">
                <i className="ti-settings text-primary"></i>
                Settings
              </a>
              <a className="dropdown-item" onClick={logout} href="hh">
                <i className="ti-power-off text-primary"></i>
                
                Logout
              </a>
              
            </div>
          </li>
        
        </ul>
        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
          <span className="icon-menu"></span>
        </button>
      </div>
    </nav>
  
        </div>
    )
}
export default NavbarAdmin
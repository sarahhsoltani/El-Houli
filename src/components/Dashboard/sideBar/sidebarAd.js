import React from 'react'
import  { Link} from "react-router-dom"

const SidebarAd=()=> {
    return (
        <div>
             <nav className="sidebar sidebar-offcanvas " id="sidebar">
        <ul className="nav">
          <Link  to="/dashboard/home" className="nav-item navi">
            <a className="nav-link" href="index.html">
              <i className="icon-grid menu-icon"></i>
              <span className="menu-title"> <i className="fas fa-border-all"></i> Dashboard</span>
            </a>
          </Link>
          <Link to="/dashboard/users" className="nav-item navi">
            <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <i className="icon-layout menu-icon"></i>
              <span className="menu-title"> <i className="fas fa-users"></i> Utilisateurs</span>
              
            </a>
          
          </Link>
          <li className="nav-item navi">
            <Link to="/dashboard/products"  className="nav-link" data-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
              <i className="icon-columns menu-icon"></i>
              <span className="menu-title"> <i className="fab fa-product-hunt"></i> Produits</span>
           
            </Link>
           
          </li>
          <li className="nav-item navi">
            <Link to="/dashboard/commandes"  className="nav-link" data-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
              <i className="icon-bar-graph menu-icon"></i>
              <span className="menu-title"> <i className="fas fa-copyright"></i> Commandes</span>
              <i className="menu-arrow"></i>
            </Link>
           
          </li>
          <Link to="/dashboard/formulaires"  className="nav-item">
            <a className="nav-link" data-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
              <i className="icon-grid-2 menu-icon"></i>
              <span className="menu-title"><i class="fas fa-comment-dots"></i> Messages</span>
            
            </a>
            
          </Link>
        </ul>
      </nav>
        </div>
    )
}
export default SidebarAd
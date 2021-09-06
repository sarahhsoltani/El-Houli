import React from 'react'
import SidebarAd from '../sideBar/sidebarAd'
import "./homeAd.css"
import NavbarAdmin from '../navbarAd/navbarAd'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
 function Dashboard() {
  const users = useSelector((state) => state.userReducer.users)
  const produits = useSelector((state) => state.productReducer.pubs)
console.log(`produits.length`, produits.length)
    return (
        <div>
            <NavbarAdmin/>
       
        <div class="container-fluid page-body-wrapper">

      <div class="theme-setting-wrapper">
        <div id="settings-trigger"><i class="fas fa-cog"></i></div>
        <div id="theme-settings" class="settings-panel">
        <i class="fas fa-cog"></i>
          <p class="settings-heading">SIDEBAR SKINS</p>
          <div class="sidebar-bg-options selected" id="sidebar-light-theme"><div class="img-ss rounded-circle bg-light border mr-3"></div>Light</div>
          <div class="sidebar-bg-options" id="sidebar-dark-theme"><div class="img-ss rounded-circle bg-dark border mr-3"></div>Dark</div>
          <p class="settings-heading mt-2">HEADER SKINS</p>
        
        </div>
      </div>


     <SidebarAd/>
    
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-md-12 grid-margin">
              <div class="row">
                <div class="col-12 col-xl-8 mb-4 mb-xl-0">
                  <h3 class="font-weight-bold">Bienvenue Chez El Houli</h3>
                  <h6 class="font-weight-normal mb-0">All systems are running smoothly! You have <span class="text-primary">3 unread alerts!</span></h6>
                </div>
                <div class="col-12 col-xl-4">
                 <div class="justify-content-end d-flex">
                  <div class="dropdown flex-md-grow-1 flex-xl-grow-0">
                    <button class="btn btn-sm btn-light bg-white dropdown-toggle" type="button" id="dropdownMenuDate2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                     <i class="mdi mdi-calendar"></i> Aujourd'huit (14 septempbre 2021)
                    </button>
                 
                  </div>
                 </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 grid-margin stretch-card">
              
                <div class="card-people mt-auto">
                  <img src="/image/fontt.png" alt="people"/>
                  <div class="weather-info">
                    <div class="d-flex">
                      <div>
                        <h2 class="mb-0 font-weight-normal"><i class="icon-sun mr-2"></i>31<sup>C</sup></h2>
                      </div>
                      <div class="ml-2">
                        <h4 class="location font-weight-normal">Tunis</h4>
                        <h6 class="font-weight-normal">Tunisie</h6>
                      </div>
                    </div>
                  </div>
                </div>
              
            </div>
            <div class="col-md-6 grid-margin transparent">
              <div class="row">
                <div class="col-md-6 mb-4 stretch-card transparent">
                  <Link to="/dashboard/users" class="card card-tale">
                    <div class="card-body">
                      <p class="mb-4">Liste Utilisateurs <i className="fas fa-users ms-4"></i></p>
                     <div className="d-flex ">
                     <p>Total </p>
                      <p class="fs-30 mb-2 nombre ms-4"> {users.length-1} </p>
                     </div>
                     
                    </div>
                  </Link>
                </div>
                <div class="col-md-6 mb-4 stretch-card transparent">
                  <Link to="/dashboard/products" class="card card-dark-blue">
                    <div class="card-body">
                      <p class="mb-4">Liste des produits</p>
                      <div className="d-flex">
                      <p>Total </p>
                      <p class="fs-30 mb-2 ms-4 nombre"> {produits.length}</p>
                      </div>
                      
                    </div>
                  </Link>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 mb-4 mb-lg-0 stretch-card transparent">
                  <Link to="/dashboard/commandes" class="card card-light-blue">
                    <div class="card-body">
                      <p class="mb-4">Nos Commandes</p>
                      <p class="fs-30 mb-2">34040</p>
                      <p>2.00% (30 days)</p>
                    </div>
                  </Link>
                </div>
                <div class="col-md-6 stretch-card transparent">
                  <div class="card card-light-danger">
                    <div class="card-body">
                      <p class="mb-4">Number of Clients</p>
                      <p class="fs-30 mb-2">47033</p>
                      <p>0.22% (30 days)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
        </div>
    
      </div>
  
    </div>
    </div>
    )
}
export default Dashboard
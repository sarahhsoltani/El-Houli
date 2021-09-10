import React,{useEffect} from 'react'
import SidebarAd from '../sideBar/sidebarAd'
import "./homeAd.css"
import NavbarAdmin from '../navbarAd/navbarAd'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { getOrders } from '../../../redux/actions/cart'
import { getAllContacts } from '../../../redux/actions/contact'
 function Dashboard() {
  const users = useSelector((state) => state.userReducer.users)
  const produits = useSelector((state) => state.productReducer.pubs)
  const cards= useSelector((state) => state.addToCards.cards)
  const contact = useSelector((state) => state.contactReducer.datas)

const dispatch = useDispatch()
useEffect(() => {
  dispatch(getOrders())
     }, [dispatch])
  console.log("contact",contact)
  useEffect(() => {
    dispatch(getAllContacts())
       }, [dispatch])
    return (
        <div>
            <NavbarAdmin/>
       
        <div className="container-fluid page-body-wrapper">

      <div className="theme-setting-wrapper">
        <div id="settings-trigger"><i className="fas fa-cog"></i></div>
        <div id="theme-settings" className="settings-panel">
        <i className="fas fa-cog"></i>
          <p className="settings-heading">SIDEBAR SKINS</p>
          <div className="sidebar-bg-options selected" id="sidebar-light-theme"><div className="img-ss rounded-circle bg-light border mr-3"></div>Light</div>
          <div className="sidebar-bg-options" id="sidebar-dark-theme"><div className="img-ss rounded-circle bg-dark border mr-3"></div>Dark</div>
          <p className="settings-heading mt-2">HEADER SKINS</p>
        
        </div>
      </div>


     <SidebarAd/>
    
      <div className="main-panel">
        <div className="content-wrapper">
          <div className="row">
            <div className="col-md-12 grid-margin">
              <div className="row">
                <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                  <h3 className="font-weight-bold">Bienvenue Chez El Houli <i class="fas fa-heart"></i></h3>
                  <h6 className="font-weight-normal mb-0">Des bijoux pour tous les couts fascinaux,originals <span className="text-primary">3 alertes non lues !</span></h6>
                </div>
                <div className="col-12 col-xl-4">
                 <div className="justify-content-end d-flex">
                  <div className="dropdown flex-md-grow-1 flex-xl-grow-0">
                    <button className="btn btn-sm btn-light bg-white dropdown-toggle" type="button" id="dropdownMenuDate2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                     <i className="mdi mdi-calendar"></i> Aujourd'huit (14 septempbre 2021)
                    </button>
                 
                  </div>
                 </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 grid-margin stretch-card">
              
                <div className="card-people mt-auto">
                  <img src="/image/fontt.png" alt="people"/>
                  <div className="weather-info">
                    <div className="d-flex">
                      <div>
                        <h2 className="mb-0 font-weight-normal"><i className="icon-sun mr-2"></i>31<sup>C</sup></h2>
                      </div>
                      <div className="ml-2">
                        <h4 className="location font-weight-normal">Tunis</h4>
                        <h6 className="font-weight-normal">Tunisie</h6>
                      </div>
                    </div>
                  </div>
                </div>
              
            </div>
            <div className="col-md-6 grid-margin transparent">
              <div className="row">
                <div className="col-md-6 mb-4 stretch-card transparent">
                  <Link to="/dashboard/users" className="card card-tale">
                    <div className="card-body">
                      <p className="mb-4"><i className="fas fa-users "></i> Liste Utilisateurs </p>
                     <div className="d-flex ">
                     <p>Total </p>
                      <p className="fs-30 mb-2 nombre ms-4"> {users.length-1} </p>
                     </div>
                     
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 mb-4 stretch-card transparent">
                  <Link to="/dashboard/products" className="card card-dark-blue">
                    <div className="card-body">
                      <p className="mb-4"><i class="fas fa-gem"></i> Liste des produits</p>
                      <div className="d-flex">
                      <p>Total </p>
                      <p className="fs-30 mb-2 ms-4 nombre"> {produits.length}</p>
                      </div>
                      
                    </div>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4 mb-lg-0 stretch-card transparent">
                  <Link to="/dashboard/commandes" className="card card-light-blue">
                    <div className="card-body">
                      <p className="mb-4"><i className="fab fa-accusoft"></i> Nos Commandes</p>
                      <div className="d-flex">
                      <p>Total </p>
                      <p className="fs-30 mb-2 ms-4 nombre"> {cards.length}</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-md-6 stretch-card transparent">
                <Link to="/dashboard/formulaires"className="card card-light-danger">
                    <div className="card-body">
                      <p className="mb-4"> <i class="far fa-inbox-in"></i> Messages</p>
                      <div className="d-flex">
                      <p>Total </p>
                      <p className="fs-30 mb-2 ms-4 nombre"> {contact.length}</p>
                      </div>
                    </div>
                  </Link>
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
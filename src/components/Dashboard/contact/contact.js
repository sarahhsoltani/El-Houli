import React ,{ useEffect }from 'react'
import NavbarAdmin from '../navbarAd/navbarAd'
import SidebarAd from '../sideBar/sidebarAd'
import { useDispatch, useSelector } from 'react-redux'
import {getAllContacts,deleteContact}from "../../../redux/actions/contact"
import Moment from 'react-moment'
import Footer from '../../footer/footer'
export default function ContactAd() {
    const contact = useSelector((state) => state.contactReducer.datas)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAllContacts(),
      
        )
        },[dispatch])
    console.log(`contact`, contact)

    const deleteMessage=(id)=>{
        dispatch(deleteContact(id))
    }
    return (
        <div>
            <NavbarAdmin/>
            <div className="row">
                <div className="col-md-2 mt-5">
                    <SidebarAd/>
                </div>
                
                <div className="col-md-10 d-flex justify-content-around   flex-wrap mt-5">
                
                   {/* {contact.map((el,key)=>(
                         
                         <div className="card text-white bg-light contact-card col-md-7 mb-3 mt-5" key={key._id}>
                         <div className="card-header bg-second">{el.name} {el.lastname}</div>
                         <div className="card-body">
                         <h5 className="card-title">{el.email}</h5>
                         <h4>{el.city} {el.tel}</h4>
                         <p className="card-text">{el.message}</p>
                         </div>
                      </div>
                         ))}  */}
                         
                         {contact.map((el,key)=>(
                      <div className="card col-md-7 mt-5 cardd-contact" key={key}>
                       <div className="d-flex justify-content-between">
                       <p> <i className="fas fa-user"></i> {el.name} {el.lastname}</p>
                       <p><i className="fas fa-location-arrow"></i>  {el.city}</p>
                       </div>
                       <div className="d-flex justify-content-between my-3"> 
                       <p> <i className="fas fa-phone-volume"></i>  {el.tel}</p>
                       <p className="price "><i className="far fa-envelope-open"></i> {el.email} </p>
                        </div>
                        <p>{el.message}</p>
                        <div className="d-flex my-2"><h5 className="envoie ">Envoyé le:</h5> <Moment format="YYYY/MM/DD HH:mm">{el.date}</Moment> </div>
                       <div className="d-flex justify-content-around">
                       <button className="ajout  ">Répondre</button>
                       <button className="supprimer" onClick={() => deleteMessage(el._id)}>supprimer</button>
                       </div>
                     </div>
               
                ))} 
                </div>
            </div>
           
        </div>
    )
}
//   <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
//                         <div class="card-header">{el.name}</div>
//                         <div class="card-body">
//                         <h5 class="card-title">Secondary card title</h5>
//                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         </div>
//                      </div>
import React,{useState} from 'react'
import Header from '../header/header'
import { useDispatch, useSelector } from 'react-redux'
import "./contact.css"
import { addNewContact } from '../../redux/actions/contact'
import Footer from '../footer/footer'
 const  Contact=()=> {
    const [nom, setNom] = useState('')
    const [prénom, setPrénom] = useState('')
    const [ville, setVille] = useState('')
    const [email, setEmail] = useState('')
    const [tel, setTel] = useState('')
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    const addMessage=(e)=>{
         e.preventDefault()
        dispatch(addNewContact(nom, prénom, ville, email, tel, message))
    }
    return (
        <div>
            <Header/>
            <div>
                <div className="row">
                    <div className="col-md-6 col-12 mt-5">
                         <div className="row contact">
                            <div className="col-md-4 mt-5"><h1 className="mt-5">Contacts</h1>
                           {/* <div className="container">
                           <h6 className=" mt-4"> 
                                <h5 className="mt-3"> <i class="fas fa-map-marker-alt"></i> Addresse</h5> <br/>
                                   Rue de Golf Megrine </h6>
                                
                                    <h6 className="addresse mt-4"> 
                                    <h5 className="mt-4"> <i className="fas fa-phone-volume"></i>  téléphonne</h5> <br/>
                                     <br/> +216 705 770</h6>
                                     <h6 className="addresse mt-4"> 
                                      <h5 className="mt-4"> <i className="fas fa-envelope-open-text"></i>   Email</h5> <br/>
                                      <br/> ElHouli@gmail.com</h6>
                           </div> */}
                            </div>
                            <div className="col-md-8"><img className="w-100"  src="https://bijoux.vamtam.com/wp-content/uploads/2020/09/iStock-1153651470-Rings.jpg"/></div>
                         </div>
                    </div>
                    <div className="col-md-6 col-12 mt-5">
                    <form className="pt-3 container " onSubmit={addMessage}  >
                <div className="form-group">
                  <input type="text" name="nom"  value={nom} placeholder="Enter nom" 
                   onChange={(e) => setNom(e.target.value)}
                  className="form-control form-control-lg" placeholder="enter votre nom"/>
                </div>
                <div className="form-group">
                  <input type="text" name="prénom"  value={prénom} 
                    onChange={(e) => setPrénom(e.target.value)}
                  className="form-control form-control-lg"  placeholder="enter votre prénom"/>
                </div>
                <div className="form-group">
                  <input type="text" name="nom"  
                   onChange={(e) => setVille(e.target.value)} value={ville} 
                  className="form-control form-control-lg"  placeholder="enter votre ville"/>
                </div>
                <div className="form-group">
                  <input  type="email" name="nom"  
                   onChange={(e) => setEmail(e.target.value)} value={email} 
                  className="form-control form-control-lg" placeholder="enter votre email"/>
                </div>
                <div className="form-group">
                  <input  type="text" name="nom" 
                   onChange={(e) => setTel(e.target.value)} value={tel} 
                  className="form-control form-control-lg"  placeholder="enter votre numéro de téléphone"/>
                </div>
                <div class="mb-3">
               
                     <textarea class="form-control"  rows="3" value={message}  onChange={(e) => setMessage(e.target.value)} placeholder="enter votre message"></textarea>
                </div>  
                <div className="mt-5">
                  <button type='submit' className="connexion" >Envoyer</button>
                </div>
             
              
              </form>
                   </div>
                  <div className="text-center my-5">
                  <h4>Nous serons heureux de répondre à nos chers clients <i class="far fa-smile"></i></h4>
                   <h5>Nous seront disponible pour répondre à tous vos appels ainsi qu’à vos demandes 24 heures/24, 7jours/7</h5>
                  </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Contact
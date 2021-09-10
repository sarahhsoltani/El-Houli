import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return(
    <footer className="mt-5">
        <div className="col-md-12 p-4">
            <div className="row footer-title">
                <div className="col-md-3">
                    
                    <img src="/image/el.png" alt="log" className="my-4 log-footer"/> 
                    <p className="def">El Houli est une équipe passionée par la création artisanale et traditionnelle des bijoux situé à 24 Rue de Golf Megrine la Perle, Ben Arous, Tunisie TEL:(+216) 24 193 830</p>
                </div>
                <div className="col-md-3">
                    <h4>Informations</h4>
                    <ul>
                        <Link to="/"><li>Acceuil</li></Link>
                        <Link to="/propos"><li>À propos </li></Link>
                        <Link to="/collection"><li>Collections</li></Link>
                        <Link to="/blog"><li>Blog</li></Link>
                        <Link to="/contact"> <li>Contact</li></Link>
                       
                       
                    </ul>
                </div>
                <div className="col-md-3 addresse">
                    <h4>Contact</h4>
                    <h6 className="addresse"> 
                     <h5 className="mt-3"> <i class="fas fa-map-marker-alt"></i> Addresse</h5> <br/>
                    Rue de Golf Megrine </h6>

                  
                    <h6 className="addresse"> 
                    <h5 className="mt-4"> <i className="fas fa-phone-volume"></i>  téléphonne</h5> <br/>
                     <br/> +216 705 770</h6>

                     <h6 className="addresse"> 
                    <h5 className="mt-4"> <i className="fas fa-envelope-open-text"></i>   Email</h5> <br/>
                     <br/> ElHouli@gmail.com</h6>
                    <p className="addresse">  <br/> </p>
                 </div>
                <div className="col-md-3">
                    <h4>Newsletter</h4>
                    <form className='d-flex mb-5 mt-4'>
                      <input   type="text" className="form-control input-footer " />
                      <button className="connexion">S'abonner</button>
                      </form>
                      <div className="col-md-3 col-sm-6 col-6 text-center d-flex ">
                       <p ><i class="fab fa-facebook-f   me-4 footer-icon "></i></p>
                       <p ><i class="fab fa-google-plus-g  me-4 footer-icon "></i></p>
                      <p > <i class="fab fa-youtube  me-4  footer-icon"></i></p>
                     <p > <i class="fab fa-twitter  me-4 footer-icon"></i></p>
                    </div>
                </div>
               
            </div>
            <h5 className="text-center mt-5">Copyright © 2021.:: El Houli ::. Tous droits réservés.</h5>
        </div>
    </footer>
   )

 }

export default Footer
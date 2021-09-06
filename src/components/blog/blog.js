import React from 'react'
import Header from '../header/header'
import "./blog.css"
import {Form} from "react-bootstrap" 
const Blog = () => {
   
   

  return(
    <div>
        <Header/>
        <div className="col-md-12 text-center mt-5">
            <h1 className="blog-title">Blog</h1>
            <h3>Boutique <i class="fas fa-arrow-right mt-3"></i> Blog</h3>
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4">
                    <div className="d-flex">
                    <Form.Control className="mt-5 input-search ms-5 mb-3" type="email" placeholder="Enter email"  />
                    <i class="fal fa-search mt-5 fa-2x searchh" ></i>
                    </div>
                    <h3 >Catégories</h3>
                    <p>Promotions</p>
                    <p>Bon plan</p>
                    <p>védéos</p>
                    <h3>Recent Posts</h3>
                    {/* -----------recent post----------- */}

                    <div className="d-flex container mt-3">
                        
                            <img src="/image/13.jpg " className="w-25 h-25 ms-5 me-3" alt="vvv"/>
                     <div>

                           <h5 className="blog-titre">Blog image </h5>
                            <p className="paragraph"> March 10, 2015</p>
                     </div>
                       
                    </div>
                    {/* ------------------2------------ */}
                    <div className="d-flex container mt-3">
                        
                        <img src="/image/13.jpg " className="w-25 h-25 ms-5 me-3" alt="vvv"/>
                 <div>

                       <h5 className="blog-titre">Blog image </h5>
                        <p className="paragraph"> March 10, 2015</p>
                 </div>
                   
                </div>
                {/* ----------------3------------- */}
                <div className="d-flex container mt-3">
                        
                        <img src="/image/13.jpg " className="w-25 h-25 ms-5 me-3" alt="vvv"/>
                 <div>

                       <h5 className="blog-titre">Blog image </h5>
                        <p className="paragraph"> March 10, 2015</p>
                 </div>
                   
                </div>
                    </div>
                    {/* -------------section one start */}
                    {/* -------------section two start */}
                    <div className="col-md-8">
                        
                    </div>
                </div>

            </div>
        </div>
    </div>
   )

 }

export default Blog
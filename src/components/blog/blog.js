import React from 'react'
import Header from '../header/header'
import "./blog.css"
import {Form} from "react-bootstrap" 
import Footer from '../footer/footer'
const Blog = () => {
   
   

  return(
    <div>
        <Header/>
        <div className="col-md-12 mt-5">
               <div className="text-center">
               <h1 className="blog-title">Blog</h1>
            <h3>Boutique <i class="fas fa-arrow-right mt-3"></i> Blog</h3>
               </div>
            <div className="col-md-12  container">
                <div className="row">
                    <div className="col-md-4">
                    <div className="d-flex">
                    <Form.Control className="mt-5 input-search  mb-3" type="email" placeholder="Enter email"  />
                    <i class="fal fa-search mt-5 fa-2x searchh" ></i>
                    </div>
                    <h3 className="mt-5 " >Catégories</h3>
                    <p className="line">Promotions</p>
                    <p className="line">Bon plan</p>
                    <p className="line">védéos</p>
                    <h3>Recent Posts</h3>
                    {/* -----------recent post----------- */}

                    <div className="d-flex container my-5">
                        
                            <img src="https://habiba.jewelry/wp-content/uploads/2021/05/habiba-jewelleru-la-table-ramadan.jpg-02-450x300.jpg " className="w-25 h-25 me-3" alt="vvv"/>
                     <div>

                           <h5 className="blog-titre">Blog image </h5>
                            <p className="paragraph"> March 10, 2015</p>
                     </div>
                       
                    </div>
                    {/* ------------------2------------ */}
                    <div className="d-flex container mt-3">
                        
                        <img src="https://habiba.jewelry/wp-content/uploads/2021/05/img3.jpeg " className="w-25 h-25  me-3" alt="vvv"/>
                 <div>

                       <h5 className="blog-titre">Blog image </h5>
                        <p className="paragraph"> March 10, 2015</p>
                 </div>
                   
                </div>
                {/* ----------------3------------- */}
                <div className="d-flex container mt-3">
                        
                        <img src="https://habiba.jewelry/wp-content/uploads/2021/05/photo-1-10-1-1536x556.jpg" className="w-25 h-25 me-3" alt="vvv"/>
                 <div>

                       <h5 className="blog-titre">Blog image </h5>
                        <p className="paragraph"> March 10, 2021</p>
                 </div>
                   
                </div>
                    </div>
                    {/* -------------section one start */}
                
                    {/* -------------section two start */}
                    <div className="col-md-8">
                    <div class="small w-100">
	 <article class="recipe">
		<div class="pizza-box">
			<img src="https://habiba.jewelry/wp-content/uploads/2021/05/Pompona-1-1528x1536.png" alt=""/>
		</div>
		<div class="recipe-content">
			<p class="recipe-tags">
				<span class="recipe-tag">Gluten Free</span>
				<span class="recipe-tag">Main dish</span>
			</p>

			<h1 class="recipe-title"><a href="#">Bijoux céremonie de mariage</a></h1>

			<p class="recipe-metadata">
				<span class="recipe-rating">★★★★<span>☆</span></span>
				<span class="recipe-votes">(12 votes)</span>
			</p>

			<p class="recipe-desc mt-3">des bijoux qui vous procurent ce sentiment de distinction Notre passion est de créer des pièces d’exception</p>

			Ils ne vont peut-être pas les porter, <button class="recipe-save mt-4" type="button">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000000"><path d="M 6.0097656 2 C 4.9143111 2 4.0097656 2.9025988 4.0097656 3.9980469 L 4 22 L 12 19 L 20 22 L 20 20.556641 L 20 4 C 20 2.9069372 19.093063 2 18 2 L 6.0097656 2 z M 6.0097656 4 L 18 4 L 18 19.113281 L 12 16.863281 L 6.0019531 19.113281 L 6.0097656 4 z" fill="currentColor"/></svg>
				voir détails
			</button>

		</div>
	</article>
</div>
                    
    {/* ----------------------------- */}
    <div class="small w-100">
	 <article class="recipe">
		<div class="pizza-box">
			<img src="https://habiba.jewelry/wp-content/uploads/2021/05/Agate-1529x1536.png" alt=""/>
		</div>
		<div class="recipe-content">
			<p class="recipe-tags">
				<span class="recipe-tag">Gluten Free</span>
				<span class="recipe-tag">Main dish</span>
			</p>

			<h1 class="recipe-title mt-2"><a href="fff">Idées Cadeaux Femmes</a></h1>

			<p class="recipe-metadata mt-3">
				<span class="recipe-rating">★★★★<span>☆</span></span>
				<span class="recipe-votes">(12 votes)</span>
			</p>

			<p class="recipe-desc">le cadeau peut être livré avec le message personnalisé et les fleurs.
             est une marque de bijoux destinées aux hommes Ils ne vont peut-être pas les porter, mais ils vont certainement les offrir.
            </p>

			<button class="recipe-save mt-5" type="button ">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000000"><path d="M 6.0097656 2 C 4.9143111 2 4.0097656 2.9025988 4.0097656 3.9980469 L 4 22 L 12 19 L 20 22 L 20 20.556641 L 20 4 C 20 2.9069372 19.093063 2 18 2 L 6.0097656 2 z M 6.0097656 4 L 18 4 L 18 19.113281 L 12 16.863281 L 6.0019531 19.113281 L 6.0097656 4 z" fill="currentColor"/></svg>
				voir détails
			</button>

		</div>
	</article>
</div>

{/* ------------------------------- */}
<div class="small w-100">
	 <article class="recipe">
		<div class="pizza-box">
			<img src="https://habiba.jewelry/wp-content/uploads/2021/05/actrice1.jpeg" alt=""/>
		</div>
		<div class="recipe-content">
			<p class="recipe-tags">
				<span class="recipe-tag">Gluten Free</span>
				<span class="recipe-tag">Main dish</span>
			</p>

			<h1 class="recipe-title mt-2"><a href="fff">Idées Cadeaux Femmes</a></h1>

			<p class="recipe-metadata mt-3">
				<span class="recipe-rating">★★★★<span>☆</span></span>
				<span class="recipe-votes">(12 votes)</span>
			</p>

			<p class="recipe-desc">le cadeau peut être livré avec le message personnalisé et les fleurs.
             est une marque de bijoux destinées aux hommes Ils ne vont peut-être pas les porter, mais ils vont certainement les offrir.
            </p>

			<button class="recipe-save mt-5" type="button ">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000000"><path d="M 6.0097656 2 C 4.9143111 2 4.0097656 2.9025988 4.0097656 3.9980469 L 4 22 L 12 19 L 20 22 L 20 20.556641 L 20 4 C 20 2.9069372 19.093063 2 18 2 L 6.0097656 2 z M 6.0097656 4 L 18 4 L 18 19.113281 L 12 16.863281 L 6.0019531 19.113281 L 6.0097656 4 z" fill="currentColor"/></svg>
				voir détails
			</button>

		</div>
	</article>
</div>

                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    </div>
   )

 }

export default Blog
import React ,{useEffect}from 'react'
import Footer from '../footer/footer'
import Header from '../header/header'
import "./home.css"
import { useDispatch, useSelector } from 'react-redux'
import {Card,Button} from "react-bootstrap"
import { Link } from 'react-router-dom'
import { getRecentPubs } from '../../redux/actions/produit'
 function Home() {
    const product = useSelector((state) => state.productReducer.pubs)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRecentPubs())
           }, [dispatch])
        // console.log("products",product)
        
    return (
        <div>
            <Header/>
            <menu>
               {/*********** End Section 2 Navbar  ********/}
                {/* <div className="col-md-12 text-left">
                  
                      <div className="fond text-left">
                         <h1 className="title-one">Des bijous pour tous les couts</h1>
                         <h1 className="title-two">fascinaux,originals</h1>
                         <ul className="pt-3 list">
                            <li><p>Artisanat 100% tunisien</p></li>
                            <li><p>Envoi dans les 24h</p></li>
                            <li><p>Produits de trés haute qualité</p></li>
                            <li><p>Suivi rapproché de nos clients</p></li>
                         </ul>
                         <button className="btn btn-houli mt-3">Profiter & découvrir</button>
                      </div>
                    
                      
                 
                </div> */}
                <div className="col-md-12">
                    <div className='row'>
                        <div className="col-md-7 col-6">
                        <div className=" text-left">

                         <h1 className="title-one">Des bijoux pour tous les couts
                          fascinaux,originals</h1>
                         <ul className="pt-3 list">
                            <li><p>Artisanat 100% tunisien</p></li>
                            <li><p>Envoi dans les 24h</p></li>
                            <li><p>Produits de trés haute qualité</p></li>
                            <li><p>Suivi rapproché de nos clients</p></li>
                         </ul>
                        <Link to="/collection"><button className=" connexion mt-3">Profiter & découvrir</button></Link> 
                      </div>
                        </div>
                        <div className="col-md-5 col-6 ">
                            <img className="w-100" src="/image/chacheya-produit.jpg"/>
                        </div>
                    </div>
                </div>
               {/*********** Start Section 3 menu  ********/}

                    
                <div className="col-md-12 mt-5  text-center">
                    <h1 className="mb-5">Collections</h1>
                <div className="row">
                    <div className="col-md-4">
                    <div >
                        <div class="hovereffect">
                            <img class="img-responsive w-100" src="https://habiba.jewelry/wp-content/uploads/2021/05/Etoile-de-mer--1529x1536.png" alt=""/>
                            <h2>Signature</h2>
                          
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div>
                        <div class="hovereffect">
                            <img class="img-responsive  w-100" src="https://habiba.jewelry/wp-content/uploads/2021/05/Dahlia-1-1528x1536.png" alt=""/>
                            <h2>Cocktails</h2>
                           
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div >
                        <div class="hovereffect">
                            <img class="img-responsive  w-100" src="https://habiba.jewelry/wp-content/uploads/2021/05/Agate-1529x1536.png" alt=""/>
                            <h2>Artisanats du monde</h2>
                            
                        </div>
                    </div>
                    </div>
                </div>
               </div> 


               
               {/***********Start Section 4  **************************/}
               <div className="container ">
                  <div className="col-md-12 mt-4 sol">
                      <div className='text-center mt-5 ' >
                         <h2 className="sold">Solde de 20% sur tous les produits 
                        Nouvelle <br/> collection tendance</h2>
                         <h4>Nous pensons qu'un bon design est toujours de saison</h4>
                         <button className=" connexion acheter mt-4">Acheter maintenant</button>
                      </div>
                  </div>
              
                {/*********** End  Section 4  **************************/}
                {/*********** Start  Section 5  **************************/}
                    <div className="row mt-5">
                       <div className="col-md-4 col-sm-12 col-12 box">
                           <div className="mt-5">
                              <div className="d-flex" >
                                  <h5 className="pencil" > PROMOTIONS</h5>
                                  <i  className="fas fa-pencil-alt ms-5 fa-2x "></i>
                              </div>
                              <div>
                              <p>Sed ut perspiciatis unde omnis iste natu voluptatem accusantium natus error.</p>
                              
                              </div>
                           </div>
                           {/* ---------2----------- */}
                           <div className=" mt-4">
                              <div className="d-flex">
                                  <h5 className="pencil">CADEAUX</h5>
                                  <i className="fab fa-buffer ms-5  fa-2x"></i>
                              </div>
                              <div>
                              <p>Sed ut perspiciatis unde omnis iste natu voluptatem accusantium natus error.</p>
                            
                              </div>
                           </div>
                           {/* --------------3--------- */}
                           <div className=" mt-4">
                              <div className="d-flex">
                                  <h5 className="pencil">DESIGN </h5>
                                  <i className="far fa-box-full ms-5  fa-2x"></i>
                              </div>
                              <div>
                            
                              <p>Sed ut perspiciatis unde omnis iste natu voluptatem accusantium natus error.</p>
                              </div>
                           </div>
                       </div>
                       <div className="col-md-4 col-sm-12 col-12">
                           <img src="/image/hand.png" alt="hand"/>
                       </div>
                       <div className="col-md-4 col-sm-12 col-12 box">
                           <div className=" mt-5">
                              <div className="d-flex">
                              <i className="fas fa-hourglass-half me-4  fa-2x"></i>
                              <h5 className="pencil">POTERIE FAIT MAIN</h5>
                              
                              </div>
                              <div>
                                  
                                  <p>Sed ut perspiciatis unde omnis iste natu voluptatem accusantium natus error.</p>
                              </div>
                             
                           </div>
                           {/* ---------2----------- */}
                           <div className=" mt-4">
                           <div className="d-flex">
                           <i className="far fa-gem fa-2x me-4 "></i>
                              <h5 className="pencil">UNE PENSÉE</h5>
                             
                              
                              </div>
                              <div>
                                  
                                  <p>Sed ut perspiciatis unde omnis iste natu voluptatem accusantium natus error.</p>
                              </div>
                             
                           </div>
                           {/* --------------3--------- */}
                           <div className=" mt-4">
                              <div className="d-flex">
                              <i class="fas fa-heart me-4 fa-2x"></i>
                              <h5 className="pencil"> INTELLECTUELLE</h5>
                             
                              
                             
                              
                              </div>
                              <div>
                                  
                                  <p>Sed ut perspiciatis unde omnis iste natu voluptatem accusantium natus error.</p>
                              </div>
                              
                           </div>
                       </div>
                    </div>
                  {/*********** End  Section 5  **************************/}
                  {/*********** Start  Section 6  **************************/}
                    <div className="text-center nouveauté mb-5">
                        <h1 className="mt-2">Nos Nouveautés</h1>
                        <p> Découvrez nos tous derniers articles
                        Des bijoux & Accessoires <br/> originales avec des prix imbattables</p>
                    </div>
                    
                    <div className="d-flex flex-wrap">
                        {
                              product.map((el,key)=>(
                        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <div class="hovereffect" key={key}>
                          
                                <img className="img-responsive" variant="top"  className="w-75 h-75"  src={el.image} alt=""/>
                                <div className="overlay">
                                    
                                <h2>{el.category}</h2>
                                <Link to={`/produitId/${el._id}`} className="info" >Voir détails</Link>
                                </div>
                                <h4 className="title-col">{el.title}</h4>
                                <h5>  {el.price}.00  د.ت</h5>
                            </div>
                          
                        </div>
                           ))
                        }
                      </div>
                            {/*********** Our Cards *************/}
                        {/* <div className="d-flex">
                        {
                              product.map((el,key)=>(
                                <Card style={{ width: '18rem' }} key={key}>
                                <Card.Img variant="top"  className="w-50 h-50"  src={el.image} />
                                <Card.Body>
                                  <Card.Title>{el.title}</Card.Title>
                                  <Card.Text>
                                    {el.price}
                                  </Card.Text>
                                  <Button variant="primary">Voir détails</Button>
                                </Card.Body>
                              </Card>
                              ))
                          }
                        </div> */}
                  {/*********** End  Section 6  **************************/}
                </div>
                   {/*********** Start  Section 7  **************************/}
                   <div className="box-item text-left mt-5 p-4">
                      <h3>EMBALLAGE SPÉCIAL </h3>
                      <p className="paragg mt-3">Un emballage en bois avec un design authentique qui  <br/>  pourrait êtreréutiliser pour vos accessoires et bijoux</p>
                      <button className=" connexion mt-3 ">Exploiter nos produits</button>
                  </div>
                  {/*********** End  Section 7  **************************/}
                  {/*********** Start  Section 8  **************************/}
                   <div className="row mt-5 section-eight">
                       <div className="col-md-7 col-sm-6 col-6 photo-women">
                          <img className="p w-75" src="/image/2.jpg" alt="hand"/> 
                       </div>
                       <div className="col-md-5 col-sm-6 col-6 mt-5 text-center">
                          <h1 className="mt-3">Antique <br/> Colliers de diamants</h1>
                          <h6>belles couleurs. Excellente qualité.</h6>  
                          <button className=" connexion px-5 ">Découvrir</button>
                       </div>
                    </div>
                  {/*********** End  Section 8 **************************/}
                     {/*********** Start  Section 9  **************************/}
                     <div className="row mt-5 section-eight">
                        <div className="col-md-5 col-sm-6 col-6 mt-5">
                           <h1 className="match">Match parfait pour chaque occasion...</h1>
                           <h6>Coordonner avec d'autres pièces de la collection pour un look classique.</h6>
                           <button className="connexion px-5">Découvrir</button>
                       </div>
                       <div className="col-md-7 col-sm-6 col-6 photo-women">
                           <img className="p w-75" src="/image/1.jpg" alt="hand"/> 
                       </div>
                     
                    </div>
                  {/*********** End  Section 9 **************************/}
                   {/*********** Start  Section 10  **************************/}
                   <div className="mt-5 text-center coup">
                       <h1>Coups De <i className="fas fa-heart mb-3"></i>  L'houli</h1>
                       <p>Inspiré par notre vie multiethnique,nous créons des bijoux fins pour partager <br/> nos merveilleuses histoires…</p>
                   </div>
                   <div className="section-ten mt-5">
                      <div className='row'>
                         <div className="col-md-5 col-sm-6 col-6">
                            <img src="/image/4.jpg" alt="collection"/>
                         </div>
                         <div className="col-md-7 col-sm-6 col-6"> 
                            <img  src="/image/5.png" className="w-50 img-five " alt="collection"/>
                            <h2 className="collection-title">Collection de bijoux anciens</h2>
                            <ul className="d-flex text-center ms-5 mt-4">
                                <li>Léger </li>
                                <li className="ms-5">Or 14 carats    </li>
                                <li className="ms-5"> Opale</li>
                            </ul>
                            <button className="connexion ms-5 px-5 mt-4">profiter</button>
                         </div>
                      </div>
                   </div>
                  {/*********** End  Section 10 **************************/}
                  {/*********** Start  Section 11 **************************/}
                  <div className="section-eleven mt-5 text-center pt-5 mb-3">
                      <h6>Inscrivez vous à notre Newsletter</h6>
                      <h2 className="mt-3">ET RECEVEZ DES COUPONS DE RÉDUCTION</h2>
                      <form className='d-flex mb-5 mt-3 ms-5'>
                      <input  type="text" className="form-control ms-6 " />
                      <button className="connexion">S'abonner</button>
                      </form>
                      <p>* Offre valable dans la limite des stocks disponibles</p>

                  </div>
                  {/*********** End  Section 11 **************************/}
                  {/*********** Start  Section 12 **************************/}
                  <div className="section-twelve mt-5 text-center ">
                      <h1>Nos atouts</h1>
                      <div className="row mt-5">
                          <div className="col-md-3 col-sm-6 col-6">
                             
                                  <p ><i class="fas fa-history fa-2x icons"></i></p>
                                    <h5 className="serv mt-3">LIVRAISON RAPIDE</h5>
                                     <p> En 48 à 72 H dans toute la Tunisie</p>
                              
                          </div>
                          {/* ---------- 2 ------------- */}
                        <div className="col-md-3 col-sm-6 col-6">
                                  
                             <p ><i class="fas fa-truck fa-2x icons"></i></p>
                             <h5 className="serv mt-3">LIVRAISON GRATUITE</h5>
                             <p> Dès 200 DT d'achat partout en Tunisie</p>
                        </div>
                          {/*------------- 3 --------------*/}
                          <div className="col-md-3 col-sm-6 col-6">
                             <p><i class="fas fa-lock fa-2x icons"></i></p>                           
                             <h5 className="serv mt-3">PAIEMENT SÉCURISÉ</h5>
                              <p> Paiement monétique Tunisie ou à la livraison</p>
                                
                          </div>
                          {/*-------------4 --------------- */}
                          <div className="col-md-3 col-sm-6 col-6">
                         
                              <p><i class="fas fa-phone-volume fa-2x icons"></i></p>
                              <h5 className="serv mt-3">SERVICE CLIENT</h5>
                              <p> Support par Email ou par téléphone</p>
                        
                      </div>
                  </div>
                  </div>
                  {/*********** End  Section 12 **************************/}
         </menu>
         <Footer/>
        </div>
    )
}
export default Home
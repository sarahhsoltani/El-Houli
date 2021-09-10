import React from 'react'
import Header from '../header/header'
import "./propos.css"
import Footer from "../footer/footer"
import {ProgressBar,Carousel,Button,Card,Form} from "react-bootstrap" 
import Text from '../home/text'
const Propos = () => {
  return(
    <div>
        <Header/>
        <div className="col-md-12 ">
            <div className="propos pt-5">
              <Text className="item-two " />
                {/* <h4 className="item-one ms-5 ">Nous faisons des choses avec amour</h4> */}
                <h1 className="item-two ms-5 mt-4  ">Notre histoire </h1>
            </div>
            <div className="container text-center">
            <h6 className="item-three mt-5">Boutique <i class="far fa-arrow-right"></i>  Historique</h6>
            <div className="row mt-5">
                <div className="col-md-3 col-sm-12 col-12 allt">
                  
                </div>
                <div className="col-md-6 col-sm-12 col-12 text-center">
                    <h2>Qui Sommes Nous?</h2>
                    <p className="para">El HOuli est un site de vente en ligne en Tunisie d'articles de très haute qualité de l'artisanat Tunisien.
                     Tous nos articles mis en vente, en ligne ou dans nos boutiques, sont faits a la main avec 
                     des matières et des tissus qui nous arrivent des habits de nos ancêtres et de notre 
                     patrimoine si riche et si différent d'une région a l'autre.</p>
                </div>
                <div className="col-md-3 col-sm-12 col-12 back">

                </div>
            </div>
            </div>
            {/* ------------Start Section 3  --------------*/}
            <div className="container text-center mt-5">
                <h2> <i class="fas fa-trophy-alt"></i> Challenges Réussis</h2>
                <div className=" mt-5 section-five ">
                    <div className="row text-center mb-3 pt-3">
                        <div className="col-md-4 col-sm-3 col-3  ">
                            <h1 className="stats">100%</h1>
                            <p>Clients satisfaits</p>
                        </div>
                        <div className="col-md-4 col-sm-3 col-3">
                            <h1 className="stats">+300</h1>
                            <p>Produits</p>
                        </div>
                        <div className="col-md-4 col-sm-3 col-3">
                            <h1 className="stats">999+</h1>
                            <p>Commandes</p>
                        </div>
                    </div>
                    <h3 className="mt-4">NOS PERFORMANCES</h3>
                    <div class="progress container ">
                    <ProgressBar variant="warning" animated now={99} label={`RÉUSITE 100%`} />
                    </div>
                    <button className="connexion mt-5">Voir nos meilleures ventes</button>
                </div>
                {/* ----------Start Section 5 ------------  */}
                <h1>Ils Disent De Nous</h1>
                <p>Des milliers de clients satisfaits chez "El Houli "</p>
                <Carousel className="mt-5 col-md-12 ">
     <Carousel.Item className="row text-center">
        <div className="row">
                 {/* ------------Card one ------- */}
       <div className="col-md-4">
       <Card className=" text-center">
  <Card.Img className="revieus"  variant="top" src="/image/amin.jpg" />
  <Card.Body>
    <Card.Title>Mohamed Amin</Card.Title>
    <Card.Text>
      
    Mon expérience avec El houli fut un vrai plaisir.                                    
    </Card.Text>

  </Card.Body>
</Card>
       </div>
       {/* -------------card two ---------*/}
        <div className="col-md-4">
        <Card className=" text-center">
  <Card.Img className="revieus"  variant="top" src="image/user1.jpg" />
  <Card.Body>
    <Card.Title>Dorra Amri</Card.Title>
    <Card.Text>
    J'ai tant cherché quoi offrir à ma femme et j'ai trouvé mon bonheur dans ce site plein d'articles 
    </Card.Text>
 
  </Card.Body>
</Card>
        </div>
       {/* -----------card three --------- */}
       <div className="col-md-4">
       <Card className=" text-center">
  <Card.Img className="revieus"  variant="top" src="image/mansour.jpg" />
  <Card.Body>
    <Card.Title>Mansour Mohamed</Card.Title>
    <Card.Text>
     El Houli est site très diversifiés et de très haute qualité 
    </Card.Text>
   
  </Card.Body>
</Card>
       </div>
        </div>
 
  </Carousel.Item>
  <Carousel.Item>
    <div className="row">
                 {/* ------------Card one ------- */}
       <div className="col-md-4">
       <Card className=" text-center">
  <Card.Img className="revieus"  variant="top" src="/image/sami.jpg" />
  <Card.Body>
    <Card.Title> Sami Mathlouthi</Card.Title>
    <Card.Text>
     
    Au début j'ai surfé sur les pages de l'Artisane juste par curiosité mais 
    après je me suis retrouvée addicted.                                     
    </Card.Text>
  
  </Card.Body>
</Card>
       </div>
       {/* -------------card two ---------*/}
        <div className="col-md-4">
        <Card className=" text-center">
  <Card.Img  className="revieus" variant="top" src="image/mahdi.jpg" />
  <Card.Body>
    <Card.Title>Mahdi Tlili</Card.Title>
    <Card.Text>
    Un service irréprochable 
    et une rapidité exceptionnelle. Merci infiniment
    </Card.Text>
    
  </Card.Body>
</Card>
        </div>
       {/* -----------card three --------- */}
       <div className="col-md-4">
       <Card className=" text-center">
  <Card.Img  className="revieus" variant="top" src="/image/amin.jpg"  />
  <Card.Body>
    <Card.Title>Nassim hlifi</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    
  </Card.Body>
</Card>
       </div>
        </div>
  
  </Carousel.Item>

</Carousel>
                {/* ----------End Section 5 ------------  */}
                <div className=" mt-5 text-center ">
                    <h5 className="recieve">Recevez des mises à jour par e-mail sur notre <br/>
                     dernière boutique et nos offres spéciales.</h5>
                     <form className='d-flex mb-5 mt-4'>
                      <input   type="text" className="form-control input-propos" />
                      <button className="connexion">S'abonner</button>
                      </form>
                </div>
            </div>
            <Footer/>
            {/* ------------  End Section 3  --------------*/}
        </div>

    </div>
   )

 }

export default Propos
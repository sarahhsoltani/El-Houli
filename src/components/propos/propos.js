import React from 'react'
import Header from '../header/header'
import "./propos.css"
import Footer from "../footer/footer"
import {ProgressBar,Carousel,Button,Card,Form} from "react-bootstrap" 
const Propos = () => {
  return(
    <div>
        <Header/>
        <div className="col-md-12 ">
            <div className="propos pt-5">
                <h4 className="item-one ms-5 ">Nous faisons des choses avec amour</h4>
                <h1 className="item-two ms-5 mt-5  ">Notre histoire</h1>
            </div>
            <div className="container">
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
                    <div className="row text-center mb-3">
                        <div className="col-md-4 col-sm-3 col-3 ">
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
                    <h3>NOS PERFORMANCES</h3>
                    <div class="progress container mt-5">
                    <ProgressBar variant="warning" animated now={99} label={`RÉUSITE`} />
                    </div>
                </div>
                {/* ----------Start Section 5 ------------  */}
                <h1>Ils Disent De Nous</h1>
                <p>Des milliers de clients satisfaits chez "El Houli "</p>
                <Carousel className="mt-5 col-md-12 ">
     <Carousel.Item className="row">
        <div className="row">
                 {/* ------------Card one ------- */}
       <div className="col-md-4">
       <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
       </div>
       {/* -------------card two ---------*/}
        <div className="col-md-4">
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
       {/* -----------card three --------- */}
       <div className="col-md-4">
       <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
       </div>
        </div>
 
  </Carousel.Item>
  <Carousel.Item>
    <div className="row">
                 {/* ------------Card one ------- */}
       <div className="col-md-4">
       <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
       </div>
       {/* -------------card two ---------*/}
        <div className="col-md-4">
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
       {/* -----------card three --------- */}
       <div className="col-md-4">
       <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
       </div>
        </div>
  
  </Carousel.Item>

</Carousel>
                {/* ----------End Section 5 ------------  */}
                <div className=" mt-5 text-center">
                    <h5>Recevez des mises à jour par e-mail sur notre <br/>
                     dernière boutique et nos offres spéciales.</h5>
                    <Form.Control className="input-formm ms-6" type="email" placeholder="Enter email" />
                </div>
            </div>
            <Footer/>
            {/* ------------  End Section 3  --------------*/}
        </div>

    </div>
   )

 }

export default Propos
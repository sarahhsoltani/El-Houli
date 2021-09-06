import React ,{useEffect}from 'react'
import Header from '../header/header'
import "./collection.css"
import { getPubs } from '../../redux/actions/produit'
import {Form} from "react-bootstrap" 
import {Card,Button} from "react-bootstrap"
import Footer from '../footer/footer'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Collection = () => {
  const dispatch = useDispatch()
  const pubs = useSelector((state) => state.productReducer.pubs)
  useEffect(() => {
    dispatch(getPubs())
       }, [dispatch])
    // console.log("pubs",pubs)
  return(
    <div>
        <Header/> 
        <div className="col-md-12">
            <div className="row vedette ">
                <div className="col-md-6 col-sm-6 col-6 pt-5 vedette-two">
                    <h3 className="mb-4 pt-5 ">PRODUITS EN VEDETTE</h3>
                    <p className="paraa">Inspiré par notre vie multiethnique,nous créons <br/> des bijoux  fins  pour
                         partager nos merveilleuses <br/> histoires…</p>
                </div>
                <div className="col-md-6 col-sm-6 col-6 ">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./image/11.jpg" class="d-block w-100 h-50" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h3>Des anneaux</h3>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./image/8.jpg " class="d-block w-100 h-50" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h3>Des colliers</h3>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./image/12.jpg " class="d-block w-100 h-50" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h3>des boucles d'oreilles</h3>
      </div>
    </div>
  </div>
</div>
                </div>
            </div>
            <div className="container text-center d-flex ms-6">
            <Form.Control className="mt-5 input-search" type="email" placeholder="Enter email"  />
            <i class="fal fa-search mt-5 fa-2x searchh" ></i>
            </div>
            {/*---------- cards  ---------*/}
          <div className="container">
          <div className=" d-flex justify-content-around flex-wrap mt-5">
           {
                              pubs.map((el,key)=>(
                                <Card style={{ width: '18rem' }} key={key}>
                                <Card.Img variant="top"  className="w-50 h-50"  src={el.image} />
                                <Card.Body>
                                  <Card.Title>{el.title}</Card.Title>
                                  <Card.Text>
                                    <p>{el.price}</p>
                                    <p>{el.description}</p>
                                    <p>{el.category}</p>
                                  </Card.Text>
                                 <Link to={`/produitId/${el._id}`} id={el._id}><Button variant="primary">Consulter</Button></Link> 
                                </Card.Body>
                              </Card>
                              ))
                          }
           </div>
          </div>
            <Footer/>
        </div>
    </div>
   )

 }

export default Collection
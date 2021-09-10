import React ,{useEffect,useState}from 'react'
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
  const [pubSearch, setPubSearch] = useState("")
  const pubs = useSelector((state) => state.productReducer.pubs)
  const [category,setCategory]=useState("")

  const cat=["tous","Bagues","Colliers","Bracelets","Boucles","Manchettes"]
  const handlProduct=(e)=>{
    setPubSearch(
      e.target.value
    )
    console.log(`pubSearch`, pubSearch)
  }

  const searchByCategory = e => {
    setCategory(
    
     e.target.value
    );   
    console.log(`category`, category)
  };

  const filterPubs=
  pubs.filter(el=>
    el.title.toLowerCase().includes(pubSearch.toLowerCase())
    ) 
      
  const filterByCategory=
   pubs.filter(el=>category === "tous"? el :
   el.category.toLowerCase().includes(category.toLowerCase())
 
   )

   const pubsFiltred = 
   filterPubs ? filterPubs : filterByCategory? filterByCategory
   :pubs 
  // const filterPub=
  // pubSearch  && pubs.filter(el=>
  //  el.name.toLowerCase().includes(search.toLowerCase())
   
   
  //  ) 
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
            <div className="text-center my-4">
            <h1 className="title-coll">Collection de beauté</h1>
             <h5>Des bijoux & Accessoires originales avec des prix imbattables</h5>
            </div>
            <div className="container text-center d-flex ms-6">
          <form className='d-flex mb-5 mt-4'>
              <input   type="text" className="form-control input-propos" value={pubSearch} onChange={handlProduct}/>
             <button className="connexion"> Chercher</button>
                      </form>
             {/* <select value={category} onChange={searchByCategory}>
                 {
                   cat.map((el,key)=>(
                      
                        <option >{el}</option>
                     
                   ))
                 }
                    </select> */}
            
         
            </div>
            {/*---------- cards  ---------*/}
          <div className="container">
            {/*  */}
      
{/*  */}
          <div className=" d-flex  flex-wrap">
           {
                           pubsFiltred  .map((el,key)=>(
                                <Card  key={key} className="text-center w-25" >
                                <Card.Img variant="top"  className="w-50 h-50 ms-5"  src={el.image} />
                                <Card.Body>
                                  <Card.Title>{el.title}</Card.Title>
                                  <Card.Text>
                                    <p>{el.price}.00  د.ت</p>
                                 
                                    <p>{el.category}</p>
                                  </Card.Text>
                                 <Link to={`/produitId/${el._id}`} id={el._id}>
                                   <button  className="connexion">Consulter</button></Link> 
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
// import React,{useEffect}from 'react'
 import { getPubs,deletePub } from '../../redux/actions/produit'
import AddProduit from './addProduit'
import Header from '../header/header'
// import { useDispatch, useSelector } from 'react-redux'
// import {Card,Button} from "react-bootstrap"
//  const MyPublication=() =>{
//     const dispatch = useDispatch()
//     const user = useSelector((state) => state.authReducer.user)
//     const pubs = useSelector((state) => state.productReducer.pubs)
       
  // useEffect(() => {
  //       user && getPubs(user._id);
  //       console.log("one pub privé",pubs)
  //     })
        
      
//     return (
//         <div>
//            <Header/>
//            <AddProduit/>
//            <div className="d-flex">
//            {
//                               pubs.map(el=>(
//                                 <Card style={{ width: '18rem' }} key={el._id}>
//                                     {console.log("log",el._id)}
//                                 <Card.Img variant="top"  className="w-50 h-50"  src={el.image} />
//                                 <Card.Body>
//                                   <Card.Title>{el.title}</Card.Title>
//                                   <Card.Text>
//                                     <p>{el.price}</p>
//                                     <p>{el.description}</p>  
//                                     <p>{el.category}</p>
//                                   </Card.Text>
//                                   <Button variant="primary">Consulter</Button>
//                                 </Card.Body>
//                               </Card>
//                               ))
//                           }
//            </div>
//         </div>
//     )
// }
// export default MyPublication
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter,
  Button
} from "reactstrap";
import UpdateProduct from './updateProduct';
import Footer from '../footer/footer';


class MyPublication extends Component {
  state = {
  
    pub: null
  };
  componentDidMount() {
    this.props.user && this.props.getPubs(this.props.user._id);
  }
 

  render() {
    console.log("this.props.pubs",this.props.pubs);
    return this.props.loading ? (
      <img className="spiner" src="https://svgshare.com/i/EmH.svg" alt="" />
    ) : (
      <>
      <Header/>
     <div className=" espace">
    <div className="container">
    <div className="row ">
        <div className="col-md-3">
          <img src="/image/44.jpg" className="w-100 h-75"/>
        </div>
        <div className="col-md-6  mt-4 mb-5 ">
          <h1 className="mt-5 bienvenue">Bienvenue dans votre espace {this.props.user.name}</h1>
          <p className='mt-5'>El Houli se soucie de leurs clients et de leurs opinions. Nous estimons que El Houli a été amélioré, mais nous souhaitons également avoir de vos nouvelles. Nous voulons que vous aimiez El Houli autant que nous.</p>
        </div>
        <div className="col-md-3 image-2" >
        <img src="/image/45.jpg" className="w-100 h-75"/>
        </div>
      </div>
      {/* ------------------------------ blog-------------------- */}
    
    </div>
     </div>
        <div className='container'>
       
        <Row md="4" sm="2" xs="1">
          {this.props.pubs.map(pub => (
            <Col className="mt-4" key={pub._id}>
              <Card className=" shadow-sm">
                <CardImg
                
              
                  src={pub.image}
                  alt="Card image cap"
                  className="border-bottom"
                />
                <CardBody>
                  <CardTitle className="text-center card-title ">
                    <span className="text-user"> {pub.title}</span>
                  </CardTitle>
                  <CardSubtitle className="ms-4 text d-flex justify-content-between">
                    <div className="d-flex justify-content-around text-center">
                      <h5 className="text-user me-4 ">{pub.category}</h5>
                      <h5 >{pub.price} د.ت</h5>
                    </div>
                    
                  </CardSubtitle>

                  <CardText className="mt-3 mb-2 pub-text">
                  <div>
                      {pub.description}
                    </div>
                  </CardText>
                </CardBody>
                <CardFooter className="d-flex justify-content-between ">
                  
                    {/* <i
                      className="fas fa-wrench fa-lg text-info"
                      
                    ></i> */}
                    <UpdateProduct pub={pub} id={pub._id}/>
                 
                 
                    <i className="fas fa-trash fa-lg delete " onClick={() => this.props.deletePub(pub._id)}></i>
                 
                </CardFooter>
              </Card>
            </Col>
          ))}
          <Col
            className="d-flex align-items-center justify-content-center mt-4"
            // onClick={() =>
            //   this.setState({ modal: true, isEdit: false, pub: null })
            // }
            
          >
             <AddProduit/>
          </Col>
        </Row>
       
        </div>
        <Footer/>
      </>
    );
  }
}
const mapStateToProps = state => ({
  user: state.authReducer.user,
  pubs: state.productReducer.pubs,
  loading: state.productReducer.loading
});
export default connect(
  mapStateToProps,
  {
    getPubs
   ,deletePub
  }
)(MyPublication);

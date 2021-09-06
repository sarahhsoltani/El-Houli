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
        <AddProduit/>
        <Row md="4" sm="2" xs="1">
          {this.props.pubs.map(pub => (
            <Col className="mt-4" key={pub._id}>
              <Card className="h-90 shadow-sm">
                <CardImg
                  top
                  width="100%"
                  height="50%"
                  src={pub.image}
                  alt="Card image cap"
                  className="border-bottom"
                />
                <CardBody>
                  <CardTitle className="text-center card-title mt-3">
                    Instrument:<span className="text-user"> {pub.title}</span>
                  </CardTitle>
                  <CardSubtitle className="card-category text-left mt-3">
                    <span className="ml-1 card-category">
                      Marque: <span className="text-user">{pub.category}</span>
                    </span>
                  </CardSubtitle>

                  <CardText className="mt-3 mb-2 text-right text-secondary card-price">
                    <span className="ml-1 card-category"> Prix: </span>{" "}
                    <span className="text-user">{pub.price}</span>
                    <sup className="ml-1 text-user">DT</sup>
                  </CardText>
                </CardBody>
                <CardFooter className="d-flex justify-content-between mt-1">
                  <Button color="light">
                    {/* <i
                      className="fas fa-wrench fa-lg text-info"
                      
                    ></i> */}
                    <UpdateProduct pub={pub} id={pub._id}/>
                  </Button>
                  <Button
                    color="light"
                    onClick={() => this.props.deletePub(pub._id)}
                  >
                    <i className="fas fa-cut fa-lg text-danger"></i>
                  </Button>
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
          </Col>
        </Row>
  
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

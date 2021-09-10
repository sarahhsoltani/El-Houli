import React,{ useState} from 'react'
import {Button,Modal} from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/actions/produit';
const AddProduit=()=> {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('') 
    const [image, setImage] = useState('')
    const [price, setPrice] = useState('')
    const [countInStock, setCountInStock] = useState('')
    const dispatch = useDispatch()
    
    const removeDuplicates = (myArr, prop) => {
      return myArr.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
      });
    };
   

    // add products
    const addProducts=()=>{
   
      dispatch(addProduct( 
        title,
        category,
        description,
        image,
        price,
        countInStock)
        
        )
       
    }
    // useEffect(() => {
    //   dispatch(())
    //      }, [dispatch])
      // console.log("user corrent",product)
    // componentDidMount() {
    //   this.props.user && this.props.getPubs(this.props.user._id);
    // }
    return (
      
        <>
        <Button className="mt-5 mb-3" variant="primary" onClick={handleShow}>
          Nouveau produit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Ajout Nouveau Produit <i class="fas fa-plus-circle"></i></Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <form>
              <div className="form-group">
                  <label class="form-check-label text-muted">Titre produit</label>
                  <input  type="text" name="nom"  placeholder="Enter nom" 
                  onChange={(e) => setTitle(e.target.value) }
                 
                  className="form-control form-control-lg" id="exampleInputPassword1" placeholder="enter le tiltre"/>
                </div>
                <div className="form-group">
                <label class="form-check-label text-muted">Categories produit</label>
                  <input  type="text" name="nom"  placeholder="Enter nom" 
                  onChange={(e) => setCategory(e.target.value) }
                  
                  className="form-control form-control-lg" id="exampleInputPassword2" placeholder="entrer l'image de produit"/>
                </div>
                <div className="form-group">
                <label class="form-check-label text-muted">Descriptions produit</label>
                  <input  type="text" name="description"  placeholder="Enter categories" 
                   onChange={(e) => setDescription(e.target.value) }
                   
                   
                  className="form-control form-control-lg" id="exampleInputPassword3" />
                </div>
                <div className="form-group">
                <label class="form-check-label text-muted">Image produit</label>
                  <input  type="text" name="image"  placeholder="Enter la image" 
                   onChange={(e) => setImage(e.target.value) }
                   
                  className="form-control form-control-lg" id="exampleInputPassword4" />
                </div>
                <div className="form-group">
                <label class="form-check-label text-muted">Prix produit</label>
                  <input  type="text" name="price"  placeholder="Enter le prix" 
                   onChange={(e) => setPrice(e.target.value) }
                  
                  className="form-control form-control-lg" id="exampleInputPassword5" />
                </div>
                <div className="form-group">
                <label class="form-check-label text-muted">CountInStock produit</label>
                  <input  type="text" name="countInStock"  placeholder="Enter le countInStock" 
                    onChange={(e) => setCountInStock(e.target.value) }
                
                  className="form-control form-control-lg" id="exampleInputPassword6" />
                </div>
              </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" 
            onClick={()=>
              {
              handleClose();
              addProducts()
              }}>
              publier
            </Button>
           
          </Modal.Footer>
        </Modal>
      </>
    )
}
export default AddProduit
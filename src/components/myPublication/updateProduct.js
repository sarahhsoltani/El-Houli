import React,{ useState} from 'react'
import {Button,Modal} from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { updatePub } from '../../redux/actions/produit';

const UpdateProduct=({pub,id})=> {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [update,setupdate]=useState({title:pub.title,category:pub.category,price:pub.price,image:pub.image,
      description:pub.description,countInStock:pub.countInStock})

      const dispatch = useDispatch()
      const handleChange=(e)=>{
        const {name,value}=e.target
        setupdate({
            ...update,
            [name]:value
        })
        console.log("input",update)
    }
    // add products
    const updateProducts=()=>{
   
      dispatch(updatePub( 
        id,
        update.title,
        update.category,
        update.description,
        update.image,
        update.price,
        update.countInStock)
        
        )
       
    }
    return (
        <div>
             <>
       
        <i className="fas fa-edit warning " onClick={handleShow}></i> 
       
        
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>modifier Nouveau Produit</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <form>
              <div className="form-group">
                  <label class="form-check-label text-muted">Titre produit</label>
                  <input  type="text" name="title"  placeholder="Enter nom"   onChange={handleChange}
                //   onChange={(e) => setTitle(e.target.value) } 
                defaultValue={pub.title}
                 
                  className="form-control form-control-lg" id="exampleInputPassword1" placeholder="enter le tiltre"/>
                </div>
                <div className="form-group">
                <label class="form-check-label text-muted">categories produit</label>
                  <input  type="text" name="category"  placeholder="Enter nom"  onChange={handleChange}
                //   onChange={(e) => setCategory(e.target.value) }
                defaultValue={pub.category}
                  
                  className="form-control form-control-lg" id="exampleInputPassword2" placeholder="entrer l'image de produit"/>
                </div>
                <div className="form-group">
                <label class="form-check-label text-muted">descriptions produit</label>
                  <input  type="text" name="description"  placeholder="Enter categories"  onChange={handleChange}
                //    onChange={(e) => setDescription(e.target.value) }
                defaultValue={pub.description}
                   
                  className="form-control form-control-lg" id="exampleInputPassword3" />
                </div>
                <div className="form-group">
                <label class="form-check-label text-muted">image produit</label>
                  <input  type="text" name="image"  placeholder="Enter la image"  onChange={handleChange}
                //    onChange={(e) => setImage(e.target.value) }
                defaultValue={pub.image}
                   
                  className="form-control form-control-lg" id="exampleInputPassword4" />
                </div>
                <div className="form-group">
                <label class="form-check-label text-muted">prix produit</label>
                  <input  type="text" name="price"  placeholder="Enter le prix"  onChange={handleChange}
                //    onChange={(e) => setPrice(e.target.value) }
                defaultValue={pub.price}  

                  className="form-control form-control-lg" id="exampleInputPassword5" />
                </div>
                <div className="form-group">
                <label class="form-check-label text-muted">countInStock produit</label>
                  <input  type="text" name="countInStock"  placeholder="Enter le countInStock"  onChange={handleChange}
                    // onChange={(e) => setCountInStock(e.target.value) }
                    defaultValue={pub.countInStock}


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
              updateProducts()
              }} 
              >
              publier
            </Button>
           
          </Modal.Footer>
        </Modal>
      </>
        </div>
    )
}
export default UpdateProduct
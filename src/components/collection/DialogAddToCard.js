import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ProductToCard from './ProductToCard/ProductToCard';
import { useDispatch, useSelector} from 'react-redux'
import { addToCard } from '../../redux/actions/cart';
import Notification from './Notification/Notification';
import Login from '../auth/login';
import { Link } from '@material-ui/core';
import {Alert} from "react-bootstrap"
export default function DialogAddToCard({open,handleClose,pub,qty}) {
  const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated)
  const user = useSelector((state) => state.authReducer.user)
    const [notify, setNotify] = useState({
        isOpen: false,
        message: "",
        type: "",
      });
    const dispatch = useDispatch()     
    const addProductToCard=()=>{
    dispatch(addToCard(pub._id,pub.title,qty,pub.image,pub.price,pub.product));
    setNotify({
        isOpen: true,
        message: "votre commande a été envoyée avec succès!",
        // message: `${pub.title} est ajouté au panier avec succès!`,
        type: "success",
      });
    handleClose()
  }
  const alertt=()=>{
    alert("vous ete pas connecter")
  }

     return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="lg"
      >
        <DialogTitle id="alert-dialog-title">{"Ajouter au Panier"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
             <ProductToCard pub={pub} qty={qty}/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className="quitter" color="primary">
            Quitter
          </Button>

         {isAuthenticated?( 
         
         <Button className="panier"  onClick={() => addProductToCard()} >
        Commander
          </Button>):
      <Link to="/login"><button className="retour btn"> Connecter vous</button></Link>
         
          }
         
         {/* <Link to="/confirm">
         <Button className="panier"  addProductToCard={ addProductToCard()} >
        Commander
          </Button>
         </Link> */}
       
        </DialogActions>
      </Dialog>
      <Notification notify={notify} setNotify={setNotify}/>
    </div>
  );
}

import React, {useState} from 'react'
import "./auth.css"
import Header from "../header/header"
import {Form,Button} from "react-bootstrap"
import {FormFeedback} from "reactstrap"
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import {register} from "../../redux/actions/authentification"
import AlertMsg from './alert'
import { Link } from 'react-router-dom'
const Register = () => {
    const [nom, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') 
    const [role, setRole] = useState('')
    const [phone, setPhone] = useState('')
    const [validate, setValidate] = useState(
    {nomState:"ok", emailState: "ok",passwordState: "ok",telState: "ok"})
    const [fields]= useState({})
    const [errors,setErrors]= useState({})
    const dispatch = useDispatch()

  const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated)
  console.log("authh",isAuthenticated)

  const  handleValidation=()=>{
    let formIsValid = true;
    let err={}
    if(!fields["email"]  ){
      formIsValid = false;
      err["email"] = "ce champs ne peut être pas vide ";
    }
    if(typeof fields["email"] !== "undefined" ){
      if(!fields["email"].match(/^[\w|.]+\@[a-z ]{3,}\.[a-z]{2,3}$/)){
        formIsValid = false;
        err["email"] ="Désolé,le nom d'utilisateur doit comporter entre 6 et 30 caractères et seules les lettres (az), les chiffres (0-9) et les points (.) Sont autorisés."
 
      }
    }
   if(!fields["password"]  ){
    formIsValid = false;
    err["password"] = "ce champs ne peut être pas vide ";
  }
  if(typeof fields["password"] !== "undefined" ){
    if(!fields["password"].match(/^.{6,40}$/)){
      formIsValid = false;
      err["password"] ="Désolé,le mot de passe doit comporter entre 6 et 40 "
  
    }
  }
  return formIsValid

}
const handleChange=(field, e)=>{  
  let f=fields       
  f[field] = e.target.value; 
  
  setEmail(f["email"]) 
  setPassword(f["password"])      
    
  console.log("field",field)
  console.log("field",field)
}
//-------Name validate
const validateName = () => {
  
    if (!nom) {
      validate.nomState = "bad";
    } else {
      validate.nomState = "ok";
    }
   setValidate({ validate });
  };
// ------validate email
const validateEmail = () => {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (emailRex.test(email)) {
      validate.emailState = "ok";
    } else {
      validate.emailState = "bad";
    }
    setValidate({ validate });
  };



// ----validate password  
  // const validatePassword = () => {
 
  //   if (!password) {
  //     validate.passwordState = "bad";
  //   } else {
  //     validate.passwordState = "ok";
  //   }
  //   setValidate({ validate });
  // };
  
//   --------- validate phone
  const validatePhone = () => {
    
    if (phone.length !== 8) {
      validate.telState = "bad";
    } else {
      validate.telState = "ok";
    }
    setValidate({ validate });
  };
    // validateName();
    // validatePassword();
    // validatePhone();
    // validateEmail();
// -----------
  const submitForm=(e)=>{
    e.preventDefault()
  if ( handleValidation()){
    
    
      dispatch (register(nom,email,password,role))
    console.log("vaidateeee",validate.emailState)
  }

}
  return(

    <div>
        <Header/>
       
         {isAuthenticated  ? <Redirect to="/" />:
        
        <div className="col-md-12 container mt-5 text-center ">
        
          <div>
           
          </div>
            <h1>Créez Votre Compte</h1>
            <h4>Profitez d'offres exceptionnelles en rejoignant la famille d'El Houli</h4>
            <div> <AlertMsg/></div>
            <Form className="mt-5" onSubmit={submitForm}>
                 <Form.Group className="mb-3 d-flex" controlId="formBasicEmail ">
                   <Form.Label>Nom </Form.Label>
                   <Form.Control type="text" name="nom" value={nom} placeholder="Enter nom" 
                     onChange={(e) => setName(e.target.value)}
                     invalid={validate.nomState === 'bad'}
                     onFocus={() => {
                      setValidate({
                        validate: { ...validate, nameState: "ok" }
                      });
                    }}
                     />
                
                 </Form.Group>
                 
                 <Form.Group className="mb-3 d-flex" >
                   <Form.Label>Address </Form.Label>
                   <div>
                   <Form.Control type="email" name="email"  placeholder="Enter email"
                    onChange={e =>{handleChange("email",e)}} value={fields["email"]}

                    invalid={validate.emailState === 'bad'}
                    onFocus={() => {
                      setValidate({
                        validate: { ...validate, emailState: "ok" }

                      });
                    }}
                   />
                <p  style={{color: "#d93025"}}> {errors["email"]} </p></div>
           
                 </Form.Group>
                 <Form.Group className="mb-3 d-flex" >
                   <Form.Label>Password</Form.Label>
                   <div>
                   <Form.Control type="password" name="password"   placeholder="Password" 
                    onChange={e =>{handleChange("password",e)}} value={fields["password"]}
                    invalid={validate.passwordState === 'bad'}
                    onFocus={() => {
                      setValidate({
                        validate: { ...validate, passwordState: "ok" }
                      });
                    }}
                   />
                   <p  style={{color: "#d93025"}}> {errors["password"]} </p></div>
                   
                 </Form.Group>
                <Form.Group className="mb-3 d-flex" >
                   <Form.Label>Role </Form.Label>
                   <Form.Control type="text" name="role" value={role}  placeholder="Enter role"
                    onChange={(e) => setRole(e.target.value)}
                    
                   />
                  
                 </Form.Group>
                 { role === "Vendeur" && (
                      <Form.Group className="mb-3 d-flex" >
                      <Form.Label>phone </Form.Label>
                      <Form.Control type="text" name="phone" value={phone}  placeholder="Enter phone"
                       onChange={(e) => setPhone(e.target.value)}
                       invalid={validate.telState === 'bad'}
                       onFocus={() => {
                        setValidate({
                          validate: { ...validate, telState: "ok" }
                        });
                      }}
                      />
                        <FormFeedback iinvalid="true">
                    S'il vous plait entrez un numéro de téléphone avec 8 chiffres. </FormFeedback>
                    </Form.Group>  
                       )}
                  <p className="mt-3 text-cente ">
            Vous avez déjà un compte{" "}
            <Link to="/login" className="inscription">
              Se connecter
            </Link>
          </p>
                 <Button variant="warning" type="submit">
                    Submit
                 </Button>
               </Form>
               
        </div>}
    </div>
   )

 }

export default Register
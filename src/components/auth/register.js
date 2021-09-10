import React, {useState} from 'react'
import Header from "../header/header"
import {FormGroup} from "react-bootstrap"
import {FormFeedback,Input} from "reactstrap"
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
    const dispatch = useDispatch()
    const user = useSelector((state) => state.authReducer.user) 
  const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated)
  console.log("authh",isAuthenticated)
 
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
  const validatePassword = () => {
 
    if (!password) {
      validate.passwordState = "bad";
    } else {
      validate.passwordState = "ok";
    }
    setValidate({ validate });
  };
//   --------- validate phone
  const validatePhone = () => {
    
    if (phone.length !== 8) {
      validate.telState = "bad";
    } else {
      validate.telState = "ok";
    }
    setValidate({ validate });
  };
// -----------
  const submitForm=(e)=>{
    e.preventDefault()
    validateName();
    validatePassword();
    validatePhone();
    validateEmail();
    role === "Vendeur" ?
        dispatch (register(nom,email,password,role,phone))
    
    :  dispatch (register(nom,email,password,role))
    console.log("email",email)
  }
  if (user) {
    if (isAuthenticated && user.role === "Client" || user.role === "Vendeur") return <Redirect to="/" />;
  }
  if (user) {
    if (isAuthenticated && user.role === "Admin") return <Redirect to="/dashboard/home" />;
  }
  return(

    <div>

   <Header/>
       
     {/* {isAuthenticated  ? <Redirect to="/" />:
        
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
                   <Form.Control type="email" name="email" value={email}   placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)}
                    invalid={validate.emailState === 'bad'}
                    onFocus={() => {
                      setValidate({
                        validate: { ...validate, emailState: "ok" }

                      });
                    }}
                   />
                  <FormFeedback iinvalid="true">Entrer email valide.</FormFeedback>
                 </Form.Group>
                 <Form.Group className="mb-3 d-flex" >
                   <Form.Label>Password</Form.Label>
                   <Form.Control type="password" name="password" value={password}   placeholder="Password" 
                    onChange={(e) => setPassword(e.target.value)}
                    invalid={validate.passwordState === 'bad'}
                    onFocus={() => {
                      setValidate({
                        validate: { ...validate, passwordState: "ok" }
                      });
                    }}
                   />
                    <FormFeedback iinvalid="true">Entrer un mot de passe valide.</FormFeedback>
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
               <AlertMsg/>
        </div>} */}

        {/* -------------------------- Register------------- */}
       { isAuthenticated  ? <Redirect to="/" /> :  
  <div className="container-scroller">
    <div className="container-fluid page-body-wrapper full-page-wrapper">
      <div className="content-wrapper d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-6 mx-auto">
            <div className="auth-form-light text-left py-3 px-4 px-sm-5 text-center">
              <div className="brand-logo">
              <img src="/image/myLog.png" className="logoAd" alt="logo"/>
              </div>
              <h4 className="cmp">Créez Votre Compte</h4>
              <h6 className="font-weight-light offre">Profitez d'offres exceptionnelles en rejoignant la famille d'El Houli</h6>
              <div> <AlertMsg/></div>
              <form className="pt-3" onSubmit={submitForm}>
                <div className="form-group">
                  <input type="text" className="form-control form-control-lg"  placeholder="enter votre nom..."
                  name="nom" value={nom}  
                  onChange={(e) => setName(e.target.value) }
                  
                  invalid={validate.nomState === 'bad'}
                  onFocus={() => {
                   setValidate({
                     validate: { ...validate, nameState: "ok" }
                   });
                 }}
                  />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="entere votre Email.."
                  name="email" value={email}   placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  invalid={validate.emailState === 'bad'}
                  onFocus={() => {
                    setValidate({
                      validate: { ...validate, emailState: "ok" }

                    });
                  }}
                  />
                </div>
               
                <div className="form-group">
                  <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="entrer votre mot de passe.."
                  name="password" value={password}   placeholder="Password" 
                  onChange={(e) => setPassword(e.target.value)}
                  invalid={validate.passwordState === 'bad'}
                  onFocus={() => {
                    setValidate({
                      validate: { ...validate, passwordState: "ok" }
                    });
                  }}
                  />
                </div>
                <div className="form-group">
                  {/* < input type="select" className="form-control form-control-lg" id="exampleInputEmail2" placeholder="vous étes ?"
                  name="role" value={role}  placeholder="Enter role"
                  onChange={(e) => setRole(e.target.value)} /> */}
                    
                   
                
                </div>
                <FormGroup >
             
             <Input
               className="  form-control-lg"
               type="select"
               name="role"
               onChange={(e) => setRole(e.target.value)} 
               onClick={() => {
                role === "Client" &&
                 setValidate({
                     validate: { ...validate, telState: "ok" }
                   });
               }}
             >
               <option value="Vendeur">Vendeur</option>
               <option value="Client"> Client</option>
             </Input>
           </FormGroup>
                { role === "Vendeur" && (
              <div>
                <FormGroup >
                  
                  <Input
                    className="  form-control-lg"
                   
                    name="phone"
                    placeholder="Votre Numéro de téléphone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)} 
                    invalid={validate.telState === "bad"}
                    onFocus={() => {
                      setValidate({
                        validate: { ...validate, telState: "ok" }
                      });
                    }}
                  />
                  <FormFeedback iinvalid="true">
                    S'il vous plait entrez un numéro de téléphone avec chiffres.
                  </FormFeedback>
                </FormGroup>
              </div>
            )}
              
                <div className="mt-3">
                  <button type="submit" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" >SIGN UP</button>
                </div>
                <div className="text-center mt-4 font-weight-light">
                  vous avez déja un compte? <Link to="/login"  className="text-primary">Se connecter</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    
    </div>
    
  </div>
                }
    </div>
   )

 }

export default Register
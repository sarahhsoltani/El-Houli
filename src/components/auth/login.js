import React ,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../header/header'
import { Link,Redirect } from 'react-router-dom'
import { loginUser } from '../../redux/actions/authentification'
import AlertMsg from './alert'
import Footer from "../footer/footer"
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validate, setValidate] = useState({emailState: "ok",passwordState: "ok"})
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state) => state.authReducer.isAuthenticated) 
    
    const user = useSelector((state) => state.authReducer.user) 

    const loading = useSelector((state) => state.authReducer.loading) 

    console.log("userr",user)

    const loginForm=(e)=>{ 
        e.preventDefault()
        validateEmail()
        validatePassword()
        dispatch(loginUser(email,password))
    }
   const validateEmail = () => {
        const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       
        if (emailRex.test(email)) {
          validate.emailState = "ok";
        } else {
          validate.emailState = "bad";
        }
        setValidate({ validate });
      };
  const validatePassword = () => {
    
        if (!password) {
          validate.passwordState = "bad";
        } else {
          validate.passwordState = "ok";
        }
        setValidate({ validate });
      }; 
   
           
            if (user) {
              if (isAuthenticated && user.role === "Client" || user.role === "Vendeur") return <Redirect to="/" />;
            }
            if (user) {
              if (isAuthenticated && user.role === "Admin") return <Redirect to="/dashboard/home" />;
            }
        return( 
          <div>
     
       <>

        <Header/>
         {/* <div className="container">
             <AlertMsg/>
             <h1>Connectez-Vous À Votre Compte</h1>
             <h3>Profitez d'offres exceptionnelles en rejoignant la famille d'El Houli</h3>
         <Form className="mt-5" onSubmit={loginForm} >
             
                 <Form.Group className="mb-3 d-flex" controlId="formBasicEmail ">
                   <Form.Label>email </Form.Label>
                   <Form.Control type="text" name="nom" value={email} placeholder="Enter nom" 
                   onChange={(e) => setEmail(e.target.value)}
                     />
                
                 </Form.Group>
                 <FormFeedback iinvalid="true">Entrer email valide.</FormFeedback>

                 <Form.Group className="mb-3 d-flex" controlId="formBasicEmail ">
                   <Form.Label>Password </Form.Label>
                   <Form.Control type="password" name="nom" value={password} placeholder="Enter nom"
                   onChange={(e) => setPassword(e.target.value)} 
                 
                     />
                 
                 </Form.Group> 
                 <Button type="submit">Connecter</Button>
                 <p>Créer un compte présente de nombreux avantages: payer plus rapidement,  <br/>

conserver plusieurs adresses, suivre les commandes et plus encore.</p>
                 <p className="mt-3 text-cente ">
                 Vous n'avez pas un compte? 
            <Link to="/register" className="inscription">
            S'inscrire
            </Link>
          </p>
                 </Form>
         </div> */}
         <div className="container-scroller">
    <div className="container-fluid page-body-wrapper full-page-wrapper">
      <div className="content-wrapper d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5 text-center">
              <div className="brand-logo">
                <img src="/image/myLog.png"  className="logoAd" alt="logo"/>
              </div>
              <h4 className="cpt">Connectez-Vous À Votre Compte</h4>
              <AlertMsg/>
              {/* <h6 className="font-weight-light">Profitez d'offres exceptionnelles en rejoignant la famille d'El Houli</h6> */}
              <form className="pt-3" onSubmit={loginForm} >
                <div className="form-group">
                  <input type="email" name="nom" value={email} placeholder="Enter nom" 
                   onChange={(e) => setEmail(e.target.value)}
                  className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Username"/>
                </div>
                <div className="form-group">
                  <input  type="password" name="nom" value={password} placeholder="Enter nom"
                   onChange={(e) => setPassword(e.target.value)}
                  className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="mt-3">
                  <button type='submit' className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" >Login</button>
                </div>
             
              
                <div className="text-center mt-4 font-weight-light">
                Vous n'avez pas un compte?  <Link to="/register" className="inscription text-primary" > S'inscrire</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  
  </div>
         </>
         <Footer/>
    </div>
   )

 }

export default Login
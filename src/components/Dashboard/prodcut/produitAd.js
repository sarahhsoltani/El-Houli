import React, { useEffect } from 'react'
import { getPubs,deletePub } from '../../../redux/actions/produit'
import NavbarAd from '../navbarAd/navbarAd'
import SidebarAd from '../sideBar/sidebarAd'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../../redux/actions/users'
import { loadUser } from '../../../redux/actions/authentification'

const ProductAd=()=> {
  const produits = useSelector((state) => state.productReducer.pubs)
  const user = useSelector((state) => state.authReducer.user)
  const users = useSelector((state) => state.userReducer.users)
  const dispatch = useDispatch()
 console.log("notre produits",produits)
 console.log(`users`, users)
 console.log(`user`, user)
 useEffect(()=>{
   dispatch(getPubs(),
   loadUser(),
   getUsers()
   )
   },[dispatch])
   
    const deleteProduit =(id)=>{
      dispatch(deletePub(id))
    }
    return (
        <div>
           <NavbarAd/>
              
          <div className="row mt-5">
              <div className="col-md-2"><SidebarAd/></div>

            <div className="col-md-10 grid-margin stretch-card mt-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-around">
                  <h4 className="card-title ">Listes des produits</h4>
                 
                  </div>
                  
                  <div className="table-responsive">
                    {<table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Titre</th>
                          <th>Publier par</th>
                          <th>image</th>
                          <th>categories</th>
                          {/* <th>description</th> */}
                          <th>price</th>
                          <th>countInStock</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      {produits.map((el,key)=>(
                          <tbody key={key._id}>
                          <tr>
                            <td>{el.title}</td>
                            <td>{el.user.name}</td>
                            <td><img src={el.image}/></td>
                            <td > {el.category}<i className="ti-arrow-down"></i></td>
                            {/* <td><label >{el.description}</label></td> */}
                            <td><label >{el.price}</label></td>
                            <td><label >{el.countInStock}</label></td>
                            <td><button className="badge badge-danger" onClick={() => deleteProduit(el._id)}>supprimer</button></td>
                          </tr>
                        
                         
                        </tbody>
                     ))} 
                    </table>}
                  </div>
                </div>
              </div>
            </div>
          </div>
     
        </div>
    )
}
export default ProductAd
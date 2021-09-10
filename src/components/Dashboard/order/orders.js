import React ,{useEffect}from 'react'
import { CardSubtitle } from 'reactstrap'
import NavbarAd from  "../navbarAd/navbarAd"
import SidebarAd from '../sideBar/sidebarAd'
import { useSelector,useDispatch } from 'react-redux'
import { deleteOrder, getOrders } from '../../../redux/actions/cart'
import Moment from 'react-moment'
function Orders() {
const cards= useSelector((state) => state.addToCards.cards)
const dispatch = useDispatch()
useEffect(() => {
  dispatch(getOrders())
     }, [dispatch])
    //  console.log("orders",cards[0].title)
    const deleteOrders=(id)=>{
      dispatch(deleteOrder(id))
    }
    return (
        <div>
           <NavbarAd/>
           <div className="row">
                <div className="col-md-2 mt-5">
                    <SidebarAd/>
                </div>
                <div className="col-md-10 d-flex flex-wrap mt-5">
                    {/* {cards.map((el,key)=>(
                       
                        <div class="card col-md-4 mb-3 text-center mt-5" key={key}>
                        <div class="row g-0">
                          <div >
                            <img src={el.image} class="img-fluid rounded-start  " alt="..."/>
                          </div>
                          <div class="col-md-10">
                            <div class="card-body">
                              <h5 class="card-title">{el.title}</h5>
                              <div className="d-flex justify-content-around">
                              <p class="card-text">{el.user.name}</p>
                              <p class="card-text">{el.price}</p>
                              </div>
                              <Moment format="YYYY/MM/DD" class="card-text"><small class="text-muted">{el.date}</small></Moment>
                            </div>
                          </div>
                        </div>
                      </div>
    ))

                    } */}

              <div className="table-responsive mt-5">
                  <h4>Listes des commandes </h4>
                    {<table className="table table-hover ">
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Titre</th>
                          <th>Commander par</th>
                         
                          <th>Prix</th>
                          <th>Quantité</th>
                         
                          <th>Date</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      {cards.map((el,key)=>(
                          <tbody key={key}>
                          <tr>
                          <td><img src={el.image}/></td>
                            <td>{el.title}</td>
                            <td>{el.user.name}</td>
                            
                            <td><label >{el.price}</label></td>
                            <td><label >{el.qty}</label></td>
                            <td> <Moment  format="YYYY/MM/DD" >{el.date}</Moment></td> 
                            <td className="d-flex justify-content-between">
                            <button className="valider" >valider</button>
                            <button className="supprimé" onClick={() => deleteOrders(el._id)}>supprimer</button>
                            </td>

                          </tr>
                        
                         
                        </tbody>
                     ))} 
                    </table>}
                  </div>
                </div>
           </div>
        </div>
    )
}
export default Orders

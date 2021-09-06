import React ,{useEffect}from 'react'
import Header from '../header/header'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {  getOrderById } from '../../redux/actions/cart'
    
 function CardOrder(props) {
    const dispatch = useDispatch()   
    // const { id } = useParams()
    const card = useSelector((state) => state.addToCards.card)
    const cards = useSelector((state) => state.addToCards.cards)
    const isloading = useSelector((state) => state.addToCards.isloading)
    
    useEffect(() => {
        dispatch(getOrderById(props.match.params.id)) 
     }, [dispatch])

     console.log('props.match.params.id', props.match.params.id)
     console.log('cardS', !isloading?cards:[])

  

    return (

        <div>
             <Header/>
             <h1>add to card </h1>
             {/* { !isloading ?
             <div>   
                 <h1>{card.title}</h1>
                 <h1>{card.price}</h1>
                 <h1>{card.image}</h1>
                 <h1>{card.qty}</h1>
                </div>:
                <></>
                  
                }
             */}
        </div>
    )
}
export default CardOrder
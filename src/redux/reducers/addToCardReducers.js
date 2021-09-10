import {
    CART_ADD_PRODUCT,GET_ORDER_BY_ID,GET_ORDERS,DELETE_ORDER
  } from "../actions/type";
   const initialState = {
   cards: [],  
   isloading:true,
   card:{}
  };

  const addToCards= (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {   
    case CART_ADD_PRODUCT:
        return {
          cards: payload
        };
        case GET_ORDER_BY_ID:
          return {
            card: payload,
            isloading: false
            
          };
      case GET_ORDERS:
      return {
        cards: [...payload],
       
      };
      case DELETE_ORDER:
        return {
          ...state,
          cards: state.cards.filter(
            data => data._id !== payload
          ),
          isloading: false
        };
       default:
        return state;
    }
  };
  
  export default addToCards;
  
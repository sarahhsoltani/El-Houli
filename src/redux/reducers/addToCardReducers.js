import {
    CART_ADD_PRODUCT,GET_ORDER_BY_ID
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
       default:
        return state;
    }
  };
  
  export default addToCards;
  
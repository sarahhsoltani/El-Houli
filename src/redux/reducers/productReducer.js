import {
    ADD_PRODUCT,
    DELETE_PRODUCT,
    GET_PRODUCTS,
    UPDATE_PRODUCT,
    GET_PRODUCT
  } from "../actions/type";
  
  const initialState = {
    loading: true,
    pubs: [],
    pub: null
  };
  
  const productReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case GET_PRODUCTS:
        return {
          ...state,
          pubs: payload,
          loading: false
        };
      case GET_PRODUCT:
        return {
          ...state,
          pub: payload,
          loading: false
          
        };
       
      case ADD_PRODUCT:
        return {
          ...state,
          pubs: [...state.pubs, payload]
        };
      case UPDATE_PRODUCT:
        return {
          ...state,
          pubs: state.pubs.map(pub => (pub._id === payload._id ? payload : pub))
        };
      case DELETE_PRODUCT:
        return {
          ...state,
          pubs: state.pubs.filter(pub => pub._id !== payload),
          loading: false
        };
        default:
        return state;
    }
  };
  
  export default productReducer;
  
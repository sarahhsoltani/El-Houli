import { GET_CONTACT,ADD_CONTACT, DELETE_CONTACT} from "../actions/type";
const initialState={
  datas : [],
  loading:true
} 

 export const contactReducer = ( state = initialState, action) => {
  const { type, payload } = action;
  switch (type){
    case GET_CONTACT:
      
      return {
        ...state,
        datas: payload,
        loading: false
      };
    case ADD_CONTACT:
     return {
      ...state,
      datas: [...state.datas, payload]

     };
     case DELETE_CONTACT:
      return {
        ...state,
        datas: state.datas.filter(
          data => data._id !== payload
        ),
        loading: false
      };
     
     
  }
  return state
};
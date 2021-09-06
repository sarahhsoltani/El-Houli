import axios from "axios"
import { CART_ADD_PRODUCT ,GET_ORDER_BY_ID} from "./type"


export const addToCard = (id, title,qty,image,price,product) => async dispatch => {
  try {
    const res = await axios.post(`http://localhost:4000/api/orders/postOrder/${id}`, { title, qty, image, price, product });
    dispatch({
      type: CART_ADD_PRODUCT,
      payload: res.data
    })
    // console.log("res cart",res.data);
    } catch (error) {
    console.log(error);}};

  //get product by id
export const getOrderById = id => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:4000/api/orders/getOrderById/${id}`);
    // console.log(`id card`, id )
    dispatch({
      type: GET_ORDER_BY_ID,
      payload: res.data
    });
    console.log("res cart..",res.data);
  
  } catch (error) {
    console.log(error);
  }
};
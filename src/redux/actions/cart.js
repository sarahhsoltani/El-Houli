import axios from "axios"
import { CART_ADD_PRODUCT,GET_ORDERS ,GET_ORDER_BY_ID,DELETE_ORDER} from "./type"


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

  //get card by id
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
//get all orders
export const getOrders = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:4000/api/orders/getOrders');

    dispatch({
      type: GET_ORDERS,
      payload: res.data
    });
    console.log(`cardssss`, res.data)
  } catch (error) {
    console.log(error);
  }
}; 

//delete order
export const deleteOrder = (id)=> async (dispatch) => {
  try {
    await axios.delete(`http://localhost:4000/api/orders/deleteOrder/${id}`);
    dispatch({
      type:DELETE_ORDER,
      payload:id
  })
    console.log("delete")
    dispatch(getOrders);
  } catch (error) {
    console.log(error);
  }
};
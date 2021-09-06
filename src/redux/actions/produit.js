import axios from "axios";
import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT,
  GET_PRODUCTS,
  UPDATE_PRODUCT,
  
} from "./type";

export const getPubs = (vendeur_id, category) => async dispatch => {
  try {
    const res = vendeur_id
      ? await axios.get(`http://localhost:4000/api/produits/getPoducts?user_id=${vendeur_id}`)
      : category
      ? await axios.get(`http://localhost:4000/api/produits/getPoducts?category=${category}`)
      : await axios.get(`http://localhost:4000/api/produits/getPoducts`);

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    });
    console.log("res.data",res.data)
  } catch (error) {
    console.log(error);
  }
};

export const getRecentPubs = () => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:4000/api/produits/recent`);
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};
//get product by id
export const getPub = id => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:4000/api/produits/getProduitById/${id}`);
    dispatch({
      type: GET_PRODUCT,
      payload: res.data
    });
    // console.log(`res.data`, res.data)
    // console.log("getPub")
  } catch (error) {
    console.log(error);
  }
};
export const addProduct = (
  title,
  category,
  description,
  image,
  price,
  countInStock
) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:4000/api/produits/newProduit", {
      title,
  category,
  description,
  image,
  price,
  countInStock
    });
    dispatch({
      type: ADD_PRODUCT,
      payload: res.data
    })
    console.log("add product")
    ;
  } catch (error) {
    console.log(error);
  }
};

export const updatePub = (
  id,
  title,
  category,
  description,
  image,
  price,
  countInStock
) => async dispatch => {
  try {
    const res = await axios.put(`http://localhost:4000/api/produits/moodifyProduct/${id}`, {
      title,
      category,
      description,
      image,
      price,
      countInStock
    });
    dispatch({
      type: UPDATE_PRODUCT,
      payload: res.data
    });
    console.log("update product")
  } catch (error) {
    console.log(error);
  }
};

export const deletePub = id => async dispatch => {
  try {
    await axios.delete(`http://localhost:4000/api/produits/deleteProduit/${id}`);
    dispatch({
      type: DELETE_PRODUCT,
      payload: id
    });
    dispatch(getRecentPubs);
    console.log("delete product")
  } catch (error) {
    console.log(error);
  }
};

// add comment

export const addComment = (id, text) => async dispatch => {
  try {
    await axios.post(`http://localhost:4000/api/comments/postComment/${id}`, { text });

    dispatch(getPub(id));
    console.log(`add comment`)
  } catch (error) {
    console.log(error); 
  }
};
//delete comment
export const deleteComment = (id, comment_id) => async dispatch => {
  try {
    await axios.delete(`http://localhost:4000/api/comments/deleteComment/${id}/${comment_id}`);

    dispatch(getPub(id)); 
    console.log("delete comment")
  } catch (error) {
    console.log(error);  
  }
};

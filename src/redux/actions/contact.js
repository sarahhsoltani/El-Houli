import axios from "axios";
import {ADD_CONTACT,GET_CONTACT,DELETE_CONTACT } from "./type"
//add a contact form
export const addNewContact= (name, lastname, city, email, tel, message) => async (dispatch) =>{
    try{
        const res=await axios.post(`http://localhost:4000/api/contact/postContact`, { name, lastname, city, email, tel, message });
        dispatch ({
            type:ADD_CONTACT ,
            payload:res.data  
        })
        console.log("add contact")

    }
    catch (error) {
              console.log(error);
    }
}
//get all contact forms
export const getAllContacts=()=>async (dispatch)=> {
try{
const res=await axios.get("http://localhost:4000/api/contact/getContact");
dispatch({
    type: GET_CONTACT ,
    payload:res.data
 })
 console.log(`res.data`, res.data)
}


catch (error) {
  console.log(error);
 }
}

//delete a contact form
  export const deleteContact = (id)=> async (dispatch) => {
    try {
      await axios.delete(`http://localhost:4000/api/contact/deleteContact/${id}`);
      dispatch({
        type:DELETE_CONTACT,
        payload:id
    })
      console.log("delete")
      dispatch(getAllContacts);
    } catch (error) {
      console.log(error);
    }
  };
import React,{useEffect,useState} from 'react'
import NavbarAd from '../navbarAd/navbarAd'
import SidebarAd from '../sideBar/sidebarAd'
import { useDispatch, useSelector } from 'react-redux'
import {deleteUser, getUsers} from "../../../redux/actions/users"

//import { deleteUser } from '../../../redux/actions/users'
const UsersAd=()=> {

  
  const [search,setSearch]=useState("")
  const [role,setRole]=useState("")

  const tab=["tous","Vendeur","Client"]

  const handleChange=(e)=>{
    setSearch(
   e.target.value
    )
    console.log(`e.target.valueeee`, search)
  }
  const searchByRole = e => {
    setRole(
    
     e.target.value
    );   
  };
  console.log(`role`, role)
    const users = useSelector((state) => state.userReducer.users)
    const dispatch = useDispatch()
   
    useEffect(() => {
        dispatch(getUsers())
           }, [dispatch])
        console.log("my data",users)

      const deleteUsers=(id)=>{
        dispatch(deleteUser(id))
      }
    const filterUsers=
     search  && users.filter(el=>
      el.name.toLowerCase().includes(search.toLowerCase())
      
      
      ) 
      
      const filterByRole=
     role  && users.filter(el=>role === "tous"? el :
      el.role.toLowerCase().includes(role.toLowerCase())
    
      )
      // const usersFiltred = 
      // filterUsers && filterByRole ? filterUsers.concat(filterByRole)
      // :users 
      const usersFiltred = 
      filterUsers ? filterUsers : filterByRole? filterByRole
      :users 
      
    return (
        <div>
            <NavbarAd/>
            
          <div className="row mt-5">
              <div className="col-md-2"><SidebarAd/></div>

            <div className="col-md-10 grid-margin stretch-card mt-3">
              <div className="card">
                <div className="card-body">
                  
                  <div className="d-flex">
                  <h4 className="card-title">Listes Utilisateurs</h4>
                    <input className="ms-3" name="search" placeholder="search" onChange={handleChange} />
                    
                      <select value={role} onChange={searchByRole}>
                 {
                   tab.map((el,key)=>(
                      
                        <option >{el}</option>
                     
                   ))
                 }
                    </select>
                    
              
                  </div>
                  <div className="table-responsive">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Nom</th>
                          <th>Email</th>
                          <th>Role</th>
                          <th>Téléphone</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      {/* users
              
              .filter(user => {
                return Name
                  ?users
              .filter(user => user.role !== 'Admin')
              .filter(user => {
                return this.state.sname
                  ? user.name === Name
                  : this.state.srole
                  ? user.role === Role
                  : user;
              }) */}   
                      
                     {
                  
                 
                  usersFiltred
                     .map((el,key)=>(
                          <tbody key={key}>
                          <tr>
                            <td>{el.name}</td>
                            <td>{el.email}</td>
                            <td className="text-danger"> {el.role}<i className="ti-arrow-down"></i></td>
                            <td><label >{el.phone}</label></td>
                            <td><button className="badge badge-danger" onClick={() => deleteUsers(el._id)} >supprimer</button></td>
                          </tr>
                        
                         
                        </tbody>
                     ))}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}
export default UsersAd
// import React, { Component } from "react";
// import { Table } from "reactstrap";

// import { connect } from "react-redux";
// import {deleteUser, getUsers} from "../../../redux/actions/users"


// export class UsersAd extends Component {
//   state = {
//     Name: "",
//     Role: ""
//   };
//   searchByName = name => {
//     this.setState({ Name: name});
//   };
//   searchByRole = role => {
//     this.setState({ Role: role});
//   };
//   componentDidMount() {

//     this.props.getUsers();
   
//   }
//   render() {
//     console.log("users",this.props.users)
//     return (
//       <>
//         <SearchUser 
//           searchByName={this.searchByName}
//           searchByRole={this.searchByRole}
//         />
//         <Table hover className="table-hover ">
//           <thead>
//             <tr>
//               <th></th>
//               <th scope="col">Nom</th>
//               <th scope="col">Email</th>
//               <th scope="col">Role</th>
//               <th scope="col">Numéro de téléphone</th>
//               <th scope="col"></th>
//             </tr>
//           </thead>
//           <tbody>
//             {this.props.users
//               .filter(user => user.role !== 'Admin')
//               .filter(user => {
//                 return this.state.sname
//                   ? user.name === this.state.sname
//                   : this.state.srole
//                   ? user.role === this.state.srole
//                   : user;
//               })
              
//               .map(user => (
//                 <tr key={user._id} className="droprole">
//                   <td>
//                     <i class="fa fa-user" aria-hidden="true"></i>
//                   </td>
//                   <td>{user.name}</td>
//                   <td>{user.email}</td>
//                   <td>{user.role}</td>
//                   <td>{user.phone}</td>
//                   <td>
//                     <button
//                       type="button"
//                       class="btn btn-danger"
//                       onClick={() => this.props.deleteUser(user._id)}
//                     >
//                       Supprimer
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//           </tbody>
//         </Table>
//       </>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   users: state.userReducer.users
  
// });
// export default connect(
//   mapStateToProps,
//   { deleteUser ,getUsers}
// )(UsersAd);

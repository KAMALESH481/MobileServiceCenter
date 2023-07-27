import axios from "axios";
import "./table.css"
import React, { Component } from "react";
class AdminLogin extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://localhost:8085/get1')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        
      
      <div className="showans">
        <div></div>
        {this.state.data.map(user => (
          <div className="div" key={user.email}>
          <div className="lab1"><h1 className="tabcon">Name:{user.name}</h1></div>
            <div className="lab1"><h1 className="tabcon">Email:{user.email}</h1></div>
            <div className="lab1"><h1 className="tabcon">Restaurant:{user.res}</h1></div>
            <div className="lab1"><h1 className="tabcon">Food:{user.food}</h1></div>
            <div className="lab1"><h1 className="tabcon">Persons:{user.no_person}</h1></div>
            <div className="lab1"><h1 className="tabcon">Date:{user.date}</h1></div>
            <div className="lab1"><h1 className="tabcon">Time:{user.time}</h1></div>
          </div>
        ))}
      </div>
    );
  }}
  
export default AdminLogin;
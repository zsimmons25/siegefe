import React, { useState, Component } from "react";
import axios from "axios";
import Login from "../functions/Login"
import Dashboard from "./Dashboard";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewlogin: this.props.viewlogin,
      loggedin: this.props.loggedin,
    };
  }
  componentDidMount() {
    this.refreshList();
  }
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  refreshList = () => {
    axios
      .get("http://localhost:9001/api/operators/")
      .then(res => this.setState({ operator: res.data }))
      .catch(err => console.log(err));
  };
  render() {
    if ( this.state.viewlogin ) {
      return (
        <div className="Admin">
          <Login />
        </div>
      )
      } else if ( this.state.loggedin ) {
      return (
        <div className="Admin">
          <Dashboard />
        </div>
      )
    }
    }
  }
export default Admin;
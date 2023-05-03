import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Nav extends Component{
    render() {
      return (
          <h1 className='text text-uppercase text-center my-4 bg-slate-800 text-slate-200'>
            <Link to="/operators/faction" className="">
              <button className="btn btn-default mx-4">View by Faction</button>
            </Link>
            <Link to="/operators/release" className="">
              <button className="btn btn-default mx-4">View by Release</button>
            </Link>
            <Link to="/operators/all" className="">
              <button className="btn btn-default mx-4">View All</button>
            </Link>
          </h1>
      );
      }
    }

    export default Nav;
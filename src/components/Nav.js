import React, { Component } from "react";
import { Link } from 'react-router-dom';


class Nav extends Component {
    constructor(props) {
      super(props);
      this.state = {
        viewbyfaction: this.props.viewbyfaction,
        viewbyrelease: this.props.viewbyrelease,
        viewall: this.props.viewall,
      };
    }
    render() {
      return (
          <h1 className='text text-uppercase text-center my-4 bg-slate-800 text-slate-200'>
            <Link to="/operators/faction">
            <button className="btn btn-default mx-4" onClick={this.viewFaction}>View by Faction</button>
            </Link>
            <Link to="/operators/release">
            <button className="btn btn-default mx-4" onClick={this.viewRelease}>View by Release</button>
            </Link>
            <Link to="/operators/all">
            <button className="btn btn-default mx-4" onClick={this.viewAll}>View All</button>
            </Link>
          </h1>
      );
      }
    }

    export default Nav;
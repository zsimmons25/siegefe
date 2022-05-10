import React, { Component } from "react";
import Modal from "../components/Modal";
import axios from "axios";
import Nav from "../components/Nav";
import { Link } from 'react-router-dom';


class Operators extends Component {
    constructor(props) {
      super(props);
      this.state = {
        activeItem: {
          operator: ""
        },
        operator: [],
        viewbyfaction: this.props.viewbyfaction,
        viewbyrelease: this.props.viewbyrelease,
        viewall: this.props.viewall,
        faction: this.props.faction,
        release: this.props.release
      };
    }
    componentDidMount() {
      this.refreshList();
    }
    toggle = () => {
      this.setState({ modal: !this.state.modal });
    };
    viewItem = item => {
      this.setState({ activeItem: item, modal: !this.state.modal });
    };
    refreshList = () => {
      axios
        .get("http://localhost:9001/api/operators/")
        .then(res => this.setState({ operator: res.data }))
        .catch(err => console.log(err));
    };
    renderOps = (s,e) => {
      const newItems = this.state.operator;
      return newItems.slice(s,e).map(item => (
          <div className='flex items-center w-80 mx-5 bg-slate-800 text-slate-200'
            operator={item.operator} onClick={() => this.viewItem(item)}>
              <img src={require(`../Images/${item.operator}_Badge.png`)} alt="badge"></img>
              {item.operator}
              <img src={require(`../Images/${item.operator}.png`)} alt="op"></img>
          </div>
      ));
    };
    render() {
      let factionops = []
      let releaseops = []
      if (this.state.faction >=20) {
        factionops = (
          <ol className='flex'>
            {this.renderOps(this.state.faction,(this.state.faction + 2))}
          </ol>
        )
      }else{
        factionops = (
          <ol className='flex'>
            {this.renderOps(this.state.faction,(this.state.faction + 4))}
          </ol>
        )
      }
      if ( this.state.viewbyfaction ) {
        return (
        <main className="content">
          <Nav/>
          <h2 className='text text-center my-4 bg-slate-800 text-slate-200'>
            <Link to="/operators/faction/fbi">
            <button className="btn btn-default mx-4">FBI</button>
            </Link>
            <Link to="/operators/faction/gign">
            <button className="btn btn-default mx-4">GIGN</button>
            </Link>
            <Link to="/operators/faction/sas">
            <button className="btn btn-default mx-4">SAS</button>
            </Link>
            <Link to="/operators/faction/spetsnaz">
            <button className="btn btn-default mx-4">Spetsnaz</button>
            </Link>
            <Link to="/operators/faction/gsg9">
            <button className="btn btn-default mx-4">GSG 9</button>
            </Link>
            <Link to="/operators/faction/jtf2">
            <button className="btn btn-default mx-4">JTF-2</button>
            </Link>
            <Link to="/operators/faction/seals">
            <button className="btn btn-default mx-4">SEALS</button>
            </Link>
          </h2>
          {factionops}
          {this.state.modal ? (
            <Modal
              activeItem={this.state.activeItem}
              toggle={this.toggle}
            />
          ) : null}
        </main>
        )
      }
      if (this.state.release === 0) {
        releaseops = (
          <ol>
            {this.renderOps(0,20)}
          </ol>
        )
      }
      if (this.state.release === 1) {
        releaseops = (
          <ol>
            {this.renderOps(20,22)}
          </ol>
        )
      }
      if (this.state.release === 2) {
        releaseops = (
          <ol>
            {this.renderOps(22,24)}
          </ol>
        )
      }
      if ( this.state.viewbyrelease ) {
        return(
          <main>
            <Nav/>
            <h2 className='text text-center my-4 bg-slate-800 text-slate-200'>
              <Link to="/operators/release/b">
              <button className="btn btn-default mx-4">Base</button>
              </Link>
              <Link to="/operators/release/y1">
              <button className="btn btn-default mx-4">Year1</button>
              </Link>
              <Link to="/operators/release/y2">
              <button className="btn btn-default mx-4">Year2</button>
              </Link>
            </h2>
            {releaseops}
            {this.state.modal ? (
              <Modal
                activeItem={this.state.activeItem}
                toggle={this.toggle}
              />
            ) : null}
          </main>
        )
      }
      if ( this.state.viewall ) {
        return (
        <main className="content">
          <Nav/>
          <ol className='flex flex-wrap'>
            {this.renderOps(0,25)}
          </ol>
          {this.state.modal ? (
            <Modal
              activeItem={this.state.activeItem}
              toggle={this.toggle}
            />
          ) : null}
        </main>
        )
      }
      }
    }

    export default Operators;
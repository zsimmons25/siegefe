import React, { Component } from "react";
import Modal from "./Modal";
import axios from "axios";
import Nav from "./Nav";
import { Link } from 'react-router-dom';
import { release } from "os";


class Operators extends Component <any, any> {
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
    renderOps = (t,f) => {
      const newItems = this.state.operator;
      let filteredItems;
      if (t === 'faction'){
        filteredItems = newItems.filter(item => item.faction === f)
      } else if (t === 'release') {
        filteredItems = newItems.filter(item => item.release === f)
      } else {
        filteredItems = newItems
      }
      return filteredItems.map(item => (
          <div className='relative flex items-center mt-1 w-72 bg-slate-800 text-slate-200 rounded-md border-slate-900 border-2'
            operator={item.operator} key={item.id} onClick={() => this.viewItem(item)}>
            <h2 className="flex bg-black bg-opacity-40 w-full h-9 mt-2 absolute bottom-0 text-xl">
              <img className='w-9 h-9' src={require(`../Images/${item.operator}_Badge.png`)} alt="badge"></img>
              <strong className='mt-1'>{item.operator}</strong>
            </h2>
            <img className='w-72 h-60' src={require(`../Images/${item.operator}.png`)} alt="op"></img>
          </div>
      ));
    };
    render() {
      let factionops = []
      let releaseops = []
      factionops = (
        <ol className='flex flex-wrap justify-center space-x-2'>
          {this.renderOps('faction',this.state.faction)}
        </ol>
      )
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
      releaseops = (
        <ol className='flex flex-wrap justify-center space-x-2'>
          {this.renderOps('release',this.state.release)}
        </ol>
      )
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
          <ol className='flex flex-wrap justify-center space-x-2'>
            {this.renderOps('all','all')}
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
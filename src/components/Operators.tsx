import React, { Component } from "react";
import Modal from "./Modal";
import axios from "axios";
import Nav from "./Nav";
import { Link, Outlet } from 'react-router-dom';

interface Props{
  activeItem: any;
  item: any;
  operator: any;
  viewbyfaction: boolean;
  viewbyrelease: boolean; 
  viewall: boolean;
  faction: string;
  release: string;
  modal: boolean;
}
interface State{
  activeItem: any;
  item: any;
  operator: any;
  viewbyfaction: boolean;
  viewbyrelease: boolean; 
  viewall: boolean;
  faction: string;
  release: string;
  modal: boolean;
}


class Operators extends Component <Props, State> {
    constructor(props: Props) {
      super(props);
      this.state = {
        activeItem: {
          operator: [],
        },
        operator: [],
        viewbyfaction: props.viewbyfaction,
        viewbyrelease: props.viewbyrelease,
        viewall: props.viewall,
        faction: props.faction,
        release: props.release
      } as State;
    }
    componentDidMount() {
      this.refreshList();
    }
    componentDidUpdate(prevProps: Props) {
      if (prevProps.viewbyfaction !== this.props.viewbyfaction ||
          prevProps.viewbyrelease !== this.props.viewbyrelease ||
          prevProps.viewall !== this.props.viewall ||
          prevProps.faction !== this.props.faction ||
          prevProps.release !== this.props.release) {
        this.setState({
          viewbyfaction: this.props.viewbyfaction,
          viewbyrelease: this.props.viewbyrelease,
          viewall: this.props.viewall,
          faction: this.props.faction,
          release: this.props.release
        });
      }
    }
    toggle = () => {
      this.setState({ modal: !this.state.modal });
    };
    viewItem = (item: any) => {
      this.setState({ activeItem: item, modal: !this.state.modal });
    };
    refreshList = () => {
      axios
        .get("http://localhost:9001/api/operators/")
        .then(res => this.setState({ operator: res.data }))
        .catch(err => console.log(err));
    };
    renderOps = (t: string,f: string) => {
      const newItems = this.state.operator;
      let filteredItems;
      if (t === 'faction'){
        filteredItems = newItems.filter((item: { faction: string; }) => item.faction === f)
      } else if (t === 'release') {
        filteredItems = newItems.filter((item: { release: string; }) => item.release === f)
      } else {
        filteredItems = newItems
      }
      return filteredItems.map((item: { operator: any }) => (
          <div className='relative flex items-center mt-1 w-72 bg-slate-800 text-slate-200 rounded-md border-slate-900 border-2'
            onClick={() => this.viewItem(item)}>
            <h2 className="flex bg-black bg-opacity-40 w-full h-9 mt-2 absolute bottom-0 text-xl">
              <img className='w-9 h-9' src={require(`../Images/${item.operator}_Badge.png`)} alt="badge"></img>
              <span className='mt-1'>{item.operator}</span>
            </h2>
            <img className='w-72 h-60' src={require(`../Images/${item.operator}.png`)} alt="op"></img>
          </div>
      ));
    };
    render() {
      let factionops:any;
      let releaseops:any;
      let allops:any;
      factionops = (
        <ol className='flex flex-wrap justify-center space-x-2'>
          {this.renderOps('faction',this.state.faction)}
        </ol>
      )
      if ( this.state.viewbyfaction ) {
        return (
        <>
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
        </>
        )
      }
      releaseops = (
        <ol className='flex flex-wrap justify-center space-x-2'>
          {this.renderOps('release',this.state.release)}
        </ol>
      )
      if ( this.state.viewbyrelease ) {
        return(
          <>
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
          </>
        )
      }
      allops = (
        <ol className='flex flex-wrap justify-center space-x-2'>
          {this.renderOps('all','all')}
        </ol>
      )
      if ( this.state.viewall ) {
        return (
        <>
          {allops}
          {this.state.modal ? (
            <Modal
              activeItem={this.state.activeItem}
              toggle={this.toggle}
            />
          ) : null}
        </>
        )
      }
      return (
        <main className="content">
          <Nav/>
          <Outlet/>
        </main>
      )
      }
    }

    export default Operators;
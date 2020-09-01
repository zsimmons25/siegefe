import React, { Component } from "react";
import Modal from "../components/Modal";
import axios from "axios";
import Nav from "../components/Nav";


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
        faction: 50,
        release: 50
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
    viewFaction = () => {
      this.setState({ viewbyfaction: !this.state.viewbyfaction });
    };
    viewRelease = () => {
      this.setState({ viewbyrelease: !this.state.viewbyrelease });
    };
    viewAll = () => {
      this.setState({ viewall: !this.state.viewall });
    };
    selectFaction = (f) => {
      this.setState({ faction: f });
    };
    selectRelease = (r) => {
      this.setState({ release: r });
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
        <>
          <ol 
            operator={item.operator} onClick={() => this.viewItem(item)}>
              <img src={require(`../Images/${item.operator}_Badge.png`)} alt="badge"></img>
              {item.operator}
              <img src={require(`../Images/${item.operator}.png`)} alt="op"></img>
          </ol>
        </>
      ));
    };
    render() {
      let factionops = []
      let releaseops = []
      if (this.state.faction >=20) {
        factionops = (
          <ol>
            {this.renderOps(this.state.faction,(this.state.faction + 2))}
          </ol>
        )
      }else{
        factionops = (
          <ol>
            {this.renderOps(this.state.faction,(this.state.faction + 4))}
          </ol>
        )
      }
      if ( this.state.viewbyfaction ) {
        return (
        <main className="content">
          <Nav/>
          <button className="btn" onClick={() => this.selectFaction(0)}>FBI</button>
          <button className="btn" onClick={() => this.selectFaction(4)}>GIGN</button>
          <button className="btn" onClick={() => this.selectFaction(8)}>SAS</button>
          <button className="btn" onClick={() => this.selectFaction(12)}>Spetsnaz</button>
          <button className="btn" onClick={() => this.selectFaction(16)}>GSG 9</button>
          <button className="btn" onClick={() => this.selectFaction(20)}>JTF-2</button>
          <button className="btn" onClick={() => this.selectFaction(22)}>SEALS</button>
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
            <button className="btn" onClick={() => this.selectRelease(0)}>Base</button>
            <button className="btn" onClick={() => this.selectRelease(1)}>Year1</button>
            <button className="btn" onClick={() => this.selectRelease(2)}>Year2</button>
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
          <ol>
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
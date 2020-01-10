import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: {
        operator: ""
      },
      operator: []
    };
  }
  componentDidMount() {
    this.refreshList();
  }
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
        <span
          operator={item.operator} onClick={() => this.viewItem(item)}>
            <img src={require(`./Images/${item.operator}_Badge.png`)} alt="badge"></img>
            {item.operator}
            <img src={require(`./Images/${item.operator}.png`)} alt="op"></img>
        </span>
      </>
    ));
  };
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };
  viewItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };
  render() {
    return (
      <main className="content">
        <h1 className="text text-uppercase text-center my-4">R6 Counter</h1>
        <ul className="list-group list-group-flush">
          Base Operators
          {this.renderOps(0,20)}
        </ul>
        <ul className="list-group list-group-flush">
          Year 1 Operators
          {this.renderOps(20,22)}
        </ul>
        <ul className="list-group list-group-flush">
          Year 2 Operators
        </ul>
        <ul className="list-group list-group-flush">
          Year 3 Operators
        </ul>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
          />
        ) : null}
      </main>
    );
  }
}
export default App;
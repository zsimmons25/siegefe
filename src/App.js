import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Operators from "./components/Operator"
const viewbyfaction = true;
const viewbyrelease = true;
const viewall = true;

class App extends Component {
  render() {
    return (
      <Router>
        <h1 className="text text-uppercase text-center my-4">R6 Counter</h1>
        <Route path="/" exact render={(props) => <Operators {...props} viewbyfaction={viewbyfaction}/>} />
        <Route path="/operators" exact render={(props) => <Operators {...props} viewbyfaction={viewbyfaction}/>} />
        <Route path="/operators/faction" exact render={(props) => <Operators {...props} viewbyfaction={viewbyfaction}/>} />
        <Route path="/operators/release" exact render={(props) => <Operators {...props} viewbyrelease={viewbyrelease}/>} />
        <Route path="/operators/all" exact render={(props) => <Operators {...props} viewall={viewall}/>} />
      </Router>
    )
  }
}

export default App;
import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import routes from "./components/Routes"

class App extends Component {
  render() {
    return (
      <Router className='bg-slate-800'>
        <h1 className='text text-uppercase text-center mb-4 bg-slate-800 text-slate-200'>R6 Counter</h1>
        {routes.map(({ path, component: C, viewbyfaction, viewbyrelease, viewall, faction, release}) => (
          <Route
          path={path}
          exact
          render={(props) => <C {...props} viewbyfaction={viewbyfaction} viewbyrelease={viewbyrelease} viewall={viewall} faction={faction} release={release} />}
          />
        ))}
      </Router>
    )
  }
}

export default App;
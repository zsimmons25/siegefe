import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import routes from "./components/Routes"
import { Link } from 'react-router-dom';
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Router className='bg-slate-800'>
            <div className='flex items-center justify-between'>
              <Link to="/operators">
              <button className="btn btn-default mx-4 text-slate-200" onClick={this.viewbyfaction}>Ops</button>
              </Link>
              <h1 className='text text-slate-200'>R6 Counter</h1>
              <Link to="/login">
              <button className="btn btn-default mx-4 text-slate-200" onClick={this.viewlogin}>Login</button>
              </Link>
            </div>
            {routes.map(({ path, component: C, viewbyfaction, viewbyrelease, viewall, faction, release, viewlogin, loggedin}) => (
              <Route
              path={path}
              exact
              render={(props) => <C {...props} viewbyfaction={viewbyfaction} viewbyrelease={viewbyrelease} viewall={viewall} faction={faction} release={release} viewlogin={viewlogin} loggedin={loggedin} />}
              />
            ))}
          </Router>
        </PersistGate>
      </Provider>
    )
  }
}

export default App;
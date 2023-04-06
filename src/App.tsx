import React, { Component, lazy, PropsWithChildren, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import routes from "./components/Routes"
import { Link } from 'react-router-dom';
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute"

interface Props{
  viewbyfaction: boolean;
  viewbyrelease: boolean; 
  viewall: boolean;
  faction: string;
  release: string;
  admin: boolean;
  loggedin: boolean;
  editops: boolean;
  imgmng: boolean;
  queue: boolean;
}
interface State{
  viewbyfaction: boolean;
  viewbyrelease: boolean; 
  viewall: boolean;
  faction: string;
  release: string;
  admin: boolean;
  loggedin: boolean;
  editops: boolean;
  imgmng: boolean;
  queue: boolean;
}

class App extends Component <Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {
      viewbyfaction: props.viewbyfaction,
      viewbyrelease: props.viewbyrelease,
      viewall: props.viewall,
      faction: props.faction,
      release: props.release,
      admin: props.admin,
      loggedin: props.loggedin,
      editops: props.editops,
      imgmng: props.imgmng,
      queue: props.queue,
    } as State;
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <Router>
            <div className='flex items-center justify-between'>
              <Link to="/operators">
              <button className="btn btn-default mx-4 text-slate-200">Ops</button>
              </Link>
              <h1 className='text text-slate-200'>R6 Counter</h1>
              <Link to="/admin">
              <button className="btn btn-default mx-4 text-slate-200">Admin</button>
              </Link>
            </div>
            {routes.map(({ path, component: C, viewbyfaction, viewbyrelease, viewall, faction, release, admin}) => (
              <Route
              key={path}
              path={path}
              exact
              render={(props) => <C {...props} viewbyfaction={viewbyfaction} viewbyrelease={viewbyrelease} viewall={viewall} faction={faction} release={release} admin={admin}/>}
              />
            ))}
          </Router>
        </PersistGate>
      </Provider>
    )
  }
}

export default App;
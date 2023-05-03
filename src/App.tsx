import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"
import routes from "./components/Routes"
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
//import ProtectedRoute from "./components/ProtectedRoute"

interface Props{
  admin: boolean;
  loggedin: boolean;
  editops: boolean;
  imgmng: boolean;
  users: boolean;
}
interface State{
  admin: boolean;
  loggedin: boolean;
  editops: boolean;
  imgmng: boolean;
  users: boolean;
}

class App extends Component <Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {
      admin: props.admin,
      loggedin: props.loggedin,
      editops: props.editops,
      imgmng: props.imgmng,
      users: props.users,
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
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={React.cloneElement(route.element, route.props)}
                >
                  {route.children?.map((childRoute) => (
                    <Route
                      key={childRoute.path}
                      path={childRoute.path}
                      element={React.cloneElement(childRoute.element, childRoute.props)}
                    />
                  ))}
                </Route>
              ))}
            </Routes>
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
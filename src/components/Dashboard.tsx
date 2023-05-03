import React from "react";
import {Link} from "react-router-dom"
import {useNavigate} from "react-router";
import {useDispatch, /*useSelector*/} from "react-redux";
//import {RootState} from "../store";
import authSlice from "../store/slices/auth";

const Dashboard = () => {
  const handleLogout = () => {
    dispatch(authSlice.actions.logout());
    navigate('/admin');
  };
  /*const account = useSelector((state: RootState) => state.auth.account);*/
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center">
        <h1 className="text text-slate-200 text-center text-2xl">Welcome</h1>
        <div className="content-center mt-2 w-1/4 h-38 bg-zinc-700 text-slate-200 rounded-md border-slate-900 border-2">
            <h2 className="text text-slate-200 text-center">Administrative Actions</h2>
            <div className="bg-slate-900 h-1.5"></div>
            <div className="flex flex-col items-center justify-center text-center">
                <Link to="/editops" className='mt-2'>
                  <button className="btn btn-default">Edit Operators</button>
                </Link>
                <Link to="/users" className='mt-2'>
                  <button className="btn btn-default">Users</button>
                </Link>
                <button onClick={handleLogout} className='mt-1'>Logout</button>
            </div>
        </div>
    </div>
  );
};

export default Dashboard;

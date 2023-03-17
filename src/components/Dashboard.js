import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useLocation} from "react-router";
import authSlice from "../store/slices/auth";
import {fetcher} from "../utils/axios";
import {UserResponse} from "../utils/types";
import {RootState} from "../store";


const Dashboard = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogout = () => {
    dispatch(authSlice.actions.logout());
    history.push("/login");
  };
  const username = "Zach"
  return (
    <div>
        <div>
            <button
            onClick={handleLogout}
            >
            Logout
            </button>
        </div>
            <div className="text text-slate-200 flex-col justify-center items center text-center">
            Welcome, {username}
            </div>
        </div>
  );
};

export default Dashboard;
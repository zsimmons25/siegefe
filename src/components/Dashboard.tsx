import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {BrowserRouter as Route, Link} from "react-router-dom"
import {RootState} from "../store";
/*import {fetcher} from "../utils/axios";
import {AccountResponse} from "../utils/types";
import useSWR from 'swr';*/
import authSlice from "../store/slices/auth";

interface LocationState {
  userId: string;
}


const Dashboard = () => {
  const handleLogout = () => {
    dispatch(authSlice.actions.logout());
    history.push("/login");
  };
  const account = useSelector((state: RootState) => state.auth.account);
  const dispatch = useDispatch();
  const history = useHistory();
  // const userId = account?.user.id;
  // const user = useSWR<AccountResponse>(`/users/${userId}/`, fetcher)
  return (
    <div className="flex flex-col items-center justify-center">
        <h1 className="text text-slate-200 text-center text-2xl">Welcome, {/*{userId}*/}</h1>
        <div className="content-center mt-8 w-1/4 h-48 bg-zinc-700 text-slate-200 rounded-md border-slate-900 border-2">
            <h2 className="text text-slate-200 text-center">Administrative Actions</h2>
            <h3 className="bg-slate-900 h-1.5"></h3>
            <div className="flex flex-col items-center justify-center text-center">
                <Link to="/editops" className='mt-2'>
                <button className="btn btn-default">Edit Operators</button>
                </Link>
                <Link to="/imgmng" className='mt-2'>
                <button className="btn btn-default">Image Manager</button>
                </Link>
                <Link to="/queue" className='mt-2'>
                <button className="btn btn-default">Approval Queue</button>
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

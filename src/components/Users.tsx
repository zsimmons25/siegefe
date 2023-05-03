import React, { useEffect, useState } from "react";
import axios from "axios";


const Users = () => {
    useEffect(() => {
    getallusers();
    }, []);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const getallusers = () => {
    axios
    .get("http://localhost:9001/api/users/")
    .then(response => {
        setData(response.data);
        setLoading(false);
    })
    .catch(error => {
        console.log(error);
    });
    }
    return (
    <div className="flex flex-col items-center h-full">
        <div className="mt-4 flex flex-col items-center justify-center bg-zinc-700 w-1/2 h-fit ">
            <h2 className="text text-slate-200 text-center w-full">Users</h2>
            <div className="bg-slate-900 h-1.5 w-full"></div>
            <div className="flex flex-col items-center w-full h-fit">
                <table className="table-auto w-full h-fit bg-zinc-700 text-slate-200">
                    <thead>
                    </thead>
                    <tbody>
                        {data.map(item => (
                        <tr key={item.id} className='flex justify-between mx-4 mt-2'>
                            <td className="w-3/4 text-center">{item.username}</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex items-center justify-center w-full text-slate-200">
                <div>
                    <button>Add User</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Users;
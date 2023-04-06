import React, { useEffect, useState } from "react";
import axios from "axios";


const ImgMng = () => {
  useEffect(() => {
    getallimgs();
  }, []);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getallimgs = () => {
    axios
    .get("http://localhost:9001/api/operators/")
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
            <h2 className="text text-slate-200 text-center w-full">Image Files</h2>
            <h3 className="bg-slate-900 h-1.5 w-full"></h3>
            <div className="flex flex-col items-center w-full h-fit">
              <table className="table-auto w-full h-fit bg-zinc-700 text-slate-200">
                <thead>
                </thead>
                <tbody>
                  {data.map(item => (
                    <tr key={item.id} className='flex justify-between mx-4 mt-2'>
                      <td>{item.id}</td>
                      <td className="w-3/4 text-center">{item.operator}</td>
                      <td>View</td>
                      <td>Delete</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-center w-full text-slate-200">
                <div className="mx-1">
                    <button>Upload Image</button>
                </div>
                <div className="mx-1">
                    <button>Upload Zip</button>
                </div>
            </div>
        </div>
    </div>
  );
};
  
  export default ImgMng;
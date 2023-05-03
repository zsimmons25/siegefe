import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import EditModal from "./EditModal";

interface Props{
  modal: boolean;
  loggedin: boolean;
  activeItem: {
    item: []
    operator: string
    faction: string
    gadget: string
    equipment: string
    equip1: string
    equip2: string
    armor: string
    speed: string
    side: string
    weapons: string
  },
  operator: [],
}

const Editops: React.FC<Props> = (props) => {
  const getallops = useCallback(() => {
    axios
    .get("http://localhost:9001/api/operators/")
    .then(response => {
      setData(response.data);
      setLoading(false);
    })
    .catch(error => {
      console.log(error);
    });
  }, [])
  useEffect(() => {
    getallops();
  }, [getallops]);
  const [state, setState] = useState({
    activeItem: {
      id: "",
      operator: "",
      faction: "",
      gadget: "",
      equipment: "",
      equip1: "",
      equip2: "",
      armor: "",
      speed: "",
      side: "",
      weapons: "",
    },
    operator: [],
    modal: false,
  });
  const viewItem = (item: any) => {
    setState({ ...state, activeItem: item, modal: !state.modal });
  };
  const deleteItem = (item: any) => {
    axios
      .delete(`http://localhost:9001/api/operators/${item.id}/`)
      .then(function (res) {
        console.log(res);
        getallops();
        alert('Operator Deleted');
     })
  };
  const toggle = () => {
    setState({ ...state, modal: !state.modal });
  };
  const addOp = () => {
    const newid = 26;
    axios({
      method: 'POST',
      url: `http://localhost:9001/api/operators/`,
      data: {id: newid,operator:"New Operator",faction:"_",gadget:"_",equip1:"_",equip2:"_",armor:1,speed:1,side:"_",prim1:"_",prim2:"_",prim3:"_",secon1:"_",secon2:"_",count1:"_",count1p:"_",count2:"_",count2p:"_",release:"_"},
      headers: {
          'Content-Type': 'application/json',
        },
    })
      .then(function (res) {
         console.log(res);
         getallops();
         alert('Operator Added');
      })
      .catch(function (res) {
         console.log(res);
    });
  };
  const [data, setData] = useState([]);
  const [, setLoading] = useState(true);
  return (
    <div className="flex flex-col items-center h-full">
        <div className="mt-4 flex flex-col items-center justify-center bg-zinc-700 w-1/2 h-fit ">
            <h2 className="text text-slate-200 text-center w-full">Operators</h2>
            <div className="bg-slate-900 h-1.5 w-full"></div>
            <div className="flex flex-col items-center w-full h-fit">
              <table className="table-auto w-full h-fit bg-zinc-700 text-slate-200">
                <thead>
                </thead>
                <tbody>
                  {data.map(item => (
                    <tr key={item.id} className='flex justify-between mx-4 mt-2'>
                      <td className="w-3/4 text-center">{item.operator}</td>
                      <td><button onClick={() => viewItem(item)}>Edit</button></td>
                      <td><button onClick={() => deleteItem(item)}>Delete</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <button className="text-slate-200" onClick={addOp}>Add Op</button>
            </div>
            {state.modal ? (
                <EditModal activeItem={state.activeItem} data={data} toggle={toggle}/>
                ) : null}
        </div>
    </div>
  );
};
  
  export default Editops;
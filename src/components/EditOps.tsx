import React, { useEffect, useState } from "react";
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
  useEffect(() => {
    getallops();
  }, []);
  const [state, setState] = useState({
    activeItem: {
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
    console.log("Operator Deleted")
  };
  const toggle = () => {
    setState({ ...state, modal: !state.modal });
  };
  const addOp = () => {
    console.log("New Operator Added")
  };
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getallops = () => {
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
            <h2 className="text text-slate-200 text-center w-full">Operators</h2>
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
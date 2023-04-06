import React, { useEffect, useState } from "react";
import axios from "axios";


const Approval = () => {
  useEffect(() => {
    getallsubmissions();
  }, []);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getallsubmissions = () => {
    axios
    .get("http://localhost:9001/api/submissions/")
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
        <div className="mt-4 flex flex-col items-center justify-center w-1/2 h-fit text-slate-200">
            No submissions pending review
        </div>
    </div>
  );
};
  
  export default Approval;
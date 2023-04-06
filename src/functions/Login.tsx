import React from "react";
import axios from "axios";
import * as Yup from "yup";
import { useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import authSlice from "../store/slices/auth";


function Login() {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const REACT_APP_API_URL = "http://localhost:9001/users"

    const handleLogin = (username: string, password: string, email: string) => {
        axios
            .post(`${REACT_APP_API_URL}/auth/login/`, { username, password, email })
            .then((res) => {
            dispatch(
                authSlice.actions.setAuthTokens({
                token: res.data.access,
                refreshToken: res.data.refresh,
                })
            );
            dispatch(authSlice.actions.setAccount(res.data.username));
            setLoading(false);
            history.push("/dashboard");
            })
            .catch((err) => {
            setMessage("error");
            });
    };
    const formik = useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      onSubmit: (values) => {
        setLoading(true);
        handleLogin(values.username, values.password, `${values.username}@siege.com`);
      },
      validationSchema: Yup.object({
        username: Yup.string().trim().required("Required"),
        password: Yup.string().trim().required("Required"),
      }),
    });
    return (
        <form className="fixed flex justify-center items-center w-full h-40" onSubmit={formik.handleSubmit}>
            <div className="flex-col justify-center items center text-center">
            <input className="appearance-none bg-transparent w-full text-center text-slate-300 mb-3 focus:outline-none" type="username" placeholder="Username" aria-label="Username" id="username" name="username" value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur}>
            </input>
            {formik.errors.username ? <div>{formik.errors.username} </div> : null}
            <input className="appearance-none bg-transparent w-full text-center text-slate-300 mb-3 focus:outline-none" type="password" placeholder="Password" aria-label="Password" id="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}>
            </input>
            {formik.errors.password ? <div>{formik.errors.password} </div> : null}
            <button className="bg-slate-500 hover:bg-slate-700 border-slate-500 hover:border-slate-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit" disabled={loading}>
                Login
            </button>
            </div>
            <div className="text-danger text-center my-2" hidden={false}>
            </div>
        </form>
    )
  }

  export default Login;
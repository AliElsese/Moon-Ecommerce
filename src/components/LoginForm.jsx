import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as YUP from 'yup';
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store";

export default function LoginForm() {
    const login = useAuthStore((state) => state.login);

    let navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    async function handleLogin(values) {
        // Api login in strapi: http://localhost:1337/api/auth/local
        const { identifier, password } = values;
        try {
            const res = await axios.post("http://localhost:1337/api/auth/local", { identifier, password });
            login(res.data.jwt, res.data.user);
            toast.success(`Login Successfully!`);
            navigate("/");
        } catch (err) {
            console.log(err)
        }
    }

    // Formik YUp Schema
    let loginFormSchema = YUP.object({
        identifier: YUP.string().email('Invalid email form').required('Email is required'),
        password: YUP.string().required('Password is required')
    })

    return (
        <>
            <div className="h-screen flex items-center justify-center">
                <Formik initialValues={{ identifier: '', password: '' }} onSubmit={(values) => { handleLogin(values) }} validationSchema={loginFormSchema}>
                    <Form className="bg-white px-6 pt-6 pb-8 w-130 flex flex-col items-center gap-5 rounded-lg shadow-2xl">
                        <h2 className="text-[32px] font-semibold font-Inter text-Natural-900 capitalize">create account</h2>
                        <div className="w-full">
                            <div className="w-full">
                                <Field name={"identifier"} type="email" placeholder="Email" className="mb-3 w-full py-4 px-3.5 bg-white border border-Natural-100 rounded-md" />
                                <ErrorMessage className="text-red-600" component="div" name="identifier" />
                            </div>
                            <div className="w-full relative">
                                <Field name={"password"} type={showPassword ? 'text' : 'password'} placeholder="Password" className="mb-4 w-full py-4 px-3.5 bg-white border border-Natural-100 rounded-md" />
                                <ErrorMessage className="text-red-600" component="div" name="password" />
                                <div onClick={() => { setShowPassword(!showPassword) }}>
                                    {
                                        showPassword ? (<FaEyeSlash size={20} className="absolute top-5 right-4" />) : (<FaEye size={20} className="absolute top-5 right-4" />)
                                    }
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1.5 text-Natural-600 font-Inter font-normal text-[14px]">
                                    <input type="checkbox" className="w-5 h-5 rounded-[3px] border border-Natural-200" />
                                    <span className="capitalize">remember me</span>
                                </div>
                                <div>
                                    <Link to={"/forget-password"} className="text-Natural-600 font-Inter font-normal text-[14px] capitalize">forget password</Link>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="w-full py-3.5 px-8 bg-WarmBlack text-white rounded-full font-Inter font-semibold text-[14px] capitalize cursor-pointer">login</button>
                        <div>
                            <p className="text-Natural-600 font-Inter font-normal text-[14px]">Don’t have account?
                                <Link to={"/register"} className="text-Natural-800 font-Inter font-medium text-[14px] capitalize"> register </Link>
                            </p>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    )
}
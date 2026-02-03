import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as YUP from 'yup';
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";


export default function RegisterForm() {
    let navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Handle With Formik
    async function handleRegister(values) {
        // Api register in strapi: http://localhost:1337/api/auth/local/register
        // if (values.password === values.confirmPassword) {
        //     let registerData = {
        //         email: values.email,
        //         username: values.username,
        //         password: values.password
        //     }
        //     await axios.post('http://localhost:1337/api/auth/local/register', registerData).then((res) => {
        //         // console.log(res)
        //         toast.success('Successfully Registered!');
        //         navigate('/login');
        //     }).catch((err) => {
        //         // console.log(err.response.data.error.message)
        //         toast.error(`${err.response.data.error.message}`);
        //     })
        // } else {
        //     toast.error(`Password and confirm password not matching!`);
        // }

        const { email, username, password, confirmPassword } = values;
        if (password !== confirmPassword) {
            toast.error(`Password and confirm password not matching!`);
        } else {
            try {
                const res = await axios.post("http://localhost:1337/api/auth/local/register", { email, username, password });
                toast.success(`Register Successfully!`);
                navigate("/login");
            } catch (error) {
                console.log(error);
                // toast.error(`${err.response.data.error.message}`);
            }
        }
    }

    // Formik YUp Schema
    let registerFormSchema = YUP.object({
        email: YUP.string().email('Invalid email form').required('Email is required'),
        username: YUP.string().required('Username is required'),
        password: YUP.string().required('Password is required'),
        confirmPassword: YUP.string().required('Confirm password is required')
    })

    return (
        <>
            <div className="h-screen flex items-center justify-center">
                <Formik initialValues={{ email: '', username: '', password: '', confirmPassword: '' }} onSubmit={(values) => { handleRegister(values) }} validationSchema={registerFormSchema}>
                    <Form className="bg-white px-6 pt-6 pb-8 w-130 flex flex-col items-center gap-5 rounded-lg shadow-2xl">
                        <h2 className="text-[32px] font-semibold font-Inter text-Natural-900 capitalize">create account</h2>
                        <div className="w-full">
                            <div className="w-full">
                                <Field name={"email"} type="email" placeholder="Email" className="mb-3 w-full py-4 px-3.5 bg-white border border-Natural-100 rounded-md" />
                                <ErrorMessage className="text-red-600" component="div" name="email" />
                            </div>
                            <div className="w-full">
                                <Field name={"username"} type="text" placeholder="User Name" className="mb-3 w-full py-4 px-3.5 bg-white border border-Natural-100 rounded-md" />
                                <ErrorMessage className="text-red-600" component="div" name="username" />
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
                            <div className="w-full relative">
                                <Field name={"confirmPassword"} type={showConfirmPassword ? 'text' : 'password'} placeholder="Confirm Password" className="mb-4 w-full py-4 px-3.5 bg-white border border-Natural-100 rounded-md" />
                                <ErrorMessage className="text-red-600" component="div" name="confirmPassword" />
                                <div onClick={() => { setShowConfirmPassword(!showConfirmPassword) }}>
                                    {
                                        showConfirmPassword ? (<FaEyeSlash size={20} className="absolute top-5 right-4" />) : (<FaEye size={20} className="absolute top-5 right-4" />)
                                    }
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1.5 text-Natural-600 font-Inter font-normal text-[14px]">
                                    <input type="checkbox" className="w-5 h-5 rounded-[3px] border border-Natural-200" />
                                    <span className="capitalize">Accept all terms & Conditions</span>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="w-full py-3.5 px-8 bg-WarmBlack text-white rounded-full font-Inter font-semibold text-[14px] capitalize cursor-pointer">create account</button>
                        <div>
                            <p className="text-Natural-600 font-Inter font-normal text-[14px]">Already have account
                                <Link to={"/login"} className="text-Natural-800 font-Inter font-medium text-[14px] capitalize"> login </Link>
                            </p>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    )
}
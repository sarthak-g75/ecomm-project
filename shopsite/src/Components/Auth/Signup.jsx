import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../utils/useSignup";
import { ToastContainer, toast } from 'react-toastify';

const Signup = ()=>{
    const {signup,isLoading,success} = useSignup();
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        password:""
    })

    const handleFormData = (e)=>{
        setFormData((preVal)=>({
            ...preVal,
            [e.target.name]:e.target.value
        }))
    }
    const handleSignup = ()=>{
        if(!formData.name || !formData.email || !formData.password){
            alert("Please Provide all details");
            return;
        }
        else{
            signup(formData);
        }
    }
    useEffect(()=>{
        console.log(success);
        toast(success);
    },[success])
    return (
        <div className="flex justify-center p-14 ">
            <div className="login-container w-96 border border-slate-600 py-[30px] px-[20px] bg-slate-600 rounded-md shadow-2xl shadow-slate-900">
                <span className=" font-bold text-3xl text-center block mb-[15px]">Signup</span>
                <div className="text-field-container flex flex-col">
                    <input type="text" name="name" placeholder="username" className="border mb-[10px] border-slate-500 bg-slate-500 rounded-md p-[6px] outline-none" onChange={handleFormData} value={formData.name} required/>
                    <input type="text" name="email" placeholder="example@example.com" className="mb-[10px] border border-slate-500 bg-slate-500 rounded-md p-[6px] outline-none" onChange={handleFormData} value={formData.email} required/>
                    <input type="password" name="password" className="border border-slate-500 bg-slate-500 rounded-md p-[6px] outline-none" placeholder="password" onChange={handleFormData} value={formData.password} required/>
                </div>
                <div className="flex justify-between mt-[15px]">
                    <span>Already have an Account !</span>
                    <Link to="/login"><span className=" cursor-pointer">Login</span></Link>
                </div>
                <button onClick={handleSignup} className="text-lg bg-slate-500 mt-[10px] px-[10px] py-[5px] rounded-md hover:text-white w-full">
                    {isLoading ? "Loading...":"Signup"}
                </button>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default Signup;
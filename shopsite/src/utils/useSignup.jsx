import { useState } from "react";
import { BACKEND_URL } from "./BACKEND_URL";
import axios from "axios";

const useSignup = ()=>{
    const [isLoading,setIsLoading] = useState(false);
    const [success,setSuccess] = useState();
    const signup = async(formData)=>{
        try{
            setIsLoading(true);
            const data = await axios.post(BACKEND_URL+"/signup",formData);
            setIsLoading(false);
            setSuccess("Signup Successfully");
            return;
        }catch(error){
            setIsLoading(false)
            setSuccess(error.response.data.error);
            return;
        }
    }
    

    return {signup,isLoading,success};
}

export default useSignup;
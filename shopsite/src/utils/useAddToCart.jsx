import { useState } from "react";
import { BACKEND_URL } from "./BACKEND_URL";
import axios from "axios";

const useAddToCart = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [success,setSuccess] = useState();
    const addToCart = async(data) => {
        try {
            setIsLoading(true);
            const response = await axios.post(BACKEND_URL+"/cart",data,{withCredentials:true});
            setIsLoading(false);
            console.log(response);
            setSuccess("Added to Cart")
        } catch (error) {
            console.log(error);
            setIsLoading(false);
            setSuccess("Please Login");
        }
    }
    return{addToCart,isLoading,success};

}
export default useAddToCart;
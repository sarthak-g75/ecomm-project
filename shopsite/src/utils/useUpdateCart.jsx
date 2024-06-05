import { useState } from "react";
import { BACKEND_URL } from "./BACKEND_URL";
import axios from "axios";

const useUpdateCart = (setData) => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState();

    const updateCart = async (id,quantity) => {
        try {
            setIsLoading(true);
            const response = await axios.put(BACKEND_URL+`/updatecart/${id}`,{quantity},{withCredentials: true });
            setIsLoading(false);
            setData(response.data.cart)
        }
        catch (error) {
            setMessage("Cart Updation Failed");
            setIsLoading(false);
        }
    }
    return { updateCart, isLoading, message };
}

export default useUpdateCart;
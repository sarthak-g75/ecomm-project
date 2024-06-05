import axios from "axios";
import { BACKEND_URL } from "./BACKEND_URL";
import { useState } from "react";

const useGetCart = () => {
    const [data, setData] = useState([]);
    const [error,setError] = useState("");
    const [loading,setLoading] = useState(false);
    const getCart = async () => {
        try {
            setLoading(true);
            const data = await axios.get(BACKEND_URL + "/getcart", { withCredentials: true });
            console.log(data);
            setData(data.data.cart);
            setLoading(false);
        } catch (error) {
            setError(error.response.data.error);
            setLoading(false);
        }

    }
    return { getCart,error,data,setError,loading };
}
export default useGetCart;
import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "./BACKEND_URL";

const useSingleProduct = (id)=>{
    const [products,setProducts] = useState([]);
    const [Loading,setLoading] = useState(false);
    const [error,setError] = useState();
    

    const getProducts = async () => {
        try{
        const data = await axios.get(BACKEND_URL + "/product/"+id);
        setProducts(data.data.products);
        console.log(data);
        setLoading(false);
        }catch(error){
            setError(error);
        }
    }

    useEffect(()=>{
        setLoading(true);
        getProducts();
    },[])

    return {products,Loading,error};
}
export default useSingleProduct;
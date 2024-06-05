import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "./BACKEND_URL";

const useProducts = ()=>{
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [Loading,setLoading] = useState(false);
    const [error,setError] = useState();

    const getProducts = async () => {
        try{
        const data = await axios.get(BACKEND_URL + "/allproducts");
        setProducts(data.data.products);
        setFilteredProducts(data.data.products);
        setLoading(false);
        }catch(error){
            setError(error);
        }
    }

    useEffect(() => {
        setLoading(true);
        getProducts();
    }, [])



    return {products,Loading,error,filteredProducts,setFilteredProducts};

}

export default useProducts;
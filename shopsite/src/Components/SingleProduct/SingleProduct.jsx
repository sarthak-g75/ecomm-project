import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer"
import SimilarProducts from "./Similarproducts";
import { useParams } from "react-router-dom";
import useSingleProduct from "../../utils/useSingleProduct";
import useAddToCart from "../../utils/useAddToCart";
import { ToastContainer, toast } from 'react-toastify';

const SingleProduct = () => {
    const [quantity, setQuantity] = useState(1);
    const {id} = useParams();
    const {products,Loading,error} = useSingleProduct(id);
    const {addToCart,isLoading,success} = useAddToCart();

    const handleQuantityChange = (e) => {
        if(e.target.value<1){
            return;
        }
        setQuantity(e.target.value);
    }
    const handleAddToCart =()=>{
        const data = {
            productId:id,
            quantity:quantity
        }
        addToCart(data);
    }
    useEffect(()=>{
        toast(success);
    },[success])
    return (
        <>
            <Navbar />
            <div className="singleproduct-container px-[18px] mt-[10px] md:flex">
                <div className="left md:w-[50%]">
                    <div className="img-container relative min-w-[200px] md:h-full">
                        <img src={products.imageUrl} alt="cloth" className="md:w-[100%]"/>
                    </div>
                </div>
                <div className="right flex flex-col mt-[10px] md:w-[50%] md:ml-[20px]">
                    <span className="text-lg text-slate-500 font-bold sm:text-xl md:text-3xl lg:text-4xl">{products.name}</span>
                    <span className="lg:my-[10px]">{products.description}</span>
                    <span className="text-slate-400 md:text-2xl ">₹{products.price}</span>
                    <div className="md:mt-[10px]">
                        <span className="">Quantity</span>
                        <input type="number" value={quantity} onChange={handleQuantityChange} className="ml-[10px] border border-slate-400 mb-[10px] p-[5px]" />
                    </div>
                    <button className=" bg-slate-500 px-[10px] py-[5px] rounded-md hover:text-white mb-[10px] w-[100px]" onClick={handleAddToCart}>{isLoading ? "Adding...":"Add to Cart"}</button>
                    <hr />
                    <span className="text-lg text-slate-500 font-bold sm:text-xl lg:text-2xl mt-[10px]">Product Details</span>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, aut ad odio libero iure nesciunt eaque ratione ex quisquam adipisci quaerat iste repudiandae eum nisi similique modi culpa ab! Sequi voluptates et hic deleniti voluptatum totam! Earum atque dolores voluptas dolor esse hic similique cupiditate, labore molestiae vero distinctio modi.</span>
                </div>
            </div>

            <SimilarProducts />

            <Footer />
            <ToastContainer/>
        </>
    )
}

export default SingleProduct;
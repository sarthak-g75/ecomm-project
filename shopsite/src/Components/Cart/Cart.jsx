import Navbar from "../Navbar/Navbar";
import p1 from "../../images/p1.jpg";
import { useEffect, useState } from "react";
import useGetCart from "../../utils/useGetCart";
import axios from "axios";
import { BACKEND_URL } from "../../utils/BACKEND_URL";
import useUpdateCart from "../../utils/useUpdateCart";
import { ToastContainer, toast } from 'react-toastify';
import useCheckout from "../../utils/useCheckout";

const Cart = () => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [quantity, setQuantity] = useState(1);
    const { updateCart, isLoading, message } = useUpdateCart(setData);
    const {handleCheckOut,loading} = useCheckout();
    const handleQuantityChange = (id, newValue) => {
        if (newValue < 1) {
            alert("Please remove the item");
            return
        }
        updateCart(id, newValue);
    }
    const getCart = async () => {
        try {
            const response = await axios.get(BACKEND_URL + "/getcart", { withCredentials: true });
            setData(response.data.cart);
            console.log(response);
        } catch (error) {
            setError(error.response.data.error);
        }
    }
    useEffect(() => {
        getCart();
    }, [])
    useEffect(() => {
        toast(message);
    }, [message])
    return (
        <>
            <Navbar />{
                data?.length === 0 ? <div className=" text-center mt-[20px] text-lg font-bold">Cart Is Empty</div> :
                    <div className="cart px-[18px]">
                        <table className="border-collapse table-auto w-full mt-[60px]">
                            <thead className="border border-gray-300 border-l-0 border-r-0">
                                <tr className="py-[10px]">
                                    <td className="w-[100px] py-[10px]">Product</td>
                                    <td className="w-[25px] text-center">Quantity</td>
                                    <td className="w-[25px]  text-center">Price</td>
                                    <td className="w-[25px]  text-center">Total</td>
                                    <td className="w-[25px]  text-center">Remove</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data?.products?.map((item, index) => (
                                        <tr className=" border-b border-gray-300" key={item._id}>
                                            <td className="w-[100px] py-[10px]"><img src={item.imageUrl} alt="product" className="w-[70px]" /></td>
                                            <td className="w-[25px]  text-center">
                                                {isLoading ? "updating" : <input type="number" value={item.quantity} onChange={(e) => handleQuantityChange(item.productId, parseInt(e.target.value))} className="ml-[10px] w-[35px] border border-slate-400 mb-[10px] p-[5px]" />}</td>
                                            <td className="w-[25px]  text-center">{item.price}</td>
                                            <td className="w-[25px] text-center">{item.total}</td>
                                            <td className="w-[25px] text-center"><button className="bg-slate-500 px-[10px] py-[5px] rounded-md hover:text-white  w-[80px]">Remove</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                        <div className="coupon_total mt-[40px] sm:flex sm:items-center sm:justify-between">
                            <div className="flex items-center">
                                <input type="text" name="coupon" placeholder="Enter Coupon Code" className="border border-gray-300 pl-[10px] py-[10px]" />
                                <button className="bg-slate-500 ml-[10px] px-[10px] py-[10px] hover:text-white  w-[100px]">Apply Code</button>
                            </div>
                            <div className="flex flex-col mt-[20px] sm:mt-[0px]">
                                <span>Cart Total :</span>
                                <span className=" text-xl font-bold">₹ {isLoading ? "Updating..." : data?.total}</span>
                                <button className="bg-slate-500  px-[10px] py-[10px] hover:text-white" onClick={(e)=>handleCheckOut(e,data.total,data._id)}>{!loading?"Proceed to checkout":"Please wait..."}</button>
                            </div>
                        </div>
                    </div>}
            <ToastContainer />
        </>
    )
}

export default Cart;
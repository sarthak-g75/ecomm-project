import { IoIosStar } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa6";
import useProducts from "../../utils/useproducts";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Featured = () => {
    const { products, Loading , error} = useProducts();
    useEffect(()=>{
        //handle error
        console.log(error);
    },[error]);
    return (
        <div className="featured-container mt-[50px] px-[18px]">
            <h1 className=" text-lg text-slate-500 font-bold sm:text-xl lg:text-2xl">Featured</h1>
            <div className="card-container mt-[30px] flex overflow-x-scroll gap-8 lg:flex-wrap lg:justify-between">
                {Loading ? (
                    <div>Loading...</div>
                ) : (
                    products?.slice(0,8).map((item, index) => (
                        <div className="cards w-[20%] min-w-[200px] relative rounded-lg border slate-500 px-[12px] py-[10px] shadow-lg cursor-pointer hover:shadow-2xl" key={item._id}>
                            <Link to={`/singleproduct/${item._id}`}>
                                <img src={item.imageUrl} alt="" className="rounded-lg" />
                                <div className="desc-container flex flex-col mt-[20px]">
                                    <span>{item.name}</span>
                                    <span>{item.description}</span>
                                    <div className="rating flex">
                                        <IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} />
                                    </div>
                                    <div className="price-container flex justify-between items-center">
                                        <span>₹{item.price}</span>
                                        
                                        <div className="cart flex w-[40px] h-[40px] rounded-full bg-slate-500 justify-center items-center"><FaCartPlus /></div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                )
                }
            </div>
        </div>
    )
}

export default Featured;
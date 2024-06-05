import { IoIosStar } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa6";
import p1 from "../../images/p1.jpg";
const SimilarProducts = ()=>{
    return(
        <div className="similar-products-container my-[50px] px-[18px] ">
            <h1 className=" text-lg text-slate-500 font-bold sm:text-xl lg:text-2xl">Similar Product</h1>
                <div className="card-container mt-[30px] flex overflow-x-scroll gap-8 ">
                    <div className="cards w-[20%] min-w-[200px] relative rounded-lg border slate-500 px-[12px] py-[10px] shadow-lg cursor-pointer hover:shadow-2xl">
                        <img src={p1} alt="" className="rounded-lg" />
                        <div className="desc-container flex flex-col mt-[20px]">
                            <span>Nike</span>
                            <span>Nike description</span>
                            <div className="rating flex">
                                <IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} />
                            </div>
                            <div className="price-container flex justify-between items-center">
                                <span>₹2999</span>
                                <div className="cart flex w-[40px] h-[40px] rounded-full bg-slate-500 justify-center items-center"><FaCartPlus /></div>
                            </div>
                        </div>
                    </div>

                    <div className="cards w-[20%] min-w-[200px] relative rounded-lg border slate-500 px-[12px] py-[10px] shadow-lg cursor-pointer hover:shadow-2xl">
                        <img src={p1} alt="" className="rounded-lg" />
                        <div className="desc-container flex flex-col mt-[20px]">
                            <span>Nike</span>
                            <span>Nike description</span>
                            <div className="rating flex">
                                <IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} />
                            </div>
                            <div className="price-container flex justify-between items-center">
                                <span>₹2999</span>
                                <div className="cart flex w-[40px] h-[40px] rounded-full bg-slate-500 justify-center items-center"><FaCartPlus /></div>
                            </div>
                        </div>
                    </div>

                    <div className="cards w-[20%] min-w-[200px] relative rounded-lg border slate-500 px-[12px] py-[10px] shadow-lg cursor-pointer hover:shadow-2xl">
                        <img src={p1} alt="" className="rounded-lg" />
                        <div className="desc-container flex flex-col mt-[20px]">
                            <span>Nike</span>
                            <span>Nike description</span>
                            <div className="rating flex">
                                <IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} />
                            </div>
                            <div className="price-container flex justify-between items-center">
                                <span>₹2999</span>
                                <div className="cart flex w-[40px] h-[40px] rounded-full bg-slate-500 justify-center items-center"><FaCartPlus /></div>
                            </div>
                        </div>
                    </div>

                    <div className="cards w-[20%] min-w-[200px] relative rounded-lg border slate-500 px-[12px] py-[10px] shadow-lg cursor-pointer hover:shadow-2xl">
                        <img src={p1} alt="" className="rounded-lg" />
                        <div className="desc-container flex flex-col mt-[20px]">
                            <span>Nike</span>
                            <span>Nike description</span>
                            <div className="rating flex">
                                <IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} />
                            </div>
                            <div className="price-container flex justify-between items-center">
                                <span>₹2999</span>
                                <div className="cart flex w-[40px] h-[40px] rounded-full bg-slate-500 justify-center items-center"><FaCartPlus /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default SimilarProducts;
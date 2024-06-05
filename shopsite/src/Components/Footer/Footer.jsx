import { CiPhone, CiMail, CiCircleChevDown } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
const Footer = () => {
    return (
        <div className="bg-slate-600 px-[18px] py-[50px] flex">
            <div className="brand-info flex flex-col">
                <span className="text-white text-lg font-bold lg:text-2xl">DevShop</span>
                <span className="mt-[10px] text-slate-400 text-lg font-thin md:w-[205px] lg:w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quod corporis mollitia</span>
                <div className="connect mt-[10px] text-white  text-lg font-thin">
                    <div className="flex items-center">
                        <span className="mr-[10px]"><CiPhone /></span>
                        <span>+0123456789</span>
                    </div>
                    <div className="flex items-center">
                        <span className="mr-[10px]"><CiMail /></span>
                        <span>DevShop@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className="lg:ml-[30%] hidden w-full md:flex  sm:ml-[20%]">
                <div className="products-links  ">
                    <span className="text-white text-lg font-bold md:text-lg lg:text-2xl">Product Links</span>
                    <div className="all-products mt-[10px] text-slate-400 text-lg font-thin flex flex-col ">
                        <span className="hover:text-white cursor-pointer">Categories</span>
                        <span className="hover:text-white cursor-pointer">New Arrivals</span>
                        <span className="hover:text-white cursor-pointer">Features</span>
                        <span className="hover:text-white cursor-pointer">Collections</span>
                    </div>
                </div>

                <div className="products-links sm:ml-[10%] lg:ml-[30%]">
                    <span className="text-white text-lg font-bold md:text-lg lg:text-2xl">Join Our NewsLetter</span>
                    <div className="all-products mt-[10px] text-slate-400 text-lg font-thin flex flex-col ">
                        <span className="flex items-center justify-between">Drop Email here <span><CiCircleChevDown size={30}/></span></span>
                        <div className="flex  mt-[20px] items-center">
                            <input type="text"  placeholder="Enter Your Email" className="pl-[10px] bg-slate-600 border border-slate-400"/>
                            <span className="bg-white">
                                <IoIosArrowRoundForward size={30}/>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
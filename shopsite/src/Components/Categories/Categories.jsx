
import jacket from "../../images/jacket.svg";
const Categories = () => {


    return (
        <div className="categories-container px-[18px] mt-[50px]">
            <h1 className=" text-lg text-slate-500 font-bold sm:text-xl lg:text-2xl">Categories</h1>
            <div className="boxes-container flex  mt-[30px] overflow-x-scroll justify-between gap-4">
                <div className="boxes bg-slate-300 flex flex-col justify-center items-center p-[20px] lg:w-[16.7%]  cursor-pointer group hover:bg-slate-600">
                    <img src={jacket} alt="jackets" className="w-[100px] filter group-hover:brightness-0 group-hover:invert"/>
                    <span className="group-hover:text-white">Jacket</span>
                </div>
                <div className="boxes group  bg-slate-300 flex flex-col justify-center items-center p-[20px] lg:w-[16.7%]  cursor-pointer hover:bg-slate-600">
                    <img src={jacket} alt="jackets" className="w-[100px] filter group-hover:brightness-0 group-hover:invert"/>
                    <span className="group-hover:text-white">Shirts</span>
                </div>
                <div className="boxes group  bg-slate-300 flex flex-col justify-center items-center p-[20px] lg:w-[16.7%]  cursor-pointer hover:bg-slate-600">
                    <img src={jacket} alt="jackets" className="w-[100px] filter group-hover:brightness-0 group-hover:invert" />
                    <span className="group-hover:text-white">Pants</span>
                </div>
                <div className="boxes group  bg-slate-300 flex flex-col justify-center items-center p-[20px] lg:w-[16.7%]  cursor-pointer hover:bg-slate-600">
                    <img src={jacket}alt="jackets" className="w-[100px] filter group-hover:brightness-0 group-hover:invert" />
                    <span className="group-hover:text-white">Shoes</span>
                </div>
                <div className="boxes group  bg-slate-300 flex flex-col justify-center items-center p-[20px] lg:w-[16.7%]  cursor-pointer hover:bg-slate-600">
                    <img src={jacket} alt="jackets" className="w-[100px] filter group-hover:brightness-0 group-hover:invert" />
                    <span className="group-hover:text-white">Dress</span>
                </div>
            </div>
        </div>
    )
}

export default Categories;
import { CiDeliveryTruck,CiCreditCard1,CiCircleCheck,CiHeadphones } from "react-icons/ci";
const Facilities = () => {
    return (
        <div className="facilities-container bg-slate-300 mt-[100px] px-[18px] flex justify-center xs:justify-between py-[20px] flex-wrap gap-y-8 lg:py-[30px]">
            <div>
                <div className="flex justify-center">
                    <CiDeliveryTruck size={50}/>
                </div>
                <div className="flex flex-col">
                    <span className=" text-center font-bold ">Free Delivery</span>
                    <span className="w-[160px] text-sm text-center font-thin">This Free Delivery Only For Limited Region</span>
                </div>
            </div>

            <div>
                <div className="flex justify-center">
                    <CiCreditCard1 size={50}/>
                </div>
                <div className="flex flex-col">
                    <span className=" text-center font-bold ">Payment Method</span>
                    <span className="w-[160px] text-sm text-center font-thin">This Free Delivery Only For Limited Region</span>
                </div>
            </div>

            <div>
                <div className="flex justify-center">
                    <CiCircleCheck size={50}/>
                </div>
                <div className="flex flex-col">
                    <span className=" text-center font-bold ">Waranty</span>
                    <span className="w-[160px] text-sm text-center font-thin">This Free Delivery Only For Limited Region</span>
                </div>
            </div>

            <div>
                <div className="flex justify-center">
                    <CiHeadphones size={50}/>
                </div>
                <div className="flex flex-col">
                    <span className=" text-center font-bold ">Customer Support</span>
                    <span className="w-[160px] text-sm text-center font-thin">This Free Delivery Only For Limited Region</span>
                </div>
            </div>
            
            
        </div>
    )
}

export default Facilities;
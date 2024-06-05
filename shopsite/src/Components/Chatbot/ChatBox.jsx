import { IoMdClose } from "react-icons/io";
import useGetCart from "../../utils/useGetCart";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const ChatBox = ({ handleChatclick }) => {
    const { getCart, error, data, setError,loading } = useGetCart();
    const [messages, setMessages] = useState([]);
    const [isCartDetailsClicked, setIsCartDetailsClicked] = useState(false);

    const handleUserClick = () => {
        setIsCartDetailsClicked(true);
        getCart();
    }
    useEffect(() => {
        if (data && data.products) {
            setMessages(data.products);
            console.log(messages);
        }
        else{
            setMessages([])
        }
    }, [data]);

    useEffect(() => {
        if (error) {
            toast.error("Please Login");
            setError("");
        }
    }, [error, setError])
    return (
        <>
            <div className="chatbox fixed bottom-1 right-4 border border-slate-500 rounded-md sm:w-[400px] sm:h-[400px] overflow-y-scroll bg-white z-50 w-[250px] h-[400px]">
                <div className="flex justify-between items-center bg-slate-600 rounded-t-md py-2 px-1">
                    <span className=" text-lg font-bold">DevBot</span>
                    <IoMdClose size={20} onClick={handleChatclick} className="cursor-pointer" />
                </div>

                <div className="chatmessages  flex flex-col ">
                    <span className="bg-slate-500 py-2 px-1">Hey how can i help you :)</span>
                    {isCartDetailsClicked && !loading && (messages.length > 0 ? (
                        <div className="py-2 px-1 bg-slate-400 flex-col flex">
                            {messages.map((item, index) => (
                                <div key={item._id} className="message-item mb-3">
                                    <span className="block font-bold">Item: {index + 1}</span>
                                    <span>Image: <img src={item?.imageUrl} alt="product_image" className="product-image w-[50px]" /></span>
                                    <span className="block">Price: {item?.price}</span>
                                    <span className="block">Quantity: {item?.quantity}</span>
                                    <span className="block">Total: {item?.total}</span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="py-2 px-1 bg-slate-400 flex-col flex">
                            <span className="">Your cart is empty :(</span>
                        </div>
                    ))}

                    <div className=" flex flex-col mr-1 mt-3 items-end">
                        <span className="bg-slate-500 py-2 px-1 w-28  mb-3 cursor-pointer hover:text-white" onClick={handleUserClick}>{loading?"Wait....":"Cart Details"}</span>
                    </div>
                </div>


                <ToastContainer />
            </div>
        </>
    )
}

export default ChatBox;
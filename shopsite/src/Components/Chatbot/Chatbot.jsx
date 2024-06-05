import { CiChat1 } from "react-icons/ci";
import ChatBox from "./ChatBox";
import { useState } from "react";
const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleChatclick = ()=>{
        setIsOpen(!isOpen);
    }
    return (
        <>
            {!isOpen &&
                <div className=" fixed bottom-1 right-4 bg-slate-500 rounded-full p-2 box-border cursor-pointer z-50">
                    <CiChat1 size={40} onClick={handleChatclick} />
                </div>}
            {
                isOpen && <ChatBox handleChatclick={handleChatclick}/>
            }
        </>
    )
}

export default Chatbot;
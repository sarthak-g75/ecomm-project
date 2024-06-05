import { useEffect, useState } from "react";
import { images } from "../../utils/images";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
const Carousel = () => {
    const [showIndex, setShowIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowIndex((showIndex + 1) % images.length)
        }, 3000)
        return () => {
            clearInterval(interval);
        }
    }, [showIndex])

    return (
        <div className="carousel-container relative flex mt-[5px]">

            <div className="carousel flex relative overflow-hidden items-center group">
                <button className="absolute bg-slate-500 left-0  h-[30px] rounded-e-md px-1 opacity-0 group-hover:opacity-100 sm:h-[60px] xl:h-[100px] transition-opacity duration-300" onClick={() => setShowIndex((showIndex - 1 + images.length) % images.length)}><BsChevronLeft /></button>
                {
                    images.map((image, index) => (
                        <img src={image} key={index} alt="carousel" className={`${index === showIndex ? 'block' : 'hidden'}`} />
                    ))
                }
                <button className="absolute right-0  h-[30px] bg-slate-500 opacity-0 group-hover:opacity-100 rounded-s-md px-1 sm:h-[60px] xl:h-[100px] transition-opacity duration-300" onClick={() => setShowIndex((showIndex + 1) % images.length)}><BsChevronRight /></button>
            </div>

        </div>
    )
}

export default Carousel;
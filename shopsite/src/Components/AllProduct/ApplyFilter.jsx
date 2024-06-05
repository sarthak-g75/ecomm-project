import React, { useState } from 'react';
import { IoIosStar } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import useProducts from '../../utils/useproducts';

export default function ApplyFilter({ handleFilterClick, filterOpen,priceFilter,setPriceFilter }) {
    const handlePriceChange = (event)=>{
        const {name,checked} = event.target;
        setPriceFilter((prevFilter)=>
            checked ? [...prevFilter , name] : prevFilter.filter((prev)=>prev!==name)
        )
    }
    const isChecked = (priceRange) => {
        return priceFilter.includes(priceRange);
    }
    return (
        <div className={`filter-container bottom-0 fixed z-20 bg-slate-600 ${filterOpen ? 'w-[100%] px-[18px] py-[10px]' : 'w[0px] px-[0px] py-[0px]'} transition-width duration-500 ease-linear`}>
            {
                filterOpen &&
                <><span className="flex justify-end cursor-pointer" onClick={handleFilterClick} ><IoMdClose size={20} /></span>
                    <div>
                        <span className="mb-[10px] block">Filter By price</span>
                        <div className="flex  ">
                            <input type="checkbox" name="100-250" checked={isChecked('100-250')} onChange={handlePriceChange}/> <span className="ml-[10px] text-white">₹100 - ₹250</span>
                        </div>

                        <div className="flex  ">
                            <input type="checkbox" name="250-500" checked={isChecked('250-500')} onChange={handlePriceChange}/> <span className="ml-[10px] text-white">₹250 - ₹500</span>
                        </div>

                        <div className="flex  ">
                            <input type="checkbox" name="500-750" checked={isChecked('500-750')} onChange={handlePriceChange}/> <span className="ml-[10px] text-white">₹500 - ₹750</span>
                        </div >

                        <div className="flex  ">
                            <input type="checkbox" name="750-1000" checked={isChecked('750-1000')} onChange={handlePriceChange}/> <span className="ml-[10px] text-white">₹750 - ₹1000</span>
                        </div >

                        <div className="flex  ">
                            <input type="checkbox" name="1000-1500" checked={isChecked('1000-1500')} onChange={handlePriceChange}/> <span className="ml-[10px] text-white">₹1000 - ₹1500</span>
                        </div>
                        <div className="flex  ">
                            <input type="checkbox" name="1500-1750" checked={isChecked('1500-1750')} onChange={handlePriceChange}/> <span className="ml-[10px] text-white">₹1500 - ₹1750</span>
                        </div>
                        <div className="flex  ">
                            <input type="checkbox" name="1750-9999" checked={isChecked('1750-9999')} onChange={handlePriceChange}/> <span className="ml-[10px] text-white">₹1750 - Above</span>
                        </div>
                    </div>

                    <div>
                        <span className="my-[10px] block">Filter By Rating</span>
                        <div className="flex  ">
                            <input type="checkbox" name="price" /> <span className="ml-[10px] flex"><IoIosStar className='stars' style={{ color: '#f3b519' }} /></span>
                        </div>

                        <div className="flex  ">
                            <input type="checkbox" name="price" /> <span className="ml-[10px] flex"><IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} /></span>
                        </div>

                        <div className="flex  ">
                            <input type="checkbox" name="price" /> <span className="ml-[10px] flex"><IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} /></span>
                        </div>

                        <div className="flex  ">
                            <input type="checkbox" name="price" /> <span className="ml-[10px] flex"><IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} /></span>
                        </div>

                        <div className="flex  ">
                            <input type="checkbox" name="price" /> <span className="ml-[10px] flex"><IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} /><IoIosStar className='stars' style={{ color: '#f3b519' }} /></span>
                        </div>
                    </div>
                </>}

        </div >
    )
}

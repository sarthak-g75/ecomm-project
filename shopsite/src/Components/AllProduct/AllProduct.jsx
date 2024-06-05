import Navbar from "../Navbar/Navbar";
import { IoIosStar } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../utils/FilterContext";
import useProducts from "../../utils/useproducts";
import { LiaFilterSolid } from "react-icons/lia";
import ApplyFilter from "./ApplyFilter";
import { Link } from "react-router-dom";
const AllProduct = () => {
    const { products, Loading, error, filteredProducts, setFilteredProducts } = useProducts();
    const [priceFilter, setPriceFilter] = useState([]);

    const [filterOpen, setFilterOpen] = useState(false);
    const handleFilterClick = () => {
        setFilterOpen(!filterOpen);
    }

    useEffect(() => {
        const applyFilterPrice = () => {
            let filtered = products;

            if (priceFilter.length > 0) {
                filtered = filtered.filter((product) => {
                    return priceFilter.some((priceRange) => {
                        const [min, max] = priceRange.split('-').map(Number);
                        return product.price >= min && product.price <= max;
                    });
                })
            }
            setFilteredProducts(filtered);
            console.log(filtered);
        }
        applyFilterPrice();
    }, [priceFilter]);

    return (
        <>
            <Navbar />
            <div className="allproducts-container">

                <div className="products">
                    <div className="card-container mt-[10px] flex  flex-wrap sm:justify-around">
                        {
                            filteredProducts?.map((item, index) => (
                                <div className="cards w-[20%] min-w-[50%] relative rounded-lg border slate-500 px-[12px] py-[10px]  cursor-pointer sm:min-w-[30%]" key={item._id}>
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
                        }
                    </div>
                </div>
                <ApplyFilter handleFilterClick={handleFilterClick} filterOpen={filterOpen} priceFilter={priceFilter} setPriceFilter={setPriceFilter} />
                <div className="bottom-0 fixed w-full z-10 bg-slate-500 flex justify-center py-[10px]">
                    <div className="flex items-center font-bold">
                        <LiaFilterSolid />
                        <span className="ml-[10px] cursor-pointer lg:text-xl" onClick={handleFilterClick}>Filters</span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AllProduct;
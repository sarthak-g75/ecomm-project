import React, { createContext } from "react";
import AllProduct from "../Components/AllProduct/AllProduct";

const FilterContext = createContext();
const FilterContextProvider = ()=>{
    const greet = "hello"
    return (
        <FilterContext.Provider value={greet}>
            <AllProduct greet={greet}/>
        </FilterContext.Provider>
    )
}

export {FilterContext,FilterContextProvider}
import { useContext } from "react";
import ProductsContext from "../context/ProductsProvider";
import {ProductsContextType } from "../context/ProductsProvider";


const useProduct =():ProductsContextType=>{
    return useContext(ProductsContext)
}

export default useProduct;
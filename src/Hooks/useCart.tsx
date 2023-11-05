import { useContext } from "react";
import cartContext from "../context/CartProvider";
import { UseCartContextType } from "../context/CartProvider";


const useCart =():UseCartContextType=>{
    return useContext(cartContext)
}

export default useCart;
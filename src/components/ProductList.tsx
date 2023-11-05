import { ReactElement } from "react"
import useCart from "../Hooks/useCart"
import useProduct from "../Hooks/useProuct"
import { ProductsContextType } from "../context/ProductsProvider"
import Product from "./Product"


const ProductList = () => {
    const {dispatch,cart,REDUCER_ACTIONS}=useCart()
    const {products}=useProduct()
    
    let PageContent:ReactElement | ReactElement[] = <p>Loading...</p>

    if (products?.length) {
        PageContent =products.map(product=>{
            const inCart: boolean =cart.some(item =>item.id ===product.id)

            return(
                <Product
                    key={product.id}
                    product={product}
                    dispatch={dispatch}
                    REDUCER_ACTIONS={REDUCER_ACTIONS}
                    inCart ={inCart}
                    
                />
                
            )

        })
    }

    const content =(
        <main className="main--products">
            {PageContent}
        </main>
    )


  return content
}

export default ProductList

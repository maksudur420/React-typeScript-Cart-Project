import { ReactElement, createContext, useEffect, useState } from "react"


export type ProductsType ={
    id:string,
    title:string,
    price:number,
    category:string,
    description:string,
    rating:{
        rate:number,
        count:number
    },
    image:string
}

// const initState: ProductsType[]=[
//     {
//         "sku": "item0001",
//         "name": "Widget",
//         "price": 9.99
//     },
//     {
//         "sku": "item0002",
//         "name": "Premium Widget",
//         "price": 19.99
//     },
//     {
//         "sku": "item0003",
//         "name": "Deluxe Widget",
//         "price": 29.99
//     }
// ]

export type ProductsContextType ={
    products: ProductsType[]
}

const initContextState:ProductsContextType ={
    products:[]
}

const ProductsContext=createContext<ProductsContextType>(initContextState)

type ChildrenType ={
    children: ReactElement | ReactElement[]
}

export const ProductsProvider =({children}:ChildrenType):ReactElement=>{
    const [products,setProducts] =useState<ProductsType[]>([])

   
    useEffect(()=>{
        const fetchData = async ():Promise<ProductsType[]>=>{
            const data = await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .catch(err=>{
                if (err instanceof Error) {
                    console.log(err.message) 
                }
            })
            return data
        }
        fetchData().then(data=>setProducts(data))
    },[])

    return(
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    )
}
export default ProductsContext;
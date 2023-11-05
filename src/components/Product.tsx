import { ProductsType } from "../context/ProductsProvider"
import { ReducerActionType,ActionType} from "../context/CartProvider"
import Rating from "./Rating"

type PropsType ={
    dispatch:React.Dispatch<ActionType>,
    product:ProductsType,
    REDUCER_ACTIONS:ReducerActionType,
    inCart: boolean
}
const Product = ({product,dispatch,REDUCER_ACTIONS,inCart}:PropsType) => {
    const {price,image,title,rating}=product;

    const onAddToCart =()=>dispatch({
        type:REDUCER_ACTIONS.ADD,
        payload: {...product, qty:1}
    })

    const itemInCart = inCart? 'Item in Cart : ✅': null;

    const content =(
      <article className="w-full px-5 py-5 shadow-lg relative rounded-lg border"> 
          <img src={image} alt={title} className="w-full h-[320px]" />
          <div className="mb-16">
            <h3 className="text-xl my-5 font-bold">{title}</h3>
            <p>{new Intl.NumberFormat('en-US',{style:'currency',currency:"USD"}).format(price)}</p>
            <div className="rating flex items-center justify-between ">
              <div>
                  {Array.from({ length:5 }).map((_, index) => (
                    <Rating key={index} filled={index < rating.rate} />
                ))}
              </div>
            <span>Review :{rating.count}</span>
           
          </div>
          <p>{itemInCart}</p>
          </div>
          
          <button onClick={onAddToCart} className="px-4 py-2 w-[calc(100%-40px)] mt-4 shadow rounded-lg bg-sky-700 absolute bottom-4">Add To Cart</button>
      </article>
    )

  return content
  
}

export default Product


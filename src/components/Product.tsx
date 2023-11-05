import { ProductsType } from "../context/ProductsProvider"
import { ReducerActionType,ActionType} from "../context/CartProvider"

type PropsType ={
    dispatch:React.Dispatch<ActionType>,
    product:ProductsType,
    REDUCER_ACTIONS:ReducerActionType,
    inCart: boolean
}
const Product = ({product,dispatch,REDUCER_ACTIONS,inCart}:PropsType) => {
    const {price,description,image,title}=product;

    const onAddToCart =()=>dispatch({
        type:REDUCER_ACTIONS.ADD,
        payload: {...product, qty:1}
    })

    const itemInCart = inCart? 'Item in Cart : Yes': null;

    const content =(
      <article className="product">
          <h3>{title}</h3>
          <img src={image} alt={title} className="product__img" />
          <p>{new Intl.NumberFormat('en-US',{style:'currency',currency:"USD"}).format(price)}</p>
          <button onClick={onAddToCart} className="button">Add To Cart</button>
      </article>
    )

  return content
  
}

export default Product


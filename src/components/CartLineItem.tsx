import { ChangeEvent, ReactElement } from "react"
import { CartItemType } from "../context/CartProvider"
import { ReducerActionType } from "../context/CartProvider"
import { ActionType } from "../context/CartProvider"


type PropsType ={
    dispatch:React.Dispatch<ActionType>,
    item : CartItemType,
    REDUCER_ACTIONS : ReducerActionType
}

const CartLineItem = ({dispatch,item,REDUCER_ACTIONS}:PropsType) => {

    const {price,image,title,qty} =item;

    const lineTotal:number = (price*qty)

    const highestQty:number = 20>qty? 20: qty;

    const optionValue :number[] = [...Array(highestQty).keys()].map(i=>i+1)

    const options:ReactElement[] =optionValue.map(val=>{
        return <option key={`opt ${val}`} value={val}>{val}</option>
    })

    const onChangeQty =(e:ChangeEvent<HTMLSelectElement>)=>{
        dispatch({
            type:REDUCER_ACTIONS.QUANTITY,
            payload: {...item, qty:Number(e.target.value)}
        })
    }

    const onRemoveFromCart =()=>dispatch({
        type: REDUCER_ACTIONS.REMOVE,
        payload: item
    })

    const content =(
        <li className="cart__item">
            <img src={image} alt={title} className="cart__img" />
            <div aria-label="Item Name">{title}</div>
            <div aria-label="Price Per Item">{new Intl.NumberFormat('en-US',{style:'currency',currency:"USD"}).format(price)}</div>
            <label htmlFor="itemQty" className="offscreen">
                Item Quantity
            </label>
            <select
             name="itemQty" 
             id="itemQty" 
             className="cart__select"
             value={qty}
             aria-label="Item Quantity"
             onChange={onChangeQty }
             >
                {options}
             </select>

             <div className="cart__item-subtotal" aria-label="Line Item Subtotal">
                {new Intl.NumberFormat('en-US',{style:'currency',currency:"USD"}).format(lineTotal)}
             </div>
             <button className="cart__button"
                aria-label="Remove Item From Cart"
                title="Remove Item From Cart"
                onClick={onRemoveFromCart}
             >
             ❌
             </button>
        </li>
    )

  return content;
}

export default CartLineItem

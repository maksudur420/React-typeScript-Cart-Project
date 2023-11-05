import useCart from "../Hooks/useCart"
import {useState} from 'react'
import CartLineItem from "./CartLineItem"


const Cart = () => {

  const [confirm, setConfirm] =useState<boolean>(false)

  const {cart, dispatch, REDUCER_ACTIONS,totalItems, TotalPrice} = useCart()

  const onSubmitOrder =()=>{
    dispatch({type:REDUCER_ACTIONS.SUBMIT})
    setConfirm(true)
  }

  const PageContent = confirm
  ? <h3>Thank You For Your Order.</h3>
  : <>
    <h3 className="offscreen"> Cart</h3>
    <ul className="cart">
      {cart.map(item=>{
        return (
          <CartLineItem
            key={item.id}
            item={item}
            dispatch ={dispatch}
            REDUCER_ACTIONS={REDUCER_ACTIONS}
          />
        )
      })}
    </ul>
    <div className="cart__totals">
      <p>Total  Items : {totalItems}</p>
      <p>Total  Price : {TotalPrice}</p>
      <button className="cart__submit px-4 py-2 mt-4 shadow rounded-lg bg-sky-700 " disabled={!totalItems} onClick={onSubmitOrder}>Place Order</button>
    </div>
  </>
  const content = (
    <main className="main main--cart">
      {PageContent}
    </main>
  )

  return content;
}

export default Cart



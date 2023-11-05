import Nav from "./Nav"
import useCart from "../Hooks/useCart"

type PropsType ={
    viewCart : boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({viewCart,setViewCart}:PropsType) => {

    const {totalItems,TotalPrice} =useCart()
    const content =(
        <header className="header">
            <div className="header__title_bar">
                <h1>Acme Co.</h1>
                <div className="header__price-box">
                    <p>Total Items:{totalItems}</p>
                    <p>Total Price:{TotalPrice}</p>
                </div>
            </div>
            <Nav viewCart={viewCart} setViewCart={setViewCart}></Nav>
        </header>
    )
  return (
    <div>
      {content}
    </div>
  )
}

export default Header

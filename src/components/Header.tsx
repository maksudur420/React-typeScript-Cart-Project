import Nav from "./Nav"
import useCart from "../Hooks/useCart"

type PropsType ={
    viewCart : boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({viewCart,setViewCart}:PropsType) => {

    const {totalItems,TotalPrice} =useCart()
    const content =(
        <header className="px-8 pb-4">
            <div className="header__title_bar ">
                <h1 className="text-3xl text-orange-400 font-bold my-5">Acme Co.</h1>
                <div className="header__price-box">
                    <p>Total Items:{totalItems}</p>
                    <p>Total Price:{TotalPrice}</p>
                </div>
            </div>
            <Nav  viewCart={viewCart} setViewCart={setViewCart}></Nav>
        </header>
    )
  return (
    <div className=" bg-violet-700 rounded-lg mx-8">
      {content}
    </div>
  )
}

export default Header

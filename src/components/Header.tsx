import Nav from "./Nav"


type PropsType ={
    viewCart : boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({viewCart,setViewCart}:PropsType) => {

    const content =(
        <header className="header">
            <div className="header__title_bar">
                <h1>Acme Co.</h1>
                <div className="header__price_box">
                    <p>Total Items:</p>
                    <p>Total Price</p>
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

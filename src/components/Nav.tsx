type PropsType ={
    viewCart : boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Nav = ({viewCart,setViewCart}:PropsType) => {

    const button = viewCart? 
    <button onClick={()=>setViewCart(!viewCart)}>View Products</button>
    : <button onClick={()=>setViewCart(!viewCart)}>View Cart</button>;

    const content =(
        <nav className="nav">
            {button}
        </nav>
    )

  return content;
}

export default Nav

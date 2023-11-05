type PropsType ={
    viewCart : boolean,
    setViewCart: React.Dispatch<React.SetStateAction<boolean>>
}

const Nav = ({viewCart,setViewCart}:PropsType) => {

    const button = viewCart? 
    <button  className="px-4 py-2  mt-4 shadow rounded-lg bg-sky-500 absulate bottom-1" onClick={()=>setViewCart(!viewCart)}>View Products</button>
    : <button  className="px-4 py-2  mt-4 shadow rounded-lg bg-sky-500 absulate bottom-1" onClick={()=>setViewCart(!viewCart)}>View Cart</button>;

    const content =(
        <nav className="nav">
            {button}
        </nav>
    )

  return content;
}

export default Nav

import useCart from "../Hooks/useCart"

type PropsType ={
    viewCart : boolean
}

const Footer = ({viewCart}:PropsType) => {
    const {totalItems,TotalPrice}=useCart()

    const year:number = new Date().getFullYear()

    const PageContent = !viewCart
    ? <p> Shopping Cart &copy; {year}</p>
    : (<>
        <p>Total Items :{totalItems}</p>
        <p>Total Price :{TotalPrice}</p>
        <p>Shopping Cart &copy; {year}</p>
    </>
    )
     
    const content =(
        <footer className="footer">
            {PageContent}
        </footer>
    )
  return content
}

export default Footer

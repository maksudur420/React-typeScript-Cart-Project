
import {useState} from 'react'
import Cart from './components/Cart'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductList from './components/ProductList'

function App() {
 const [viewCart,setViewCart] =useState<boolean>(false)

 const PageContent = viewCart? <Cart/> : <ProductList/>;

 const content =(
  <>
    <Header viewCart={viewCart} setViewCart={setViewCart}/>
        {PageContent}
    <Footer viewCart={viewCart} />
  </>
    
    
 )

  return (
    <>
      {content}
    </>
  )
}

export default App

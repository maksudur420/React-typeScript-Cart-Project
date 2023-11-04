import { ReactElement, createContext, useMemo, useReducer } from "react"

export type CartItemType ={
    id:string,
    title:string,
    price:number,
    category:string,
    description:string,
    rating:{
        rate:number,
        count:number
    },
    image:string,
    qty:number
}

type CartStateType ={cart:CartItemType[]}

const initCartState ={cart:[]}

const REDUCER_ACTION_TYPE ={
    ADD:"ADD",
    REMOVE:"REMOVE",
    QUANTITY:"QUANTITY",
    SUBMIT:"SUBMIT"
}

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ActionType ={
    type:string,
    payload?: CartItemType
}

const reducer =(state:CartStateType,action:ActionType):CartStateType=>{
    switch(action.type){
        case REDUCER_ACTION_TYPE.ADD:
            {
               if (!action.payload) {
                throw new Error('Action.payload is missing in ADD action')
               } 

               const {id,title,price,rating,description,category,image} = action.payload

               const filterCart :CartItemType[] = state.cart.filter(item=>item.id!==id)

               const itemExist:CartItemType | undefined = state.cart.find(item=>item.id===id)

               const qty: number = itemExist? itemExist.qty +1 : 1;
               return {...state, cart : [...filterCart,{id,title,price,rating,description,category,qty,image}]}
            }
        case REDUCER_ACTION_TYPE.REMOVE:
            {
                if (!action.payload) {
                    throw new Error('Action.payload is missing in Remove action')
                   } 
                const {id} = action.payload

                const filterCart :CartItemType[] = state.cart.filter(item=>item.id!==id)

                return {...state, cart : [...filterCart]}
            }
        case REDUCER_ACTION_TYPE.QUANTITY:
            {
                if (!action.payload) {
                    throw new Error('Action.payload is missing in Quantity action')
                } 
                const {id,qty} = action.payload

               const itemExist:CartItemType | undefined = state.cart.find(item=>item.id===id)

               if (!itemExist) {
                throw new Error('The Item is not Exist')
               }
               const updatedItem:CartItemType ={...itemExist,qty}

               const filterCart :CartItemType[] = state.cart.filter(item=>item.id!==id)

               return {...state, cart:[...filterCart,updatedItem]}
            }
        case REDUCER_ACTION_TYPE.SUBMIT:
            {
                return{...state, cart: []}
            }
        default:
            throw new Error('Undefined Reducer Action type')
            
    }
}

const useCartContext =(initCartState:CartStateType)=>{
    const [state,dispatch]=useReducer(reducer,initCartState)

    const REDUCER_ACTIONS =useMemo(()=>{
        return REDUCER_ACTION_TYPE;
    },[])

    const totalItems = state.cart.reduce((prev,Item)=>{
        return prev + Item.qty
    },0)

    const TotalPrice = new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(
        state.cart.reduce((Prev,Item)=>{
            return Prev + (Item.qty * Item.price)
        },0)
    )

    const cart = state.cart.sort((a,b)=>{
        const ItemA = Number(a.id)
        const ItemB =Number(b.id)
        return ItemA - ItemB
    })

    return {
        dispatch,
        REDUCER_ACTIONS,
        totalItems,
        TotalPrice,
        cart
    }

}

export type UseCartContextType = ReturnType < typeof useCartContext>

const initCartContextState:UseCartContextType ={
    dispatch:()=>{},
    REDUCER_ACTIONS:REDUCER_ACTION_TYPE,
    TotalPrice: "",
    totalItems:0,
    cart:[]
}

const cartContext = createContext<UseCartContextType>(initCartContextState)

type ChildrenType ={children?:ReactElement | ReactElement[]}

export const CartProvider =({children}:ChildrenType):ReactElement=>{
    return(
        <cartContext.Provider value={useCartContext(initCartState)}>
            {children}
        </cartContext.Provider>
    )
}

export default cartContext;
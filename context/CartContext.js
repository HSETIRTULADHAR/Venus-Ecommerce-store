"use client"

import { useRouter } from "next/router";
import { createContext ,useState, useEffect} from "react"



const CartContext = createContext();


export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([]);
    useEffect(() => {
        setCartToState()
    },[])


    //const router = useRouter();

    const setCartToState = () => {
        setCart( 
            localStorage.getItem('cart')
            ? JSON.parse(localStorage.getItem('cart'))
            : []
            )
    }

    const addItemToCart = async({
        product,
        name,
        price,
        image,
        stock,
        seller,
        quantity = 1,

    }) => {

        const item = {
            product,
            name,
            price,
            image,
            stock,
            seller,
            quantity,
    
        };

         const doesItemExist = cart?.cartItems?.find(
            (i) => i.product === item.product
         )

         let newCartItems;

         if (doesItemExist) {
            newCartItems = cart?.cartItems?.map((i) => i.product === doesItemExist.product ? item: i)
            
         } else {
            newCartItems = [...(cart?.cartItems) || [],item]
         }
         localStorage.setItem("cart",JSON.stringify({cartItems: newCartItems}))
        setCartToState();

    }

    const deleteItemFromCart = (id) => {
        const newCartItems = cart?.cartItems?.filter((i) => i.product !== id);
    
        localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
        setCartToState();
    }

    return (
        <CartContext.Provider
            value={{
                cart,addItemToCart,deleteItemFromCart
            }}>
            {children}
        </CartContext.Provider>
    )
  
}

export default CartContext;


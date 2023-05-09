import {create} from "zustand"
import { ICartItem, RawCartItem } from "../Types"
import {persist, createJSONStorage } from "zustand/middleware"
import { nanoid } from "nanoid"

interface IGlobalStore  {
    cart: ICartItem[]
    addToCartItem: (newItem: RawCartItem) => void
    removeFromCart: (cartItem: ICartItem) => void
    clientSecret:string | undefined
    updateClientSecret: (secret: string) => void
    emptyCart: () => void
}

const useGlobalStore = create<IGlobalStore>()(
    persist((set, get) => ({
        clientSecret: undefined,
        updateClientSecret: (secret) => {
            set({
                clientSecret: secret,
            })

        },
        cart: [],
        emptyCart: () => {
            set({
                cart: []
            })

        },
        addToCartItem: (newItem) => {
            const { cart } = get() 
            let cartItem: ICartItem[] = [] 
            let updatedCartItem: ICartItem | null = null

            const existingProduct = cart.find((_cartItem) => _cartItem.product === newItem.product)

            if(existingProduct) {
                const updatedCartItems = cart.map((_item) => {
                    if(_item.product === newItem.product) {
                        return {
                            ..._item,
                            quantity: _item.quantity + 1
                        }
                    }
                    return _item
                }) 
                cartItem =[...updatedCartItems]

            }else {
                updatedCartItem = {
                    ...newItem,
                    id: `cart-${nanoid()}`,
                    quantity: 1
                }

                cartItem = [...cart, updatedCartItem]
            }

            set({
                cart: cartItem
            })

        },
        removeFromCart: (cartItem) => {
            const { cart } = get()
            let Items: ICartItem[] = []
            const existingProduct = cart.find((_Item) => _Item.id === cartItem.id)

            if(existingProduct) {
                if(existingProduct.quantity === 1) {
                    const remainingItems = cart.filter((product) => product.id != cartItem.id)
                    Items= remainingItems
                }else{
                    const updatedItems = cart.map(_cartItem => {
                        if(_cartItem.id === cartItem.id) {
                            return {
                                ..._cartItem,
                                quantity: _cartItem.quantity - 1

                            }
                        }
                        return _cartItem
                    })
                    Items = updatedItems;
                }
            }
            set({
                cart: Items
            })


        }
    }),{
        name: "komorebi-production",
        storage: createJSONStorage(() => localStorage)
    })
)

export default useGlobalStore;
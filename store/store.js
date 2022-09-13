import create from 'zustand'

export const useStore = create(
    (set) => ({
        // cart 
        cart : {
            pizzas : []
        },

        // add pizza in cart
        addPizza: (data)=> 
        set((state) => ({
            cart: {
                pizzas: [...state.cart.pizzas, data]
            }
        })),

        //remove pizza
        removePizza : (index) => 
        set((state) => ({
            cart : {
                pizzas : state.cart.pizzas.filter((_, i) => i != index)
            }
        })),

        // reset the cart after order is placed
        resetCart: () => 
        set(() => ({
            pizzas: []
        }))
    })
)
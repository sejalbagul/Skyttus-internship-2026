import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            {
                const existing = state.items.find(item => item.id === action.payload.id);
                if (existing) {
                    return {
                        ...state,
                        items: state.items.map(item =>
                            item.id === action.payload.id ?
                            {...item, quantity: item.quantity + 1 } :
                            item
                        ),
                    };
                }
                return {
                    ...state,
                    items: [...state.items, {...action.payload, quantity: 1 }],
                };
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload),
            };
        case 'UPDATE_QUANTITY':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id ?
                    {...item, quantity: Math.max(0, action.payload.quantity) } :
                    item
                ),
            };
        case 'CLEAR_CART':
            return { items: [] };
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, { items: [] });

    const addToCart = (product) => dispatch({ type: 'ADD_TO_CART', payload: product });
    const removeFromCart = (id) => dispatch({ type: 'REMOVE_FROM_CART', payload: id });
    const updateQuantity = (id, quantity) => dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    const clearCart = () => dispatch({ type: 'CLEAR_CART' });

    return ( <
        CartContext.Provider value = {
            { cart: state.items, addToCart, removeFromCart, updateQuantity, clearCart } } > { children } <
        /CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
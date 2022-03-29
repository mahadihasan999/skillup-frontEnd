import React, { createContext, useContext, useState } from 'react';
export const OrderContext = createContext();

const OrderProvider = ({ children }) => {
    const [order, setOrder] = useState([]);

    // add order function 
    const handleOrder = (product) => {
        setOrder((prevValue) => {
            return [
                ...prevValue,
                product,
            ]
        })
    }

    //remove order from cart 
    const removeOrder = (id) => {
        setOrder((prev) => {
            return prev.filter(item => {
                return item.id !== id
            })
        })
    }


    const value = {
        setOrder,
        order,
        handleOrder,
        removeOrder
    }
    return (
        <OrderContext.Provider value={value}>
            {children}
        </OrderContext.Provider>
    )
}

export default OrderProvider

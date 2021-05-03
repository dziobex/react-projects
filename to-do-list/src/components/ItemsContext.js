import React, { createContext, useState } from 'react';

export const ItemsContext = createContext();

export const ItemsProvider = (props) => {
    const [items, setItems] = useState([]);
    return (
        <ItemsContext.Provider value={[items, setItems]}>
            {props.children}
        </ItemsContext.Provider>
    );
}
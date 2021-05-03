import React, { useState, useContext } from 'react';
import { ItemsContext } from './ItemsContext';

import style from './items.module.css';

const Item = ({ message, id }) => {
    const [items, setItems] = useContext(ItemsContext);
    const [enabled, setEnabled] = useState(true);
    const [element, setElement] = useState(message);
    const [icon, setIcon] = useState(<div>&#9998;</div>);

    const edit = e => {
        e.preventDefault();
        
        items[items.indexOf(items.find(item => item.key == id))].disabled = "none";
        setEnabled(!enabled);
        setIcon(!enabled ? <div>&#9998;</div> : <div>&#10004;</div>);
        console.log(enabled);
    }

    const remove = e => {
        e.preventDefault();
        items.splice(items.indexOf(items.find(item => item.key == id)), 1);
        setItems([...items]);
    }

    const change = e => {
        e.preventDefault();
        if (!enabled) {
            setElement(e.target.value);
        }
    }
    
    return (
        <div className={style.task}>
            <input type="text" className={style.mess} value={element} disabled={enabled} onChange={change} />
            <button className={style.closeBtn} onClick={remove}>X</button>
            <button type="button" className={style.editBtn} onClick={edit}>{icon}</button>
        </div>
    );
};

export default Item;
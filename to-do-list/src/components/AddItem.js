import React, { useState, useContext } from 'react';
import { ItemsContext } from './ItemsContext';
import Item from './Item';

const AddItem = () => {
    const [item, setItem] = useState('');
    const [items, setItems] = useContext(ItemsContext);

    const addItem = e => {
        e.preventDefault();
        if (item.length <= 1 || item.length >= 100)
            return;
        setItems([...items, {key: Date.now(), mess: item}]);
        setItem('');
    }

    const changeText = e => {
        setItem(e.target.value);
    }

    return (
        <div>
            <h1>My To-Do List</h1>
            <h3>({items.length} items)</h3>
            <form>
                <input type="text" className="task" value={item} onChange={changeText} />
                <button className="add" onClick={addItem}>Add</button>
                <ul>
                    {items.map(item => (
                        <Item key={item.key} id={item.key} message={item.mess} />
                    ))}
                </ul>
            </form>
        </div>
    );
}

export default AddItem;
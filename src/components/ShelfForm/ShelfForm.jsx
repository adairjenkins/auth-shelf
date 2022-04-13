import {useState} from 'react';
import {useDispatch} from 'react-redux';

function ShelfForm() {
  
    const [newItem, setNewItem] = useState('');

    const dispatch = useDispatch();

    const addItem = (event) => {
        event.preventDefault();

        console.log('CLICK', newItem);
        setNewItem('');
    }

    return (
        <>
            <form onSubmit={addItem}>
                <input 
                placeholder="Item Name" 
                type="text"
                value={newItem}
                onChange={(event) => setNewItem(event.target.value)}
                />
                <button type="submit">Add Item</button>
            </form>
        </>
  )
}

export default ShelfForm
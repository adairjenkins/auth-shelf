import {useState} from 'react';
import {useDispatch} from 'react-redux';

function ShelfForm() {
  
    const [newItem, setNewItem] = useState('');
    const [newPicture, setNewPicture] = useState('');

    const dispatch = useDispatch();

    const addItem = (event) => {
        event.preventDefault();
        dispatch({type: 'ADD_ITEM', payload: {description: newItem, image_url: newPicture }})
        // console.log('Add', newItem);
        setNewItem('');
    }

    return (
        <>
            <form onSubmit={addItem}>
                <input 
                placeholder="Item Description" 
                type="text"
                value={newItem}
                onChange={(event) => setNewItem(event.target.value)}
                />
                <input 
                placeholder="Picture URL" 
                type="text"
                value={newPicture}
                onChange={(event) => setNewPicture(event.target.value)}
                />
                <button type="submit">Add Item</button>
            </form>
        </>
  )
}

export default ShelfForm
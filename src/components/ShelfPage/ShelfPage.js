import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShelfForm from '../ShelfForm/ShelfForm';

function ShelfPage() {
  useEffect(() => {
    dispatch({ type: 'GET_SHELF' });
  }, []);

  const dispatch = useDispatch();
  const shelf = useSelector(store => store.shelf);
  const user = useSelector((store) => store.user)
  console.log('shelf:', shelf);

  // const deleteItem = () => {
  //   console.log('delete', item.id);
  //   dispatch({ type: 'DELETE_ITEM', payload: item.id })
  // }

  return (
    <div className="container">
      <h2>Shelf</h2>
      <ShelfForm />
      <p>All of the available items can be seen here.</p>

      <ul>{shelf.map(item => (
        <li key={item.id}>{item.description}
          <img src={item.image_url} height="100px" />

          {user.id === item.user_id ?
            <button onClick={(event) => dispatch({ type: 'DELETE_ITEM', payload: item.id })}>Delete</button>
          : ''}
        </li>
      ))}
      </ul>
    </div>
  );
}

export default ShelfPage;

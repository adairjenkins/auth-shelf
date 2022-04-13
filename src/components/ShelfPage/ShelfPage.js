import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ShelfPage() {
  useEffect(() => {
    dispatch({ type: 'GET_SHELF'});
}, []);
  
  const dispatch = useDispatch();
  const shelf = useSelector(store => store.shelf);
  console.log('shelf:', shelf);

  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>

      <ul>{shelf.map(item => (
        <li key={item.id}>{item.description}
        <img src={item.image_url} height="100px" />
        </li>
      ))}
      </ul>
    </div>
  );
}

export default ShelfPage;

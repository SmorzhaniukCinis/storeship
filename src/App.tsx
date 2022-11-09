import React from 'react';
import {useAppDispatch} from "./redux/hooks";
import {productsSagaActions} from "./redux/products/productSaga";

function App() {

    const dispatch = useAppDispatch()

  return (
      <div>
          <button onClick={()=>dispatch(productsSagaActions.fetchProductById(1))}>test</button>
      </div>
  );
}

export default App;

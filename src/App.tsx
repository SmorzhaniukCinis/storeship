import React from 'react';
import {useAppDispatch} from "./redux/hooks";
import {productsActions} from "./redux/productSaga";

function App() {

    const dispatch = useAppDispatch()

  return (
      <div>
          <button onClick={()=>dispatch(productsActions.fetchProducts())}>test</button>
      </div>
  );
}

export default App;

import React, {useEffect} from 'react';
import {useAppDispatch} from "./redux/hooks";
import {productsSagaActions} from "./redux/products/productSaga";
import {cartAPI} from "./API/cartsAPI";
import {userAPI} from "./API/UserAPI";
import {authAPI} from "./API/types/authAPI";

function App() {

    const dispatch = useAppDispatch()
    useEffect(() => {
        authAPI.authUser({ username: "mor_2314",
            password: "83r5^_"}).then(res => console.log(res))
    }, [])

  return (
      <div>
          <button onClick={()=>dispatch(productsSagaActions.fetchCategories())}>test</button>
      </div>
  );
}

export default App;

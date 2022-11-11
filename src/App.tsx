import React, {useEffect} from 'react';
import {useAppDispatch} from "./redux/hooks";
import {authAPI} from "./API/authAPI";
import {RouterProvider} from "react-router-dom";
import {publicRoutes} from "./routes";

function App() {

    const dispatch = useAppDispatch()
    useEffect(() => {
        authAPI.authUser({
            username: "mor_2314",
            password: "83r5^_"
        }).then(res => console.log(res))
    }, [])


    return (
        <div>
            <RouterProvider router={publicRoutes}/>
        </div>
    );
}

export default App;

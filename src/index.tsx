import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './App';
import './index.module.css';
import {persistor, store} from "./redux/store";
import {PersistGate} from 'redux-persist/integration/react'


const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <PersistGate loading={null} persistor={persistor}>
            <Provider store={store}>
                <App/>
            </Provider>
        </PersistGate>
    </React.StrictMode>
);

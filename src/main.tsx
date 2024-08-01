import './index.scss';
import 'antd/dist/reset.css';

import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StyleProvider } from '@ant-design/cssinjs';

import App from './App';
import { store } from '@store/index';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <StyleProvider hashPriority="high">
                <BrowserRouter future={{ v7_startTransition: true }}>
                    <App />
                </BrowserRouter>
            </StyleProvider>
        </Provider>
    </React.StrictMode>,
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 引入 Provider，将 store 的数据，传递给每一个子组件
import { Provider } from 'react-redux';

// 引入 store
import store from './Store/rootStore';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import registerServiceWorker from './registerServiceWorker';
import ButtonComponents from "./general/ButtonComponents";

ReactDOM.render(<ButtonComponents />, document.getElementById('root'));
registerServiceWorker();

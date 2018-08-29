import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import registerServiceWorker from './registerServiceWorker';
// import IconComponents from "./general/IconComponents";
// import ButtonComponents from "./general/ButtonComponents";
// import GridComponents from "./layout/GridComponents";
import LayoutComponents from "./layout/LayoutComponents";

ReactDOM.render(<LayoutComponents />, document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './navigation/BreadcrumbComponents.css'
import 'antd/dist/antd.css';
import registerServiceWorker from './registerServiceWorker';
// import IconComponents from "./general/IconComponents";
// import ButtonComponents from "./general/ButtonComponents";
// import GridComponents from "./layout/GridComponents";
// import LayoutComponents from "./layout/LayoutComponents";
// import AffixComponents from "./navigation/AffixComponents";
// import BreadcrumbComponents from "./navigation/BreadcrumbComponents";
// import DropdownComponents from "./navigation/DropdownComponents";
import MenuComponents from "./navigation/MenuComponents";

ReactDOM.render(<MenuComponents />, document.getElementById('root'));
registerServiceWorker();

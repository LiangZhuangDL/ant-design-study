import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './navigation/BreadcrumbComponents.css'
import './navigation/StepsComponents.css'
import 'antd/dist/antd.css';
import registerServiceWorker from './registerServiceWorker';
import zhCN from 'antd/lib/locale-provider/zh_CN';
// import IconComponents from "./general/IconComponents";
// import ButtonComponents from "./general/ButtonComponents";
// import GridComponents from "./layout/GridComponents";
// import LayoutComponents from "./layout/LayoutComponents";
// import AffixComponents from "./navigation/AffixComponents";
// import BreadcrumbComponents from "./navigation/BreadcrumbComponents";
// import DropdownComponents from "./navigation/DropdownComponents";
// import MenuComponents from "./navigation/MenuComponents";
// import PaginationComponents from "./navigation/PaginationComponents";
// import StepsComponents from "./navigation/StepsComponents";
// import AutoCompleteComponents from "./data_entry/AutoCompleteComponents";
// import CascaderComponents from "./data_entry/CascaderComponents";
// import CheckboxComponents from "./data_entry/CheckboxComponents";
// import DatePickerComponents from "./data_entry/DatePickerComponents";
import FormComponents from "./data_entry/FormComponents";
import {LocaleProvider} from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

ReactDOM.render(
    <LocaleProvider locale={zhCN}>
        <FormComponents/>
    </LocaleProvider>, document.getElementById('root'));
registerServiceWorker();

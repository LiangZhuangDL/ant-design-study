import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './navigation/BreadcrumbComponents.css'
import './navigation/StepsComponents.css'
import 'antd/dist/antd.css';
import './data_display/CarouselComponents.css'
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
// import FormComponents from "./data_entry/FormComponents";
import {LocaleProvider} from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
// import EditableTable from "./data_display/EditableTable";
// import TabsComponents from "./data_display/TabsComponents";
// import TagComponents from "./data_display/TagComponents";
// import TimelineComponents from "./data_display/TimelineComponents";
// import TreeComponents from "./data_display/TreeComponents";
// import AlertComponents from "./feedback/AlertComponents";
// import DrawerComponents from "./feedback/DrawerComponents";
// import ModalComponents from "./feedback/ModalComponents";
import MessageComponents from "./feedback/MessageComponents";
// import InputComponents from "./data_entry/InputComponents";
// import InputNumberComponents from "./data_entry/InputNumberComponents";
// import MentionComponents from "./data_entry/MentionComponents";
// import RadioComponents from "./data_entry/RadioComponents";
// import RateComponents from "./data_entry/RateComponents";
// import SelectComponents from "./data_entry/SelectComponents";
// import SkeletonComponents from "./data_entry/SkeletonComponents";
// import SwitchComponents from "./data_entry/SwitchComponents";
// import SliderComponents from "./data_entry/SliderComponents";
// import TreeSelectComponents from "./data_entry/TreeSelectComponents";
// import TimePickerComponents from "./data_entry/TimePickerComponents";
// import TransferComponents from "./data_entry/TransferComponents";
// import UploadComponents from "./data_entry/UploadComponents";
// import AvatarComponents from "./data_display/AvatarComponents";
// import BadgeComponents from "./data_display/BadgeComponents";
// import CalendarComponents from "./data_display/CalendarComponents";
// import CardComponents from "./data_display/CardComponents";
// import CarouselComponents from "./data_display/CarouselComponents";
// import CollapseComponents from "./data_display/CollapseComponents";
// import ListComponents from "./data_display/ListComponents";
// import PopoverComponents from "./data_display/PopoverComponents";
// import TooltipComponents from "./data_display/TooltipComponents";
// import TableComponents from "./data_display/TableComponents";

moment.locale('zh-cn');

ReactDOM.render(
    <LocaleProvider locale={zhCN}>
        <MessageComponents/>
    </LocaleProvider>, document.getElementById('root'));
registerServiceWorker();

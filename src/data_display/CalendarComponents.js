import React from 'react';
import {Calendar, Card, Badge, Alert} from 'antd';
import moment from 'moment';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

function getItem(value) {
    let listData;
    switch (value.date()) {
        case 12:
            listData = [
                {
                    type: 'warning',
                    content: '董如玉生日',
                }
            ];
            break;
        default:
    }
    return listData || [];
}

function getListData(value) {
    const listData = getItem(value);
    return (
        <ul>
            {
                listData.map(item=>(
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content}/>
                    </li>
                ))
            }
        </ul>
    )
}

export default class CalendarComponents extends React.Component{
    state = {
        value: moment('2018-9-11'),
        selectedValue: moment('2018-9-11'),
    };

    onSelect = (value) => {
        this.setState({
            value,
            selectedValue: value,
        });
    };

    render(){
        return (
            <div>
                <Card style={style} title='基础'>
                    <Calendar/>
                </Card><br/>
                <Card style={style} title='卡片式'>
                    <div style={{width: 500}}>
                        <Calendar fullscreen={false}/>
                    </div>
                </Card><br/>
                <Card style={style} title='通知事项日历'>
                    <div style={{float: 'left'}}>
                        <Calendar dateCellRender={getListData}/>
                    </div>
                </Card><br/>
                <Card style={style} title='选择功能'>
                    <Alert message={`你选择的日期是：${this.state.value && this.state.selectedValue.format('YYYY-MM-DD')}`}/>
                    <Calendar onSelect={this.onSelect} value={this.state.value}/>
                </Card>
            </div>
        )
    }
}
import React from 'react';
import {Card, Cascader, message} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

const options = [
    {
        value: '大连市',
        label: '大连市',
        children: [
            {
                value: '中山区',
                label: '中山区',
            },
            {
                value: '西岗区',
                label: '西岗区',
            },
            {
                value: '甘井子区',
                label: '甘井子区',
            },
            {
                value: '沙河口区',
                label: '沙河口区',
            },
            {
                value: '高新园区',
                label: '高新园区',
            }
        ]
    },
    {
        value: '沈阳市',
        label: '沈阳市',
        children: [
            {
                value: '和平区',
                label: '和平区',
            },
            {
                value: '皇姑区',
                label: '皇姑区',
            },
            {
                value: '沈河区',
                label: '沈河区',
            },
            {
                value: '大东区',
                label: '大东区',
            },
        ]
    },
];
export default class CascaderComponents extends React.Component{

    onSelect = (value)=>{
        message.info(value);
    };

    render(){
        return (
            <div>
                <Card title='基本' style={style}>
                    <Cascader options={options} placeholder='请选择您的城市' style={{width: 500}} onChange={this.onSelect} changeOnSelect/>
                </Card><br/>
                <Card title='默认值' style={style}>
                    <Cascader options={options} placeholder='请选择您的城市' style={{width: 500}} onChange={this.onSelect} defaultValue={['大连市', '中山区']} expandTrigger='hover'/>
                </Card><br/>
                <Card title='搜索' style={style}>
                    <Cascader options={options} placeholder='请选择您的城市' style={{width: 500}} onChange={this.onSelect} showSearch/>
                </Card><br/>
            </div>
        );
    }
}
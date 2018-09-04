import React from 'react';
import {Input, Card, Select, Icon} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

const selectBefore = (
    <Select defaultValue='https://'>
        <Select.Option value='http://'>http://</Select.Option>
        <Select.Option value='https://'>https://</Select.Option>
    </Select>
);

const selectAfter = (
    <Select defaultValue='.com'>
        <Select.Option value='.com'>.com</Select.Option>
        <Select.Option value='.org'>.org</Select.Option>
        <Select.Option value='.cn'>.cn</Select.Option>
    </Select>
);

export default class InputComponents extends React.Component{
    render(){
        return (
            <div>
                <Card title='基本使用' style={style}>
                    <Input placeholder='文本框' />
                </Card><br/>
                <Card title='前后置标签' style={style}>
                    <Input addonBefore='https://' addonAfter='.com'/><br/><br/>
                    <Input addonBefore={selectBefore} addonAfter={selectAfter}/><br/><br/>
                    <Input addonAfter={<Icon type='setting'/>} defaultValue='设置' style={{width: 200, float: 'left'}}/>
                </Card><br/>
                <Card title='输入框组合' style={style}>
                    <Input.Group compact>
                        <Select style={{width: 100}} defaultValue='+86'>
                            <Select.Option value='+86'>+86</Select.Option>
                            <Select.Option value='+87'>+87</Select.Option>
                        </Select>
                        <Input placeholder='您的电话号码' style={{width: 200}}/>
                    </Input.Group>
                </Card><br/>
                <Card title='文本域' style={style}>
                    <Input.TextArea placeholder='设置最大值和最小值的文本域' autosize={{minRows: 4, maxRows: 10}}/>
                </Card>
            </div>
        );
    }
}
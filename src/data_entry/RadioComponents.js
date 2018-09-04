import React from 'react';
import {Card, Radio, message} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

const options = [
    {label: '汉语', value: '汉语'},
    {label: '日语', value: '日语'},
    {label: '英语', value: '英语'},
    {label: '俄语', value: '俄语'},
    {label: '西班牙', value: '西班牙'},
    {label: '意大利', value: '意大利'},
];

export default class RadioComponents extends React.Component{
    state = {
      value: 1,
    };

    onChange = (e)=>{
        this.setState({
            value: e.target.value,
        });
        message.info(e.target.value)
    };

    render(){
        return (
            <div>
                <Card title='基本' style={style}>
                    <Radio>单选框</Radio>
                </Card><br/>
                <Card title='单选组合' style={style}>
                    <Radio.Group defaultValue={2} value={this.state.value} onChange={this.onChange}>
                        <Radio value={1}>A</Radio>
                        <Radio value={2}>B</Radio>
                        <Radio value={3}>C</Radio>
                        <Radio value={4}>D</Radio>
                    </Radio.Group>
                </Card><br/>
                <Card title='RadioGroup组合-配置方式' style={style}>
                    <Radio.Group options={options} onChange={this.onChange}/>
                </Card><br/>
                <Card title='单选组合' style={style}>
                    <Radio.Group defaultValue={2} value={this.state.value} onChange={this.onChange} buttonStyle={"solid"}>
                        <Radio.Button value={1}>A</Radio.Button>
                        <Radio.Button value={2}>B</Radio.Button>
                        <Radio.Button value={3}>C</Radio.Button>
                        <Radio.Button value={4}>D</Radio.Button>
                    </Radio.Group>
                </Card><br/>
            </div>
        );
    }
}
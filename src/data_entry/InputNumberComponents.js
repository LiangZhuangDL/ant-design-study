import React from 'react';
import {Card, InputNumber, message, Button} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

export default class InputNumberComponents extends React.Component{
    state = {
      disable: false,
    };

    onChange = (value)=>{
      message.info(value);
    };

    disableClick = ()=>{
      this.setState({disable: !this.state.disable})
    };

    render(){
        return (
            <div>
                <Card title='基本' style={style}>
                    <InputNumber min={1} max={10} onChange={this.onChange} defaultValue={4}/>
                </Card><br/>
                <Card title='小数' style={style}>
                    <InputNumber min={1} max={10} onChange={this.onChange} defaultValue={4} step={0.1}/>
                </Card><br/>
                <Card title='不可用' style={style}>
                    <InputNumber min={1} max={10} onChange={this.onChange} defaultValue={4} disabled={this.state.disable}/><br/><br/>
                    <Button htmlType='button' type='primary' onClick={this.disableClick}>不可用</Button>
                </Card><br/>
            </div>
        )
    }
}
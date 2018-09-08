import React from 'react';
import {Card, Slider, Switch, Icon} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

export default class SliderComponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false,
            value: 0,
        };
    }


    handleDisabled = (disabled)=>{
        this.setState({
            disabled: disabled,
        })
    };

    handleChange = (value)=>{
        this.setState({
            value,
        });
    };

    onChange = (value)=>{
        console.log('变化中的值：: ', value);
    };

    handleAfterChange = (value)=>{
        console.log('最后的值：: ', value);
    };

    formatter = (value)=>{
      return `${value}%`
    };

    render(){
        const { max, min } = this.props;
        const mid = ((max - min) / 2).toFixed(5);
        const preColor = this.state.value > mid ? '' : 'red';
        const nextColor = this.state.value >= mid ? 'red' : '';
        return (
            <div>
                <Card title='基本' style={style}>
                    <Slider defaultValue={30} disabled={this.state.disabled}/><br/>
                    <Slider range defaultValue={[20,50]} disabled={this.state.disabled}/><br/>
                    <div style={{textAlign: 'left'}}>
                        <p>可用/不可用</p>
                        <Switch checked={this.state.disabled} onChange={this.handleDisabled}/>
                    </div>
                </Card><br/>
                <Card title='带ICON的滑块' style={style}>
                    <Icon type='star' style={{color: preColor}}/>
                    <Slider onChange={this.handleChange} value={this.state.value} max={100} min={0}/>
                    <Icon type='star' style={{color: nextColor}}/>
                </Card><br/>
                <Card title='事件' style={style}>
                    <Slider defaultValue={30} onChange={this.onChange} onAfterChange={this.handleAfterChange} /><br/>
                    <Slider range defaultValue={[10,30]} onChange={this.onChange} onAfterChange={this.handleAfterChange} step={10}/>
                </Card><br/>
                <Card style={style} title='自定义提示'>
                    <Slider defaultValue={30} tipFormatter={this.formatter}/><br/>
                </Card>
            </div>
        );
    }

}


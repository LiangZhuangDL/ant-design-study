import React from 'react';
import {Rate, Card, Icon} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

export default class RateComponents extends React.Component{
    state = {
      value: 3,
    };

    onChange = (value)=>{
      this.setState({
          value: value,
      })
    };

    render(){
        return (
            <div>
                <Card title='基本' style={style}>
                    <Rate allowHalf defaultValue={2.5}/>
                </Card><br/>
                <Card title='文案展现' style={style}>
                    <Rate allowHalf value={this.state.value} onChange={this.onChange}/>
                    <span>{this.state.value}星</span>
                </Card>
                <Card title='其他字符' style={style}>
                    <Rate allowHalf defaultValue={2.5} character={<Icon type='setting'/>}/>
                </Card><br/>
            </div>
        );
    }

}
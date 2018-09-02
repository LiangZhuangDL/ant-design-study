import React from 'react';
import {Card, Checkbox, message, Button} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

const options = [
    {
        label: '男',
        value: '男'
    },
    {
        label: '女',
        value: '女'
    },
    {
        label: '保密',
        value: '保密'
    },

];

export default class CheckboxComponents extends React.Component{
    state = {
        disabled: false,
        checked: false,
        indeterminate: false,
    };

    onChange = (e)=>{
      message.info(e);
    };

    disableClick = ()=>{
      this.setState({disabled: !this.state.disabled})
    };
    render(){
        return (
          <div>
              <Card title='基本用法' style={style}>
                  <Checkbox onChange={this.onChange} value='多选框'>多选框</Checkbox>
              </Card><br/>
              <Card title='多选框组' style={style}>
                  <Checkbox.Group options={options} onChange={this.onChange} defaultValue={['男']}/>
              </Card><br/>
              <Card title='受控多选框' style={style}>
                  <Button htmlType='button' onClick={this.disableClick}>不可用</Button><br/><br/>
                  <Checkbox.Group options={options} onChange={this.onChange} defaultValue={['男']} disabled={this.state.disabled}/>
              </Card>
          </div>
        );
    }
}
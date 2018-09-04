import React from 'react';
import {Card, Select, message} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

export default class SelectComponents extends React.Component{

    onChange = (value)=>{
        message.info(value);
    };

    render(){
        return (
          <div>
              <Card title='基本使用' style={style}>
                  <Select defaultValue='英语' onChange={this.onChange} style={{width: 200}}>
                      <Select.Option value='汉语'>汉语</Select.Option>
                      <Select.Option value='英语'>英语</Select.Option>
                      <Select.Option value='俄语'>俄语</Select.Option>
                      <Select.Option value='西班牙语'>西班牙语</Select.Option>
                      <Select.Option value='葡萄牙语'>葡萄牙语</Select.Option>
                  </Select>
              </Card>
          </div>
        );
    }

}
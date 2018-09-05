import React from 'react';
import {Card, Switch, message, Icon} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

export default class SwitchComponents extends React.Component{
    state = {
        loading: false,
    };

    onChange = (checked)=>{
        message.info(checked.toString())
    };

    onLoadingChange = (checked)=>{
        this.setState({loading: true});
        setTimeout(()=>{
            this.setState({loading: false});
            message.info(checked.toString());
        }, 2000);
    };

    render(){
        return (
            <div>
                <Card title='基本' style={style}>
                    <Switch defaultChecked onChange={this.onChange}/>
                </Card><br/>
                <Card title='文字和图标' style={style}>
                    <Switch defaultChecked onChange={this.onChange} checkedChildren={'开'} unCheckedChildren={'关'}/><br/><br/>
                    <Switch defaultChecked onChange={this.onChange} checkedChildren={<Icon type='check'/>} unCheckedChildren={<Icon type='close'/>}/>
                </Card><br/>
                <Card title='加载中' style={style}>
                    <Switch loading={this.state.loading} onChange={this.onLoadingChange}/>
                </Card><br/>
            </div>
        );
    }
}
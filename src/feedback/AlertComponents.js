import React from 'react';
import {Card, Alert} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

export default class AlertComponents extends React.Component{
    render(){
        return (
            <div>
                <Card style={style} title='基础'>
                    <Alert message='消息' type='success'/>
                </Card><br/>
                <Card style={style} title='四种样式'>
                    <Alert message='成功' type='success'/><br/>
                    <Alert message='信息' type='info'/><br/>
                    <Alert message='警告' type='warning'/><br/>
                    <Alert message='错误' type='error'/><br/>
                </Card><br/>
                <Card style={style} title='可关闭的警告提示'>
                    <Alert message='消息' type='success' closable/>
                </Card><br/>
                <Card style={style} title='含有辅助性文字介绍'>
                    <Alert description='这是一条消息' message='消息' type='success' closable/>
                </Card><br/>
                <Card style={style} title='图标'>
                    <Alert message='成功' type='success' showIcon/><br/>
                    <Alert message='信息' type='info' showIcon/><br/>
                    <Alert message='警告' type='warning' showIcon/><br/>
                    <Alert message='错误' type='error' showIcon/><br/>
                </Card><br/>
                <Card style={style} title='自定义关闭'>
                    <Alert message='消息' type='success' closeText='关闭'/>
                </Card><br/>
            </div>
        )
    }
}
import React from 'react';
import {Card, notification, Button} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

export default class NotificationComponents extends React.Component{

    openBasicNotification = ()=>{
       notification.open({
           message: '通知提醒框',
           description: '内容',
           duration: 2,
       })
    };

    openNotificationWithIcon = (type)=>{
        notification[type]({
            message: '通知提醒框',
            description: '内容',
        })
    };

    render(){
        return (
            <div>
                <Card style={style} title='基本'>
                    <Button htmlType='button' onClick={this.openBasicNotification} type='primary'>显示基本通知提醒框</Button>
                </Card><br/>
                <Card style={style} title='带有图标的通知提醒框'>
                    <Button onClick={() => this.openNotificationWithIcon('success')} htmlType='button'>成功</Button><br/><br/>
                    <Button onClick={() => this.openNotificationWithIcon('info')} htmlType='button'>信息</Button><br/><br/>
                    <Button onClick={() => this.openNotificationWithIcon('warning')} htmlType='button'>警告</Button><br/><br/>
                    <Button onClick={() => this.openNotificationWithIcon('error')} htmlType='button'>错误</Button>
                </Card>
            </div>
        )
    }
}
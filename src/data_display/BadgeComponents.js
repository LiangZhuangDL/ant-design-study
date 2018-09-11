import React from 'react';
import {Card, Avatar, Badge} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

export default class BadgeComponents extends React.Component{

    render(){
        return (
            <div>
                <Card title='基本' style={style}>
                    <Badge count={5}>
                        <Avatar icon='user' shape='square'/>
                    </Badge><br/><br/>
                    <Badge count={0} showZero>
                        <Avatar icon='user' shape='square'/>
                    </Badge>
                </Card><br/>
                <Card title='封顶数字' style={style}>
                    <Badge count={100}>
                        <Avatar icon='user' shape='square'/>
                    </Badge><br/><br/>
                    <Badge count={1000} overflowCount={999}>
                        <Avatar icon='user' shape='square'/>
                    </Badge>
                </Card><br/>
                <Card style={style} title='用于表示状态的小圆点'>
                    <div style={{ float: 'left'}}>
                        <Badge status="success" text="成功" />
                        <br />
                        <Badge status="error" text="错误" />
                        <br />
                        <Badge status="default" text="默认"/>
                        <br />
                        <Badge status="processing" text="处理" />
                        <br />
                        <Badge status="warning" text="警告" />
                    </div>
                </Card><br/>
                <Card title='小红点' style={style}>
                    <Badge dot>
                        <Avatar icon='user' shape='square'/>
                    </Badge><br/>
                </Card>
            </div>
        )
    }

}
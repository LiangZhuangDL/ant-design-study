import React from 'react';
import {Card, Avatar, Badge} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

export default class AvatarComponents extends React.Component{
   render(){
       return (
           <div>
               <Card title='基本' style={style}>
                   <div>
                       <Avatar size={64} icon="user" /><p>自定义大小</p>
                       <Avatar size="large" icon="user" /><p>大</p>
                       <Avatar icon="user" /><p>默认</p>
                       <Avatar size="small" icon="user" /><p>小</p>
                   </div><br/>
                   <div>
                       <Avatar shape="square" size={64} icon="user" /><p>自定义大小</p>
                       <Avatar shape="square" size="large" icon="user" /><p>大</p>
                       <Avatar shape="square" icon="user" /><p>默认</p>
                       <Avatar shape="square" size="small" icon="user" /><p>小</p>
                   </div>
               </Card><br/>
               <Card title='类型' style={style}>
                    <Avatar icon='lock' style={{color: 'blue'}}/><p>图标</p>
                    <Avatar>User</Avatar><p>文字</p>
                    <Avatar style={{backgroundColor: 'red'}}>文字</Avatar><p>带样式</p>
                    <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/><p>图片</p>
               </Card><br/>
               <Card style={style} title='带徽标的头像'>
                   <Badge count={2}>
                       <Avatar shape="square" icon='user'/>
                   </Badge><br/><br/>
                   <Badge dot>
                       <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/>
                   </Badge>
               </Card>
           </div>
       )
   }
}

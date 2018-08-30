import React from 'react';
import {Menu, Dropdown, Icon, Card, Button, message} from 'antd';

const SubMenu = Menu.SubMenu;

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px'
};

const onClick = function({key}){
    message.info('点击了key值为：“'+ key + '”的项目');
};

const handleButtonClick = ()=>{
  message.info('请点击右边菜单按钮');
};

const menu = (
    <Menu onClick={onClick} style={{width: 120}}>
        <Menu.Item key='百度'>
            <a target='_blank' rel="noopener noreferrer" href='https://www.baidu.com'>百度</a>
        </Menu.Item>
        <Menu.Divider/>
        <Menu.Item key='瘾科技'>
            <a target='_blank' rel="noopener noreferrer" href='https://cn.engadget.com/'>瘾科技</a>
        </Menu.Item>
        <Menu.Divider/>
        <Menu.Item key='知乎'>
            <a target='_blank' rel="noopener noreferrer" href='https://www.zhihu.com/'>知乎</a>
        </Menu.Item>
        <Menu.Divider/>
        <SubMenu title='BTA'>
            <Menu.Item>百度</Menu.Item>
            <Menu.Item>腾讯</Menu.Item>
            <Menu.Item>阿里巴巴</Menu.Item>
        </SubMenu>
    </Menu>
);


export default class DropdownComponents extends React.Component{
    render(){
        return (
            <div>
                <Card title='基本' style={style}>
                    <Dropdown overlay={menu} placement='bottomCenter' trigger={['click']}>
                        <Button href='/' type='primary'>网站列表<Icon type='down'/></Button>
                    </Dropdown>
                </Card><br/>
                <Card title='带下拉框的按钮及多级菜单' style={style}>
                    <Dropdown.Button overlay={menu} onClick={handleButtonClick} trigger={['click']} placement='bottomRight'>
                        下拉菜单
                    </Dropdown.Button>
                    <Dropdown overlay={menu}>
                        <Button style={{ marginLeft: 8 }}>
                            Button <Icon type="down" />
                        </Button>
                    </Dropdown>
                </Card><br/>
            </div>
        );
    }
}
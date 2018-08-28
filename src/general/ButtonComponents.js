import React from 'react';
import {Button, Card, Menu, Dropdown, Icon} from 'antd';

const ButtonGroup = Button.Group;

const menu = (
    <Menu>
        <Menu.Item key='1'>注册</Menu.Item>
        <Menu.Item key='2'>登录</Menu.Item>
        <Menu.Item key='3'>服务</Menu.Item>
    </Menu>
    );

const style ={
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px'
};

class ButtonComponents extends React.Component{
    state = {
        loading: false,
        iconLoading: false
    };

    enterLoad(){
        this.setState({ loading: true});
    }

    enterIconLoading(){
        this.setState({iconLoading: true})
    }

    render(){
        return (
            <div style={style}>
                <Card title='按钮类型、按钮组' style={style}>
                    <ButtonGroup>
                        <Button htmlType='button' type='primary' >主按钮</Button>
                        <Button htmlType='button' type='default' >次按钮</Button>
                        <Button htmlType='button' type='danger' >危险按钮</Button>
                        <Button htmlType='button' type='dashed' >虚线按钮</Button>
                        <Button htmlType='button' type='dashed' disabled>不可用按钮</Button>
                    </ButtonGroup>
                </Card><br/>
                <Card title='图标按钮' style={style}>
                    <Button type="primary" shape="circle" icon="search" htmlType='button'/>
                    <Button type="primary" icon="search" htmlType='button'>搜索</Button><br/><br/>
                    <Button shape="circle" icon="search" htmlType='button'/>
                    <Button icon="search" htmlType='button'>搜索</Button>
                    <br /><br/>
                    <Button shape="circle" icon="search" htmlType='button' />
                    <Button icon="search" htmlType='button'>搜索</Button><br/><br/>
                    <Button type="dashed" shape="circle" icon="search" htmlType='button' />
                    <Button type="dashed" icon="search" htmlType='button'>搜索</Button>
                </Card><br/>
                <Card title='加载中状态' style={style}>
                    <Button htmlType='button' type='primary' loading>Loading</Button><br/><br/>
                    <Button htmlType='button' type='primary' loading={this.state.loading} onClick={this.enterLoad.bind(this)}>Click me</Button><br/><br/>
                    <Button htmlType='button' type='primary' loading={this.state.iconLoading} onClick={this.enterIconLoading.bind(this)} icon='poweroff'>Click me</Button>
                </Card><br/>
                <Card title='多按钮组合' style={style}>
                    <Dropdown overlay={menu}>
                        <Button htmlType='button' type='danger'>
                            用户操作<Icon type='down'/>
                        </Button>
                    </Dropdown>
                </Card><br/>
                <Card title='幽灵按钮' style={style}>
                    <Button type="primary" ghost htmlType='button'>Primary</Button>
                    <Button ghost htmlType='button'>Default</Button>
                    <Button type="dashed" ghost htmlType='button'>Dashed</Button>
                    <Button type="danger" ghost htmlType='button'>danger</Button>
                </Card>
            </div>
        );
    }
}

export default ButtonComponents;
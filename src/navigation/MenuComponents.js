import React from 'react';
import {Menu, Icon, Card, Button, Switch} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px'
};

export default class MenuComponents extends React.Component{

    state = {
        collapsed: false,
        current: 'mail',
        theme: 'dark'
    };

    handleClick = (e)=>{
        this.setState({current: e.key})
    };

    toggleCollapsed = ()=>{
        this.setState({collapsed:!this.state.collapsed})
    };

    changeTheme = (value)=>{
        this.setState({theme: value? 'dark': 'light'})
    };

    render(){
        return (
            <div>
                <Card title='顶部导航' style={style}>
                    <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode='horizontal'>
                        <SubMenu title={<span><Icon type="setting" />应用</span>}>
                            <MenuItemGroup title='项目1'>
                                <Menu.Item key='setting:1'>应用1</Menu.Item>
                                <Menu.Item key='setting:2'>应用2</Menu.Item>
                            </MenuItemGroup>
                            <MenuItemGroup title='项目2'>
                                <Menu.Item key='setting:3'>应用3</Menu.Item>
                                <Menu.Item key='setting:4'>应用4</Menu.Item>
                            </MenuItemGroup>
                        </SubMenu>
                    </Menu>
                </Card><br/>
                <Card title='内嵌菜单' style={style}>
                    <Switch
                        checked={this.state.theme === 'dark'}
                        onChange={this.changeTheme}
                        checkedChildren="Dark"
                        unCheckedChildren="Light"
                    /><br/><br/>
                    <div>
                        <Button onClick={this.toggleCollapsed} htmlType='button'><Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} style={{ marginBottom: 16 }}/></Button>
                    </div>
                    <Menu onClick={this.handleClick} mode='inline' style={{ width: 256 }} defaultOpenKeys={["apps"]} defaultSelectedKeys={['setting:5']} inlineCollapsed={this.state.collapsed} theme={this.state.theme}>
                        <SubMenu title={<span><Icon type="setting"/>应用</span>} key='apps'>
                            <MenuItemGroup title='项目3'>
                                <Menu.Item key='setting:5'>应用1</Menu.Item>
                                <Menu.Item key='setting:6'>应用2</Menu.Item>
                            </MenuItemGroup>
                            <MenuItemGroup title='项目4'>
                                <Menu.Item key='setting:7'>应用3</Menu.Item>
                                <Menu.Item key='setting:8'>应用4</Menu.Item>
                            </MenuItemGroup>
                        </SubMenu>
                    </Menu>
                </Card><br/>
            </div>
        );
    }
}
import React from 'react';
import {Layout, Card, Menu, Breadcrumb, Icon} from 'antd';

const {Header, Footer, Sider, Content} = Layout;

const {SubMenu} = Menu;

const style = {
    width: 1000,
    margin: 'auto',
    fontSize: '20px',
    color: 'white',
};

class LayoutComponents extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        };
        this.changeCollapsed = this.changeCollapsed.bind(this);
    }

    changeCollapsed = () => {

        this.setState({ collapsed: !this.state.collapsed});
    };

    render(){
        return (
            <div>
                <Card title='基本结构' style={style}>
                    <div>
                        <Layout>
                            <Header>Header</Header>
                            <Content>Content</Content>
                            <Footer>Footer</Footer>
                        </Layout><br/>
                        <Layout>
                            <Header>Header</Header>
                            <Layout>
                                <Sider style={{height: 50}}>Sider</Sider>
                                <Content>Content</Content>
                            </Layout>
                            <Footer>Footer</Footer>
                        </Layout><br/>
                        <Layout>
                            <Header>Header</Header>
                            <Layout>
                                <Content>Content</Content>
                                <Sider style={{height: 50}}>Sider</Sider>
                            </Layout>
                            <Footer>Footer</Footer>
                        </Layout><br/>
                        <Layout>
                            <Sider>Sider</Sider>
                            <Layout>
                                <Header>Header</Header>
                                <Content>Content</Content>
                                <Footer>Footer</Footer>
                            </Layout>
                        </Layout>
                    </div>
                </Card><br/>
                <Card title='上中下布局' style={style}>
                    <Layout>
                        <Header>
                            <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']} style={{lineHeight: '64px'}}>
                                <Menu.Item key='1'>项目1</Menu.Item>
                                <Menu.Item key='2'>项目2</Menu.Item>
                                <Menu.Item key='3'>项目3</Menu.Item>
                            </Menu>
                        </Header>
                        <Content style={{ padding: '0 50px' }}>
                            <Breadcrumb style={{ margin: '16px 0', textAlign: 'left' }}>
                                <Breadcrumb.Item>首页</Breadcrumb.Item>
                                <Breadcrumb.Item>列表</Breadcrumb.Item>
                                <Breadcrumb.Item>应用</Breadcrumb.Item>
                            </Breadcrumb>
                            <div style={{ background: '#fff', padding: 24, minHeight: 280, color: 'black' }}>Content</div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            Ant Design ©2018 Created by Ant UED
                        </Footer>
                    </Layout>
                </Card><br/>
                <Card title='顶部-侧边布局' style={style}>
                    <Layout>
                        <Header>
                            <div />
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['2']}
                                style={{ lineHeight: '64px' }}
                            >
                                <Menu.Item key="1">项目1</Menu.Item>
                                <Menu.Item key="2">项目2</Menu.Item>
                                <Menu.Item key="3">项目3</Menu.Item>
                            </Menu>
                        </Header>
                        <Content style={{ padding: '0 50px' }}>
                            <div style={{ margin: '16px 0', textAlign: 'left' }}>
                                <Icon
                                    className="trigger"
                                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                    onClick={this.changeCollapsed}
                                    style={{color: 'black'}}
                                />
                            </div>
                            <Breadcrumb style={{ margin: '16px 0', textAlign: 'left' }}>
                                <Breadcrumb.Item>首页</Breadcrumb.Item>
                                <Breadcrumb.Item>列表</Breadcrumb.Item>
                                <Breadcrumb.Item>应用</Breadcrumb.Item>
                            </Breadcrumb>
                            <Layout style={{background: '#fff' }}>
                                <Sider style={{ background: '#fff', height: '100%', width: 200 }} collapsed={this.state.collapsed}>
                                    <Menu
                                        mode="inline"
                                        defaultSelectedKeys={['1']}
                                        defaultOpenKeys={['user']}
                                    >
                                        <SubMenu key="user" title={<span><Icon type="user" />用户</span>}>
                                            <Menu.Item key="1">option1</Menu.Item>
                                            <Menu.Item key="2">option2</Menu.Item>
                                            <Menu.Item key="3">option3</Menu.Item>
                                            <Menu.Item key="4">option4</Menu.Item>
                                        </SubMenu>
                                        <SubMenu key="laptop" title={<span><Icon type="laptop" />桌面</span>}>
                                            <Menu.Item key="5">option5</Menu.Item>
                                            <Menu.Item key="6">option6</Menu.Item>
                                            <Menu.Item key="7">option7</Menu.Item>
                                            <Menu.Item key="8">option8</Menu.Item>
                                        </SubMenu>
                                        <SubMenu key="notification" title={<span><Icon type="notification" />注意</span>}>
                                            <Menu.Item key="9">option9</Menu.Item>
                                            <Menu.Item key="10">option10</Menu.Item>
                                            <Menu.Item key="11">option11</Menu.Item>
                                            <Menu.Item key="12">option12</Menu.Item>
                                        </SubMenu>
                                    </Menu>
                                </Sider>
                                <Content style={{ padding: '0 24px', minHeight: 280,textAlign: 'right' }}>
                                    Content
                                </Content>
                            </Layout>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            Ant Design ©2018 Created by Ant UED
                        </Footer>
                    </Layout>
                </Card>
            </div>
        )
    }
}

export default LayoutComponents;
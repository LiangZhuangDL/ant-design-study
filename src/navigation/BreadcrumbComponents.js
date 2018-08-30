import React from 'react';
import {Card, Breadcrumb, Icon, Alert} from 'antd';
import { HashRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px'
};

const Apps = ()=>(
    <ul>
        <li>
            <Link to="/apps/1">应用1</Link>：<Link to="/apps/1/detail">详情</Link>
        </li>
        <li>
            <Link to="/apps/2">应用2</Link>：<Link to="/apps/2/detail">详情</Link>
        </li>
    </ul>
);

const breadcrumbNameMap = {
    '/apps': '应用列表',
    '/apps/1': '应用1',
    '/apps/2': '应用2',
    '/apps/1/detail': '详情',
    '/apps/2/detail': '详情',
};

const Home = withRouter((props) => {
    const { location } = props;
    const pathSnippets = location.pathname.split('/').filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>
                    {breadcrumbNameMap[url]}
                </Link>
            </Breadcrumb.Item>
        );
    });
    const breadcrumbItems = [(
        <Breadcrumb.Item key="home">
            <Link to="/">首页</Link>
        </Breadcrumb.Item>
    )].concat(extraBreadcrumbItems);
    return (
        <div className="demo">
            <div className="demo-nav">
                <Link to="/">首页</Link>
                <Link to="/apps">应用列表</Link>
            </div>
            <Switch>
                <Route path="/apps" component={Apps} />
                <Route render={() => <span>首页</span>} />
            </Switch>
            <Alert style={{ margin: '16px 0' }} message="点击上面的导航切换：" />
            <Breadcrumb separator=">">
                {breadcrumbItems}
            </Breadcrumb>
        </div>
    );
});

class BreadcrumbComponents extends React.Component{
    render(){
        return (
            <div>
                <Card title='基本' style={style}>
                    <Breadcrumb>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item><a href='/'>应用中心</a></Breadcrumb.Item>
                        <Breadcrumb.Item><a href='/'>应用列表</a></Breadcrumb.Item>
                        <Breadcrumb.Item>应用</Breadcrumb.Item>
                    </Breadcrumb>
                </Card><br/>
                <Card title='带有图标的' style={style}>
                    <Breadcrumb>
                        <Breadcrumb.Item href=''><Icon type="home" /></Breadcrumb.Item>
                        <Breadcrumb.Item href=''><Icon type="user" />用户</Breadcrumb.Item>
                        <Breadcrumb.Item>用户详情</Breadcrumb.Item>
                    </Breadcrumb>
                </Card><br/>
                <Card title="配合React-Router" style={style}>
                    <Router>
                        <Home />
                    </Router>,
                </Card>
            </div>
        );
    }
}

export default BreadcrumbComponents;
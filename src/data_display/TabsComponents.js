import React from 'react';
import {Card, Tabs, Icon, Button} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

export default class TabsComponents extends React.Component{
    render(){
        return (
            <div>
                <Card style={style} title='基本'>
                    <Tabs defaultActiveKey='1'>
                        <Tabs.TabPane tab='标签页1' key='1'>这是标签页1的内容</Tabs.TabPane>
                        <Tabs.TabPane tab='标签页2' key='2'>这是标签页2的内容</Tabs.TabPane>
                        <Tabs.TabPane tab='标签页3' key='3'>这是标签页3的内容</Tabs.TabPane>
                    </Tabs>
                </Card><br/>
                <Card style={style} title='图标'>
                    <Tabs defaultActiveKey='1'>
                        <Tabs.TabPane tab={<span><Icon type='apple'/>苹果</span>} key='1'>这是标签页1的内容</Tabs.TabPane>
                        <Tabs.TabPane tab={<span><Icon type='android'/>安卓</span>} key='2'>这是标签页2的内容</Tabs.TabPane>
                    </Tabs>
                </Card><br/>
                <Card style={style} title='附加内容'>
                    <Tabs defaultActiveKey='1' tabBarExtraContent={<Button htmlType='button' type='primary'>操作</Button>}>
                        <Tabs.TabPane tab={<span><Icon type='apple'/>苹果</span>} key='1'>这是标签页1的内容</Tabs.TabPane>
                        <Tabs.TabPane tab={<span><Icon type='android'/>安卓</span>} key='2'>这是标签页2的内容</Tabs.TabPane>
                    </Tabs>
                </Card><br/>
                <Card style={style} title='卡片式页签'>
                    <Tabs defaultActiveKey='1' type='card'>
                        <Tabs.TabPane tab='标签页1' key='1'>这是标签页1的内容</Tabs.TabPane>
                        <Tabs.TabPane tab='标签页2' key='2'>这是标签页2的内容</Tabs.TabPane>
                        <Tabs.TabPane tab='标签页3' key='3'>这是标签页3的内容</Tabs.TabPane>
                    </Tabs>
                </Card><br/>
            </div>
        )
    }
}
import React from 'react';
import {Card, Drawer, Button, Radio} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

export default class DrawerComponents extends React.Component{
    state = {
        visible: false,
        childrenVisible: false,
        placement: 'right',
    };

    showDrawer = ()=>{
        this.setState({
            visible: true,
        })
    };

    showChildrenDrawer = ()=>{
        this.setState({
            childrenVisible: true,
        })
    };

    onClose = ()=>{
        this.setState({
            visible: false,
            childrenVisible: false,
        })
    };

    onChange = (e)=>{
        this.setState({
            placement: e.target.value,
        })
    };

    render(){
        return (
            <div>
                <Card style={style} title='基础抽屉'>
                    <Button htmlType='button' type='primary' onClick={this.showDrawer}>打开抽屉</Button>
                    <Drawer visible={this.state.visible} title='抽屉测试' placement='right' closable={false} onClose={this.onClose}>
                        <span>内容</span>
                    </Drawer>
                </Card><br/>
                <Card style={style} title='自定义位置'>
                    <Radio.Group defaultValue={this.state} onChange={this.onChange}>
                        <Radio value='top'>TOP</Radio>
                        <Radio value='right'>RIGHT</Radio>
                        <Radio value='bottom'>BOTTOM</Radio>
                        <Radio value='left'>LEFT</Radio>
                    </Radio.Group>
                    <Button htmlType='button' type='primary' onClick={this.showDrawer}>打开抽屉</Button>
                    <Drawer visible={this.state.visible} title='抽屉测试' placement={this.state.placement} closable={false} onClose={this.onClose}>
                        <span>内容</span>
                    </Drawer>
                </Card><br/>
                <Card style={style} title='对象编辑'>
                    <Button htmlType='button' type='primary' onClick={this.showDrawer}>打开抽屉</Button>
                    <Drawer visible={this.state.visible} title='抽屉测试' placement='right' closable={this.state.visible} onClose={this.onClose} maskClosable={false}>
                        <div style={{margin: 20}}>
                            <Button htmlType='button' type='default' onClick={this.onClose}>取消</Button>
                            <Button htmlType='button' type='primary' onClick={this.onClose}>提交</Button>
                        </div>
                    </Drawer>
                </Card><br/>
                <Card style={style} title='多层抽屉'>
                    <Button htmlType='button' type='primary' onClick={this.showDrawer}>打开抽屉</Button>
                    <Drawer visible={this.state.visible} title='抽屉测试' placement='right' closable={false} onClose={this.onClose} width={600}>
                        <Button htmlType='button' type='primary' onClick={this.showChildrenDrawer}>打开子抽屉</Button>
                        <Drawer visible={this.state.childrenVisible} placement='right' closable={false} onClose={this.onClose} width={300}>
                            <span>内容</span>
                        </Drawer>
                    </Drawer>
                </Card>
            </div>
        )
    }
}
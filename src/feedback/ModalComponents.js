import React from 'react';
import {Card, Modal, Button} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

function countDown() {
    let secondsToGo = 5;
    const modal = Modal.success({
        title: '计时销毁对话框',
        content: `此对话框还有${secondsToGo}秒就会销毁`,
    });
    setInterval(()=>{
        secondsToGo = secondsToGo - 1;
        modal.update({
            content: `此对话框还有${secondsToGo}秒就会销毁`,
        })
    }, 1000);
    setTimeout(()=>modal.destroy(), secondsToGo * 1000);
}

function success() {
    Modal.success({
        title: '成功对话框',
        content: '内容',
    })
}

function error() {
    Modal.error({
        title: '错误对话框',
        content: '内容',
    })
}

function warning() {
    Modal.warning({
        title: '警告对话框',
        content: '内容',
    })
}

function info() {
    Modal.info({
        title: '信息对话框',
        content: '内容',
    })
}

function showConfirm(){
    Modal.confirm({
        title: '标题',
        content: '内容',
        onOk(){
            return new Promise((resolve, reject)=>{
                setTimeout(Math.random() > 0.5 ?resolve: reject, 1000);
            }).catch(()=>console.log('错误'));
        },
        onCancel(){},
    })
}

export default class ModalComponents extends React.Component{
    state = {
        visible: false,
        loading: false,
    };

    showModal = ()=>{
        this.setState({
            visible: true,
        })
    };

    handleOK = (e)=>{
        console.log(e);
        this.setState({
            visible: false,
        })
    };

    handleCustomizeOK = (e)=>{
        this.setState({
            loading: true,
        });
        setTimeout(()=>{
            this.setState({
                loading: false,
                visible: false
            })
        }, 3000)
    };

    handleCancel = (e)=>{
        console.log(e);
        this.setState({
            visible: false,
        })
    };

     render(){
        return (
            <div>
                <Card style={style} title='基本'>
                    <Button htmlType='button' type='primary' onClick={this.showModal}>显示对话框</Button>
                    <Modal title='基本对话框' centered visible={this.state.visible} onOk={this.handleOK} onCancel={this.handleCancel}>
                        <p>内容</p>
                    </Modal>
                </Card><br/>
                <Card style={style} title='自定义页脚'>
                    <Button htmlType='button' type='primary' onClick={this.showModal}>显示自定义对话框</Button>
                    <Modal title='显示自定义对话框' visible={this.state.visible} onOk={this.handleCustomizeOK} onCancel={this.handleCancel}
                    footer={[<Button htmlType='button' onClick={this.handleCancel}>返回</Button>,<Button type='primary' htmlType='button' onClick={this.handleCustomizeOK} loading={this.state.loading}>提交</Button>]}>
                        <p>内容</p>
                    </Modal>
                </Card><br/>
                <Card style={style} title='确认对话框'>
                    <Button htmlType='button' onClick={showConfirm} type='primary'>确认</Button>
                </Card><br/>
                <Card title='信息提示' style={style}>
                    <Button htmlType='button' type='primary' onClick={info}>信息</Button>
                    <Button htmlType='button' type='default' onClick={success}>成功</Button>
                    <Button htmlType='button' type='danger' onClick={warning}>警告</Button>
                    <Button htmlType='button' type='dashed' onClick={error}>错误</Button>
                </Card><br/>
                <Card style={style} title='手动更新和移除'>
                    <Button htmlType='button' onClick={countDown} type='primary'>对话框会在5秒内关闭</Button>
                </Card><br/>
                <Card style={style} title='自定义页脚按钮属性'>
                    <Button htmlType='button' type='primary' onClick={this.showModal}>显示对话框</Button>
                    <Modal title='自定义页脚按钮属性对话框' centered visible={this.state.visible} onOk={this.handleOK} onCancel={this.handleCancel} okButtonProps={{type: 'danger'}} cancelButtonProps={{type: 'danger'}}>
                        <p>内容</p>
                    </Modal>
                </Card>
            </div>
        )
    }
}
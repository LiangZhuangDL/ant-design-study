import React from 'react';
import {Card, message, Button} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

export default class MessageComponents extends React.Component{

    info = ()=>{
        message.info("普通提示");
    };

    warning = ()=>{
        message.warning("警告提示")
    };

    error = ()=>{
        message.error("错误提示")
    };

    success = ()=>{
        message.success("成功提示")
    };

    tenSecondsSuccess = ()=>{
        message.success("10秒延时提示", 10)
    };

    asynSuccess = ()=>{
        const hide = message.loading("异步提示",0);
        setTimeout(hide, 3000)
    };

    promiseInterface = ()=>{
        message.loading("载入中",3).then(()=>message.success("载入完成", 3)).then(()=>message.info("载入已经完成", 3))
    };

    render(){
        return (
            <div>
                <Card style={style} title='普通提示'>
                    <Button htmlType='button' type='primary' onClick={this.info}>显示普通提示</Button>
                </Card><br/>
                <Card style={style} title='其他提示类型'>
                    <Button htmlType='button' type='primary' onClick={this.success}>显示成功提示</Button><br/><br/>
                    <Button htmlType='button' type='primary' onClick={this.error}>显示错误提示</Button><br/><br/>
                    <Button htmlType='button' type='primary' onClick={this.warning}>显示警告提示</Button>
                </Card><br/>
                <Card style={style} title='修改延时'>
                    <Button htmlType='button' type='primary' onClick={this.tenSecondsSuccess}>显示自定义十秒延时提示</Button>
                </Card><br/>
                <Card style={style} title='加载中'>
                    <Button htmlType='button' type='primary' onClick={this.asynSuccess}>显示加载提示</Button>
                </Card><br/>
                <Card style={style} title='Promise接口'>
                    <Button htmlType='button' type='primary' onClick={this.promiseInterface}>显示Promise接口</Button>
                </Card><br/>
            </div>
        )
    }
}
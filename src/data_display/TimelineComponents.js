import React from 'react';
import {Button, Card, Icon, Timeline} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

export default class TimelineComponents extends React.Component{
    state = {
        reverse: false,
    };

    handleClick = ()=>{
        this.setState({
            reverse: !this.state.reverse,
        })
    };

    render(){
        return (
            <div>
                <Card style={style} title='基本用法'>
                    <Timeline style={{float: 'left'}}>
                        <Timeline.Item>1</Timeline.Item>
                        <Timeline.Item>2</Timeline.Item>
                        <Timeline.Item>3</Timeline.Item>
                        <Timeline.Item>4</Timeline.Item>
                    </Timeline>
                </Card><br/>
                <Card style={style} title='最后一个及排序'>
                    <Timeline style={{float: 'left'}} pending='载入中' reverse={this.state.reverse} >
                        <Timeline.Item>1</Timeline.Item>
                        <Timeline.Item>2</Timeline.Item>
                        <Timeline.Item>3</Timeline.Item>
                        <Timeline.Item>4</Timeline.Item>
                    </Timeline>
                    <Button htmlType='button' onClick={this.handleClick}>排序</Button>
                </Card><br/>
                <Card style={style} title='自定义锚点'>
                    <Timeline style={{float: 'left'}}>
                        <Timeline.Item>1</Timeline.Item>
                        <Timeline.Item>2</Timeline.Item>
                        <Timeline.Item dot={<Icon type='android'/>}>3</Timeline.Item>
                        <Timeline.Item>4</Timeline.Item>
                    </Timeline>
                </Card><br/>
                <Card style={style} title='圆圈颜色'>
                    <Timeline style={{float: 'left'}}>
                        <Timeline.Item color='red'>1</Timeline.Item>
                        <Timeline.Item color='yellow'>2</Timeline.Item>
                        <Timeline.Item dot={<Icon type='android' color='green'/>}>3</Timeline.Item>
                        <Timeline.Item>4</Timeline.Item>
                    </Timeline>
                </Card><br/>
                <Card style={style} title='交替展现'>
                    <Timeline style={{float: 'left'}} mode='alternate'>
                        <Timeline.Item>1</Timeline.Item>
                        <Timeline.Item>2</Timeline.Item>
                        <Timeline.Item>3</Timeline.Item>
                        <Timeline.Item>4</Timeline.Item>
                    </Timeline>
                </Card><br/>
                <Card style={style} title='右侧时间轴'>
                    <Timeline mode='right'>
                        <Timeline.Item>1</Timeline.Item>
                        <Timeline.Item>2</Timeline.Item>
                        <Timeline.Item>3</Timeline.Item>
                        <Timeline.Item>4</Timeline.Item>
                    </Timeline>
                </Card><br/>
            </div>
        )
    }
}
import React from 'react';
import {Steps, Card, Icon, Button, message} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
    textAlign: 'left',
};

const steps = [
    {
        title: '步骤1',
        content: '内容1',
    },
    {
        title: '步骤2',
        content: '内容2',
    },
    {
        title: '步骤3',
        content: '内容三',
    },
    {
        title: '步骤4',
        content: '内容四',
    }];

export default class StepsComponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        }
    }

    next() {
        const current = this.state.current + 1;
        this.setState({current});
    };

    prev() {
        const current = this.state.current - 1;
        this.setState({current});
    };

    render() {
        return (
            <div>
                <Card title='基本用法' style={style}>
                    <Steps current={1}>
                        <Steps.Step status='finish' title='步骤1' description='这是一个步骤描述'/>
                        <Steps.Step status='process' title='步骤2' description='这是一个步骤描述' icon={<Icon type="loading"/>}/>
                        <Steps.Step status='wait' title='步骤3' description='这是一个步骤描述'/>
                        <Steps.Step status='wait' title='步骤4' description='这是一个步骤描述'/>
                    </Steps>
                </Card><br/>
                <Card title='步骤切换' style={style}>
                    <Steps current={this.state.current}>
                        {steps.map(item => <Steps.Step key={item.title} title={item.title}/>)}
                    </Steps>
                    <div className="steps-content">{steps[this.state.current].content}</div>
                    <div className="steps-action">
                        {
                            this.state.current < steps.length - 1
                            && <Button type="primary" onClick={() => this.next()}>下一步</Button>
                        }
                        {
                            this.state.current === steps.length - 1
                            && <Button type="primary" onClick={() => message.success('Processing complete!')}>完成</Button>
                        }
                        {
                            this.state.current > 0
                            && (
                                <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                                    上一步
                                </Button>
                            )
                        }
                    </div>
                </Card><br/>
                <Card title='竖直方向步骤条' style={style}>
                    <Steps current={1} direction='vertical'>
                        <Steps.Step status='finish' title='步骤1' description='这是一个步骤描述'/>
                        <Steps.Step status='process' title='步骤2' description='这是一个步骤描述' icon={<Icon type="loading"/>}/>
                        <Steps.Step status='wait' title='步骤3' description='这是一个步骤描述'/>
                        <Steps.Step status='wait' title='步骤4' description='这是一个步骤描述'/>
                    </Steps>
                </Card><br/>
            </div>
        );
    }
}
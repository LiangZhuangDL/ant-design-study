import React from 'react';
import {Card, Skeleton, Button} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px'
};

export default class SkeletonComponents extends React.Component {
    state = {
        loading: false,
        text: '未载入',
    };

    showSkeleton = () => {
        this.setState({
            loading: true,
        });
        setTimeout(() => {
            this.setState({
                loading: false,
                text: '载入完毕',
            })
        }, 2000);
    };

    render() {
        return (
            <div>
                <Card title='基础' style={style}>
                    <Skeleton/>
                </Card><br/>
                <Card title='复杂的组合和动画效果' style={style}>
                    <Skeleton avatar paragraph={{rows: 4}} active/>
                </Card><br/>
                <Card title='包含子组件' style={style}>
                    <Skeleton active loading={this.state.loading}>
                        <div>
                            <h3>{this.state.text}</h3>
                        </div>
                    </Skeleton>
                    <Button htmlType='button' onClick={this.showSkeleton} loading={this.state.loading}>
                        显示加载占位图
                    </Button>
                </Card>
            </div>
        );
    }
}
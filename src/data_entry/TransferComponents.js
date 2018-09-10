import React from 'react';
import {Card, Transfer} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

const data = [
    {
        title: '汉语',
        key: '1,'
    },
    {
        title: '英语',
        key: '2,'
    },
    {
        title: '法语',
        key: '3,'
    },
];

const targetKeys = [];

export default class TransferComponents extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            targetKeys: targetKeys,
            selectKeys: [],
        }
    }

    handleChange = (nextTargetKeys) => {
        this.setState({ targetKeys: nextTargetKeys });
    };

    handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        this.setState({ selectedKeys: [sourceSelectedKeys, targetSelectedKeys] });
    };

    handleScroll = (direction, e) => {
        console.log('direction:', direction);
        console.log('target:', e.target);
    };

    render(){
        return (
            <div>
                <Card title='基本用法' style={style}>
                    <Transfer height={300} dataSource={data} targetKeys={this.state.targetKeys} selectedKeys={this.state.selectKeys} onChange={this.handleChange} onSelectChange={this.handleSelectChange} onScroll={this.handleScroll} render={item=> item.title} titles={['源', '已选']}/>
                </Card>
            </div>
        )
    }

}
import React from 'react';
import {Card, Transfer, Button} from 'antd';

const style = {
    width: 1500,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

const data = [
    {
        key: '0',
        title: '汉语',
        description: `汉语`,
        disabled: false,
    },
    {
        key: '1',
        title: '英语',
        description: `英语`,
        disabled: false,
    },
    {
        key: '2',
        title: '法语',
        description: `法语`,
        disabled: false,
    },
];

const targetKeys = [];

export default class TransferComponents extends React.Component{
    state = {
        targetKeys,
        selectedKeys: [],
        text: '放大',
        tag: true,
        listStyle: {
            width: 150,
            height: 150,
        }
    };

    handleChange = (nextTargetKeys, direction, moveKeys) => {
        this.setState({ targetKeys: nextTargetKeys });
        console.log('targetKeys: ', targetKeys);
        console.log('direction: ', direction);
        console.log('moveKeys: ', moveKeys);
    };

    handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
        this.setState({  selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });
    };

    handleScroll = (direction, e) => {
        console.log('direction:', direction);
        console.log('target:', e.target);
    };

    filterOption = (inputValue, option) => {
        return option.description.indexOf(inputValue) > -1;
    };

    changeZoom = ()=>{
        if(this.state.tag){
            this.setState({
                listStyle: {
                    width: 150,
                    height: 200,
                },
                tag: false,
                text: '缩小',
            })
        }else{
            this.setState({
                listStyle: {
                    width: 150,
                    height: 150,
                },
                tag: true,
                text: '放大',
            })
        }
    };

    renderFooter = ()=>{
        return (
            <Button htmlType='button' style={{float: 'left', margin: 5}} onClick={this.changeZoom}>
                {this.state.text}
            </Button>
        )  
    };

    render(){
        return (
            <div>
                <Card title='带搜索框' style={style}>
                    <Transfer height={300} dataSource={data} targetKeys={this.state.targetKeys} selectedKeys={this.state.selectedKeys} onChange={this.handleChange} onSelectChange={this.handleSelectChange} onScroll={this.handleScroll} render={item=> item.title} titles={['源', '已选']}/>
                </Card><br/>
                <Card title='基本用法' style={style}>
                    <Transfer showSearch filterOption={this.filterOption} height={300} dataSource={data} targetKeys={this.state.targetKeys} selectedKeys={this.state.selectedKeys} onChange={this.handleChange} onSelectChange={this.handleSelectChange} onScroll={this.handleScroll} render={item=> item.title} titles={['源', '已选']}/>
                </Card><br/>
                <Card title='高级用法' style={style}>
                    <Transfer listStyle={this.state.listStyle} footer={this.renderFooter} operations={['进', '出']} height={300} dataSource={data} targetKeys={this.state.targetKeys} selectedKeys={this.state.selectedKeys} onChange={this.handleChange} onSelectChange={this.handleSelectChange} onScroll={this.handleScroll} render={item=> item.title} titles={['源', '已选']}/>
                </Card><br/>
            </div>
        )
    }

}
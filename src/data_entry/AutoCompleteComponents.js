import React from 'react';
import {Card, AutoComplete, message, Icon, Input} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

const data = ['期货大厦', '三丰大厦', '集电大厦'];

const dataDown = [{
    title: '话题',
    children: [
        {
            title: '程序员',
            count: 123542,
        },
        {
            title: '工程师',
            count: 32217,
        }]
}];

export default class AutoCompleteComponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            result: [],
        };
        this.onSearch = this.onSearch.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    onSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : [
                value,
                value + value,
                value + value + value,
            ]
        })
    };

    handleSearch = (value) => {
        let result;
        if (!value || value.indexOf('@') >= 0) {
            result = [];
        } else {
            result = [
                '@gmail.com',
                '@outlook.com',
                '@sina.com'
            ].map(domain => `${value}@${domain}`);
        }
        this.setState({result: result});
    };

    onSelect = (value) => {
        message.info('您选择的是：' + value)
    };

    render() {
        return (
            <div>
                <Card title='基本使用' style={style}>
                    <AutoComplete dataSource={this.state.dataSource} style={{width: 200}} onSelect={this.onSelect}
                                  onSearch={this.onSearch} placeholder='请添入搜索内容'/>
                </Card><br/>
                <Card title='自定义选项' style={style}>
                    <AutoComplete style={{width: 200}} onSearch={this.handleSearch} placeholder='请输入您的电子邮箱'>
                        {this.state.result.map(
                            (email) => {
                                return <AutoComplete.Option key={email}>{email}</AutoComplete.Option>
                            })
                        }
                    </AutoComplete>
                </Card><br/>
                <Card title='自定义搜索结果' style={style}>
                    <AutoComplete allowClear style={{width: 200}} dataSource={data} placeholder='请输入您的单位地址'
                                  filterOption={(inputValue, option) => option.props.children.indexOf(inputValue) !== -1}/>
                </Card><br/>
                <Card title='查询模式-确定类目' style={style}>

                </Card>
            </div>
        )
    }
}
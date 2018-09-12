import React from 'react';
import {Button, Card, Table} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

const column = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '性别',
        dataIndex: 'sex',
        key: 'sex',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    },
];

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: 'Alex' + i,
        sex: '男',
        age: '23'
    })
}

const dataSource = [
    {
        key: 1,
        name: 'Alex',
        sex: '男',
        age: '21',
    },
    {
        key: 2,
        name: 'Sophia',
        sex: '女',
        age: '21',
    },
    {
        key: 3,
        name: 'Lin',
        sex: '男',
        age: '22',
    },
    {
        key: 4,
        name: 'Raul',
        sex: '男',
        age: '21',
    },
];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => (
        {
            disabled: record.name === 'Disabled User',
            name: record.name,
        }
    )
};

export default class TableComponents extends React.Component {
    state = {
        selectedRowKeys: [],
        loading: false,
    };

    start = () => {
        this.setState({
            loading: true,
        });
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000)
    };

    onSelectedRowKeys = (selectedRowKeys) => {
        this.setState({
            selectedRowKeys,
        })
    };

    render() {
        const {loading, selectedRowKeys} = this.state;
        const rowSelectionOne = {
            selectedRowKeys,
            onChange: this.onSelectedRowKeys,
        };
        const rowSelectionTwo = {
            selectedRowKeys,
            onChange: this.onSelectedRowKeys,
            hideDefaultSelections: true,
            selections: [
                {
                    key: 'all-data',
                    text: '选择全部',
                    onSelect: ()=>{
                        this.setState({
                            selectedRowKeys: [...Array(46).keys()],
                        })
                    }
                },
                {
                    key: 'even',
                    text: '选择偶数行',
                    onSelect: (changableRowKeys)=>{
                        let newSelectedRowKeys = [];
                        newSelectedRowKeys = changableRowKeys.filter((key, index)=>{
                            if(index % 2 !== 0){
                                return true;
                            }
                            return false;
                        });
                        this.setState({
                            selectedRowKeys: newSelectedRowKeys,
                        })
                    }
                },
                {
                    key: 'odd',
                    text: '选择奇数行',
                    onSelect: (changableRowKeys)=>{
                        let newSelectedRowKeys = [];
                        newSelectedRowKeys = changableRowKeys.filter((key, index)=>{
                            if(index % 2 !== 0){
                                return false;
                            }
                            return true;
                        });
                        this.setState({
                            selectedRowKeys: newSelectedRowKeys,
                        })
                    }
                },
            ],
            onSelection: this.onSelection,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <Card style={style} title='基本用法'>
                    <Table dataSource={dataSource} columns={column}/>
                </Card><br/>
                <Card title='可选择' style={style}>
                    <Table dataSource={dataSource} columns={column} rowSelection={rowSelection}/>
                </Card><br/>
                <Card title='选择与操作' style={style}>
                    <div>
                        <div style={{marginBottom: 16}}>
                            <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading} htmlType='button'>重载</Button>
                            <span style={{marginLeft: 8}}>{hasSelected ? `选择了 ${selectedRowKeys.length} 项` : ''}</span>
                        </div>
                        <Table rowSelection={rowSelectionOne} columns={column} dataSource={data}/>
                    </div>
                </Card><br/>
                <Card style={style} title='自定义选择项'>
                    <Table rowSelection={rowSelectionTwo} columns={column} dataSource={data}/>
                </Card>
            </div>
        )
    }
}
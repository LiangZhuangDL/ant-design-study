import React from 'react';
import {Button, Card, Icon, Input, Table} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

const renderContent = (value, row, index)=>{
    const obj = {
        children: value,
        props: {},
    };
    if(index === 9){
        obj.props.colSpan = 0;
    }
    return obj;
};

const columnFixed = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        width: 200,
        fixed: 'left',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        width: 200,
        fixed: 'left',
    },
    {
        title: '列1',
        dataIndex: 'column1',
        key: 'column1'
    },
    {
        title: '列2',
        dataIndex: 'column2',
        key: 'column2'
    },
    {
        title: '列3',
        dataIndex: 'column3',
        key: 'column3'
    },
    {
        title: '列4',
        dataIndex: 'column4',
        key: 'column4'
    },
    {
        title: '列5',
        dataIndex: 'column5',
        key: 'column5'
    },
    {
        title: '列6',
        dataIndex: 'column6',
        key: 'column6'
    },
    {
        title: '列7',
        dataIndex: 'column7',
        key: 'column7'
    },
    {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        width: 100,
        fixed: 'right',
    },

];

const dataFixed = [];
for(let i =0; i<100; i++){
  dataFixed.push({
      key: i,
      name: 'Alex'+ i,
      age: 20,
      column1: 'A',
      column2: 'B',
      column3: 'C',
      column4: 'D',
      column5: 'E',
      column6: 'F',
      column7: 'G',
      action: ()=>
          <div>
              <a href='javascript:;'>删除</a>
              <a href='javascript:;'>挂起</a>
          </div>
  })
};

const columnTest = [
    {
        title: '姓名',
        dataIndex: 'name',
        render: (text, row, index)=>{
            if(index < 9){
                return <a href='javascript:;'>{text}</a>
            }
            return {
                children: <a href="javascript:;">{text}</a>,
                props: {
                    colSpan: 5,
                },
            };
        },
    },
    {
        title: '年龄',
        dataIndex: 'age',
        render: renderContent,
    },
    {
        title: '电话',
        colSpan: 2,
        dataIndex: 'tel',
        render: (value, row, index)=>{
            const obj = {
                children: value,
                props: {},
            };
            if (index === 2) {
                obj.props.rowSpan = 2;
            }
            if (index === 3) {
                obj.props.rowSpan = 0;
            }
            if (index === 9) {
                obj.props.colSpan = 0;
            }
            return obj;
        },
    },
    {
        title: '手机号码',
        colSpan: 0,
        dataIndex: 'cellphone',
        render: renderContent,
    },
    {
        title: '地址',
        dataIndex: 'address',
        render: renderContent,
    }
];

const dataTest = [];
for(let i = 0; i < 10; i++){
    dataTest.push({
        key: i,
        name: 'John Brown',
        age: 32,
        tel: '0571-22098909',
        cellphone: 18889898989,
        address: `New York No. ${i} Lake Park`,
    })
}

const dataSourceTest = [
    {
        key: 1,
        name: 'Alex',
        sex: '男',
        age: '24',
        children: [
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
                age: '25',
            },
        ]
    },
    {
        key: 4,
        name: 'Raul',
        sex: '男',
        age: '21',
        children: [
            {
                key: 5,
                name: 'Lucy',
                sex: '女',
                age: '22',
                children: [
                    {
                        key: 6,
                        name: 'Lily',
                        sex: '女',
                        age: '28',
                    },
                ]
            },
        ]
    },
];

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
        age: '24',
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
        age: '25',
    },
    {
        key: 4,
        name: 'Raul',
        sex: '男',
        age: '21',
    },
    {
        key: 5,
        name: 'Lucy',
        sex: '女',
        age: '22',
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
        filteredInfo: null,
        sortedInfo: null,
        searchText: '',
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

    handleSearch = (selectedKeys, confirm) => () => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
    };
    handleReset = clearFilters => () => {
        clearFilters();
        this.setState({ searchText: '' });
    };

    onSelectedRowKeys = (selectedRowKeys) => {
        this.setState({
            selectedRowKeys,
        })
    };

    handleChange = (pagination, filters, sorter)=>{
        this.setState({
            filteredInfo: filters,
            sortedInfo: sorter,
        })
    };

    clearFilters = ()=>{
        this.setState({
            filteredInfo: null,
        })
    };

    clearAll = ()=>{
        this.setState({
            filteredInfo: null,
            sortedInfo: null,
        })
    };

    setAgeSort = ()=>{
        this.setState({
            sortedInfo: {
                order: 'descend',
                columnKey: 'age',
            },
        })
    };

    render() {
        let {filteredInfo, sortedInfo} = this.state;
        filteredInfo = filteredInfo || {};
        sortedInfo = sortedInfo || {};
        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                filterIcon: filtered => <Icon type="user" style={{ color: filtered ? '#108ee9' : '#aaa' }} />,
                onFilter: (value, record)=>record.name.toLowerCase().includes(value.toLowerCase()),//筛选
                sorter: (a,b)=>a.name.length - b.name.length,//排序
                sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
                filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters })=>(
                    <div style={{backgroundColor: '#fff', padding: 20,borderRadius: 6,boxShadow: '0 1px 6px rgba(0, 0, 0, .2)'}}>
                        <Input style={{width: 150,marginRight: 8}} ref={ele=> this.searchInput = ele} placeholder='搜索名字' value={selectedKeys[0]} onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])} onPressEnter={this.handleSearch(selectedKeys, confirm)}/>
                        <Button type="primary" onClick={this.handleSearch(selectedKeys, confirm)} htmlType='button'>搜索</Button>
                        <Button onClick={this.handleReset(clearFilters)} htmlType='button'>重置</Button>
                    </div>
                ),
                onFilterDropdownVisibleChange: (visible) => {
                    if (visible) {
                        setTimeout(() => {
                            this.searchInput.focus();
                        });
                    }
                }
            },
            {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex',
                filters: [
                    {
                        text: '男',
                        value: '男',
                    },
                    {
                        text: '女',
                        value: '女',
                    },
                ],
                filteredValue: filteredInfo.sex || null,
                filterMultiple: false,
                onFilter: (value, record)=>record.sex.includes(value),
                sortOrder: sortedInfo.columnKey === 'sex' && sortedInfo.order
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
                filteredValue: filteredInfo.age || null,
                sorter: (a,b)=>a.age - b.age,
                sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order
            },
        ];
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
                        let newSelectedRowKeys;
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
                        let newSelectedRowKeys;
                        newSelectedRowKeys = changableRowKeys.filter((key, index)=>{
                            return index % 2 === 0;

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
                </Card><br/>
                <Card style={style} title='可控的筛选和排序'>
                    <div>
                        <Button.Group>
                            <Button onClick={this.clearAll} htmlType='button' type='primary'>清除所有筛选条件和排序条件</Button>
                            <Button onClick={this.clearFilters} htmlType='button' type='primary'>清除所有筛选条件</Button>
                            <Button onClick={this.setAgeSort} htmlType='button' type='primary'>按年龄倒序排序</Button>
                        </Button.Group>
                    </div><br/>
                    <div>
                        <Table onChange={this.handleChange} columns={columns} dataSource={dataSource}/>
                    </div>
                </Card><br/>
                <Card style={style} title='带边框'>
                    <Table dataSource={dataSource} columns={column} bordered title={()=><h3>页头</h3>} footer={()=><span>页脚</span>}/>
                </Card><br/>
                <Card style={style} title='可展开'>
                    <Table dataSource={dataSource} columns={column} expandedRowRender={record=> <p>我的名字是{record.name}，{record.age}岁，性别{record.sex}</p>}/>
                </Card><br/>
                <Card style={style} title='表格行/列合并'>
                    <Table dataSource={dataTest} columns={columnTest} bordered/>
                </Card><br/>
                <Card style={style} title='树形数据展示'>
                    <Table dataSource={dataSourceTest} columns={column} bordered rowSelection={rowSelectionOne}/>
                </Card><br/>
                <Card style={style} title='固定表头'>
                    <Table rowSelection={rowSelectionTwo} columns={column} dataSource={data} pagination={{pageSize: 20}} scroll={{ y: 300}}/>
                </Card>
                <Card style={style} title='固定头和列'>
                    <Table columns={columnFixed} dataSource={dataFixed} pagination={{pageSize: 20}} scroll={{ x: 1200, y: 500}}/>
                </Card><br/>
                <p>未完待续</p>
            </div>
        )
    }
}

import React from 'react';
import {Card, TreeSelect} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

const treeData = [
    {
        title: '父节点1',
        value: '父节点1',
        key: '0-1',
        children: [
            {
                title: '子节点1',
                value: '子节点1',
                key: '0-1-1',
            },
            {
                title: '子节点2',
                value: '子节点2',
                key: '0-1-2',
            },
            {
                title: '子节点3',
                value: '子节点3',
                key: '0-1-3',
            }
        ]
    },
    {
        title: '父节点2',
        value: '父节点2',
        key: '0-2',
    }
];

export default class TreeSelectComponents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: undefined,
        }
    }

    onChange = (value) => {
        console.log(value);
        this.setState({
            value: value,
        })
    };

    render() {
        return (
            <div>
                <Card title='基本' style={style}>
                    <TreeSelect showSearch allowClear treeDefaultExpandAll onChange={this.onChange}
                                value={this.state.value} placeholder='请选择' style={{width: 300}}
                                dropdownStyle={{maxHeight: 400, overflow: 'auto'}}>
                        <TreeSelect.TreeNode value='父节点1' key='0-1' title='父节点1'>
                            <TreeSelect.TreeNode value='子节点1' key='0-1-1' title='子节点1'/>
                            <TreeSelect.TreeNode value='子节点2' key='0-1-2' title='子节点2'/>
                        </TreeSelect.TreeNode>
                        <TreeSelect.TreeNode value='父节点2' key='0-2' title='父节点2'/>
                    </TreeSelect>
                </Card><br/>
                <Card title='多选' style={style}>
                    <TreeSelect showSearch allowClear treeDefaultExpandAll onChange={this.onChange}
                                value={this.state.value} placeholder='请选择' style={{width: 300}}
                                dropdownStyle={{maxHeight: 400, overflow: 'auto'}} multiple>
                        <TreeSelect.TreeNode value='父节点1' key='0-1' title='父节点1'>
                            <TreeSelect.TreeNode value='子节点1' key='0-1-1' title='子节点1'/>
                            <TreeSelect.TreeNode value='子节点2' key='0-1-2' title='子节点2'/>
                        </TreeSelect.TreeNode>
                        <TreeSelect.TreeNode value='父节点2' key='0-2' title='父节点2'/>
                    </TreeSelect>
                </Card><br/>
                <Card title='可勾选' style={style}>
                    <TreeSelect showSearch allowClear treeDefaultExpandAll onChange={this.onChange}
                                value={this.state.value} placeholder='请选择' style={{width: 300}}
                                dropdownStyle={{maxHeight: 400, overflow: 'auto'}} treeCheckable
                                showCheckedStrategy={TreeSelect.SHOW_ALL}>
                        <TreeSelect.TreeNode value='父节点1' key='0-1' title='父节点1'>
                            <TreeSelect.TreeNode value='子节点1' key='0-1-1' title='子节点1'/>
                            <TreeSelect.TreeNode value='子节点2' key='0-1-2' title='子节点2'/>
                            <TreeSelect.TreeNode value='子节点3' key='0-1-3' title='子节点3'/>
                        </TreeSelect.TreeNode>
                        <TreeSelect.TreeNode value='父节点2' key='0-2' title='父节点2'/>
                    </TreeSelect>
                </Card><br/>
                <Card title='从数据直接生成' style={style}>
                    <TreeSelect showSearch allowClear treeDefaultExpandAll onChange={this.onChange}
                                value={this.state.value} placeholder='请选择' style={{width: 300}}
                                dropdownStyle={{maxHeight: 400, overflow: 'auto'}} treeData={treeData} multiple/>
                </Card>
            </div>
        );
    }
}
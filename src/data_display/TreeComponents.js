import React from 'react';
import {Card, Icon, Tree} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

export default class TreeComponents extends React.Component{
    render(){
        return (
            <div>
                <Card style={style} title='基本'>
                    <Tree defaultSelectedKeys={['0-0-0', '0-0-1']} defaultExpandedKeys={['0-0-0', '0-0-1']} defaultCheckedKeys={['0-0-0', '0-0-1']} style={{margin: 0}} checkable>
                        <Tree.TreeNode title='parent' key='0-0'>
                            <Tree.TreeNode title='parent' key='0-0-0'>
                                <Tree.TreeNode title='leaf' key='0-0-0-0'/>
                                <Tree.TreeNode title='leaf' key='0-0-0-1'/>
                                <Tree.TreeNode title='leaf' key='0-0-0-2'/>
                            </Tree.TreeNode>
                            <Tree.TreeNode title='parent' key='0-0-1'>
                                <Tree.TreeNode title='leaf' key='0-0-1-0'/>
                            </Tree.TreeNode>
                            <Tree.TreeNode title='leaf' key='0-0-2'/>
                        </Tree.TreeNode>
                    </Tree>
                </Card><br/>
                <Card style={style} title='连接线'>
                    <div style={{float: 'left'}}>
                        <Tree defaultSelectedKeys={['0-0-0', '0-0-1']} defaultExpandedKeys={['0-0-0', '0-0-1']} defaultCheckedKeys={['0-0-0', '0-0-1']}>
                            <Tree.TreeNode title='parent' key='0-0'>
                                <Tree.TreeNode title='parent' key='0-0-0'>
                                    <Tree.TreeNode title='leaf' key='0-0-0-0'/>
                                    <Tree.TreeNode title='leaf' key='0-0-0-1'/>
                                    <Tree.TreeNode title='leaf' key='0-0-0-2'/>
                                </Tree.TreeNode>
                                <Tree.TreeNode title='parent' key='0-0-1'>
                                    <Tree.TreeNode title='leaf' key='0-0-1-0'/>
                                </Tree.TreeNode>
                                <Tree.TreeNode title='leaf' key='0-0-2'/>
                            </Tree.TreeNode>
                        </Tree>
                    </div>
                </Card><br/>
                <Card style={style} title='目录'>
                    <div style={{float: 'left'}}>
                        <Tree.DirectoryTree defaultSelectedKeys={['0-0-0', '0-0-1']} defaultExpandedKeys={['0-0-0', '0-0-1']} defaultCheckedKeys={['0-0-0', '0-0-1']}>
                            <Tree.TreeNode title='parent' key='0-0'>
                                <Tree.TreeNode title='parent' key='0-0-0'>
                                    <Tree.TreeNode title='leaf' key='0-0-0-0' isLeaf/>
                                    <Tree.TreeNode title='leaf' key='0-0-0-1' isLeaf/>
                                    <Tree.TreeNode title='leaf' key='0-0-0-2' isLeaf/>
                                </Tree.TreeNode>
                                <Tree.TreeNode title='parent' key='0-0-1'>
                                    <Tree.TreeNode title='leaf' key='0-0-1-0' isLeaf/>
                                </Tree.TreeNode>
                                <Tree.TreeNode title='leaf' key='0-0-2' isLeaf/>
                            </Tree.TreeNode>
                        </Tree.DirectoryTree>
                    </div>
                </Card><br/>
                <Card style={style} title='自定义图标'>
                    <div style={{float: 'left'}}>
                        <Tree defaultSelectedKeys={['0-0-0', '0-0-1']} defaultExpandedKeys={['0-0-0', '0-0-1']} defaultCheckedKeys={['0-0-0', '0-0-1']} showIcon>
                            <Tree.TreeNode icon={<Icon type='apple'/>} title='parent' key='0-0'>
                                <Tree.TreeNode icon={<Icon type='apple'/>} title='parent' key='0-0-0'>
                                    <Tree.TreeNode icon={<Icon type='apple'/>} title='leaf' key='0-0-0-0' isLeaf/>
                                    <Tree.TreeNode icon={<Icon type='apple'/>} title='leaf' key='0-0-0-1' isLeaf/>
                                    <Tree.TreeNode icon={<Icon type='apple'/>} title='leaf' key='0-0-0-2' isLeaf/>
                                </Tree.TreeNode>
                                <Tree.TreeNode icon={<Icon type='android'/>} title='parent' key='0-0-1'>
                                    <Tree.TreeNode icon={<Icon type='android'/>} title='leaf' key='0-0-1-0' isLeaf/>
                                </Tree.TreeNode>
                                <Tree.TreeNode icon={<Icon type='android'/>} title='leaf' key='0-0-2' isLeaf/>
                            </Tree.TreeNode>
                        </Tree>
                    </div>
                </Card><br/>
            </div>
        )
    }
}
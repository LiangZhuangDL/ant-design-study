import React from 'react';
import {Card, Collapse} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

export default class CollapseComponents extends React.Component{

    handleChange = (key)=>{
        console.log(key);
    };

    render(){
        return (
            <div>
                <Card title='折叠面板' style={style}>
                    <Collapse onChange={this.handleChange} defaultActiveKey={['1']}>
                        <Collapse.Panel key='1' header='折叠面板1'>
                            <span>内容1</span>
                        </Collapse.Panel>
                        <Collapse.Panel key='2' header='折叠面板2'>
                            <span>内容2</span>
                        </Collapse.Panel>
                    </Collapse>
                </Card><br/>
                <Card title='手风琴' style={style}>
                    <Collapse accordion>
                        <Collapse.Panel key='1' header='折叠面板1'>
                            <span>内容1</span>
                        </Collapse.Panel>
                        <Collapse.Panel key='2' header='折叠面板2'>
                            <span>内容2</span>
                        </Collapse.Panel>
                        <Collapse.Panel key='3' header='折叠面板3'>
                            <span>内容3</span>
                        </Collapse.Panel>
                    </Collapse>
                </Card><br/>
                <Card title='面板嵌套' style={style}>
                    <Collapse onChange={this.handleChange}>
                        <Collapse.Panel key='1' header='折叠面板1'>
                            <Collapse defaultActiveKey='1'>
                                <Collapse.Panel key='1' header='嵌套题目'>
                                    <span>嵌套内容</span>
                                </Collapse.Panel>
                            </Collapse>
                        </Collapse.Panel>
                        <Collapse.Panel key='2' header='折叠面板2'>
                            <span>内容</span>
                        </Collapse.Panel>
                    </Collapse>
                </Card><br/>
                <Card title='隐藏箭头' style={style}>
                    <Collapse onChange={this.handleChange} defaultActiveKey={['1']}>
                        <Collapse.Panel key='1' header='折叠面板1' showArrow={false}>
                            <span>内容1</span>
                        </Collapse.Panel>
                        <Collapse.Panel key='2' header='折叠面板2'>
                            <span>内容2</span>
                        </Collapse.Panel>
                    </Collapse>
                </Card><br/>
            </div>
        )
    }
}
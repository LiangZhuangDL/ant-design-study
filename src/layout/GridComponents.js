import React from 'react';
import {Row, Col, Card} from 'antd';

const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;

const style = {
    width: 1000,
    margin: 'auto',
    fontSize: '20px',
    color: 'white',
};

const blue = {
  backgroundColor: 'blue'
};

const blueBox = {
    backgroundColor: 'blue',
    margin: '5px 5px',
};

const red = {
    backgroundColor: 'red'
};

const redBox = {
    backgroundColor: 'red',
    margin: '5px 5px',
};

const blackFont = {
  color: 'black'
};

class GridComponents extends React.Component{
    render(){
        return (
            <div>
                <Card title='基础栅格' style={style}>
                    <Row>
                        <Col span={12} style={blue}>12栅格</Col>
                        <Col span={12} style={red}>12栅格</Col>
                    </Row><br/>
                    <Row>
                        <Col span={8} style={blue}>8栅格</Col>
                        <Col span={8} style={red}>8栅格</Col>
                        <Col span={8} style={blue}>8栅格</Col>
                    </Row><br/>
                    <Row>
                        <Col span={6} style={blue}>6栅格</Col>
                        <Col span={6} style={red}>6栅格</Col>
                        <Col span={6} style={blue}>6栅格</Col>
                        <Col span={6} style={red}>6栅格</Col>
                    </Row><br/>
                </Card><br/>
                <Card title='区块间隔' style={style}>
                    <Row gutter='xs' type='flex' justify="space-between">
                        <Col span={5} style={blueBox}>6栅格</Col>
                        <Col span={5} style={redBox}>6栅格</Col>
                        <Col span={5} style={blueBox}>6栅格</Col>
                        <Col span={5} style={redBox}>6栅格</Col>
                    </Row>
                </Card><br/>
                <Card title='左右偏移' style={style}>
                    <Row>
                        <Col span={8} offset={6} style={red}>向右偏移6个Column</Col>
                    </Row><br/>
                    <Row>
                        <Col span={8} offset={12} style={blue}>向右偏移12个Column</Col>
                    </Row>
                </Card><br/>
                <Card title='栅格排序' style={style}>
                    <Row>
                        <Col span={18} push={6} style={blue}>col-18 col-push-6</Col>
                        <Col span={6} pull={18} style={red}>col-6 col-pull-18</Col>
                    </Row>
                </Card>
                <Card title="Flex布局" style={style}>
                    <p style={blackFont}>左对齐</p>
                    <Row type="flex" justify="start">
                        <Col span={4} style={blue}>col-4</Col>
                        <Col span={4} style={red}>col-4</Col>
                        <Col span={4} style={blue}>col-4</Col>
                        <Col span={4} style={red}>col-4</Col>
                    </Row><br/>

                    <p style={blackFont}>居中</p>
                    <Row type="flex" justify="center">
                        <Col span={4} style={blue}>col-4</Col>
                        <Col span={4} style={red}>col-4</Col>
                        <Col span={4} style={blue}>col-4</Col>
                        <Col span={4} style={red}>col-4</Col>
                    </Row><br/>

                    <p style={blackFont}>右对齐</p>
                    <Row type="flex" justify="end">
                        <Col span={4} style={blue}>col-4</Col>
                        <Col span={4} style={red}>col-4</Col>
                        <Col span={4} style={blue}>col-4</Col>
                        <Col span={4} style={red}>col-4</Col>
                    </Row><br/>

                    <p style={blackFont}>等宽排列</p>
                    <Row type="flex" justify="space-between">
                        <Col span={4} style={blue}>col-4</Col>
                        <Col span={4} style={red}>col-4</Col>
                        <Col span={4} style={blue}>col-4</Col>
                        <Col span={4} style={red}>col-4</Col>
                    </Row><br/>

                    <p style={blackFont}>子元素对齐</p>
                    <Row type="flex" justify="space-around">
                        <Col span={4} style={blue}>col-4</Col>
                        <Col span={4} style={red}>col-4</Col>
                        <Col span={4} style={blue}>col-4</Col>
                        <Col span={4} style={red}>col-4</Col>
                    </Row>
                </Card><br/>
                <Card title='Flex对齐' style={style}>
                    <p style={blackFont}>顶部对齐</p>
                    <Row type="flex" justify="center" align="top">
                        <Col span={4} style={red}><DemoBox value={100}>col-4</DemoBox></Col>
                        <Col span={4} style={blue}><DemoBox value={50}>col-4</DemoBox></Col>
                        <Col span={4} style={red}><DemoBox value={100}>col-4</DemoBox></Col>
                        <Col span={4} style={blue}><DemoBox value={50}>col-4</DemoBox></Col>
                    </Row><br/>

                    <p style={blackFont}>垂直居中</p>
                    <Row type="flex" justify="space-around" align="middle">
                        <Col span={4} style={red}><DemoBox value={100}>col-4</DemoBox></Col>
                        <Col span={4} style={blue}><DemoBox value={50}>col-4</DemoBox></Col>
                        <Col span={4} style={red}><DemoBox value={100}>col-4</DemoBox></Col>
                        <Col span={4} style={blue}><DemoBox value={50}>col-4</DemoBox></Col>
                    </Row><br/>

                    <p style={blackFont}>底部对齐</p>
                    <Row type="flex" justify="space-between" align="bottom">
                        <Col span={4} style={red}><DemoBox value={100}>col-4</DemoBox></Col>
                        <Col span={4} style={blue}><DemoBox value={50}>col-4</DemoBox></Col>
                        <Col span={4} style={red}><DemoBox value={100}>col-4</DemoBox></Col>
                        <Col span={4} style={blue}><DemoBox value={50}>col-4</DemoBox></Col>
                    </Row>
                </Card>
            </div>
        )
    }
}

export default GridComponents;
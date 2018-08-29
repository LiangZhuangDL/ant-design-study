import React from 'react';
import {Row, Col, Card} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    fontSize: '20px',
    color: 'white'
};

const blue = {
  backgroundColor: 'blue'
};

const red = {
    backgroundColor: 'red'
};

class GridComponents extends React.Component{
    render(){
        return (
            <div>
                <Card title='基础栅格' style={style}>
                    <Row>
                        <Col span={12} style={blue}>12栅格</Col>
                        <Col span={12} style={red}>12栅格</Col>
                    </Row>
                </Card>
            </div>
        )
    }
}

export default GridComponents;
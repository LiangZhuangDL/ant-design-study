import React from 'react';
import {Card, Button, Row, Col} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

const gridStyle = {
    width: '25%',
    textAlign: 'center',
};

const tabList = [
    {
        key: '项目1',
        tab: '项目1',
    },
    {
        key: '项目2',
        tab: '项目2',
    },
    {
        key: '项目3',
        tab: '项目3',
    },
];

export default class CardComponents extends React.Component{
    state = {
        key: '项目1'
    };

    handleTagChange = (key, type)=>{
        this.setState({
            [type]: key
        })
    };

    render(){
        return (
            <div>
                <Card style={style} title='典型卡片'>
                    <Card title='卡片' extra={<Button htmlType='button' type='danger'>更多</Button>} style={{width: 300}}>
                        <p>内容</p>
                    </Card>
                </Card><br/>
                <Card style={style} title='更灵活的内容展示'>
                    <Row gutter={10}>
                        <Col span={8}>
                            <Card hoverable cover={<img alt="example" src="http://img.hb.aicdn.com/c16d7dfc507c7167c2feca45cc990645cc3f76a75ad30-xP4RGa_fw658" />}>
                                <Card.Meta title="柠檬薄荷水" description="www.huaban.com"/>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card hoverable cover={<img alt="example" src="http://img.hb.aicdn.com/122e3d387244dc587f126d6f23537c31cbe0840e4830a-viNtTx_fw658" />}>
                                <Card.Meta title="水果蛋糕" description="www.huaban.com"/>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card hoverable cover={<img alt="example" src="http://img.hb.aicdn.com/12640c4277ed2ec1aff134aa530a68a7b40b533b1c7b7-FNr9lP_fw658" />}>
                                <Card.Meta title="意大利面" description="www.huaban.com"/>
                            </Card>
                        </Col>
                    </Row>
                </Card><br/>
                <Card title='预加载的卡片' style={style}>
                    <Card title='卡片' extra={<Button htmlType='button' type='danger'>更多</Button>} style={{width: 300}} loading={true}>
                        <p>内容</p>
                    </Card>
                </Card><br/>
                <Card title='网格型内嵌卡片' style={style}>
                    <Card title='标题' style={style}>
                        <Card.Grid style={gridStyle}>内容</Card.Grid>
                        <Card.Grid style={gridStyle}>内容</Card.Grid>
                        <Card.Grid style={gridStyle}>内容</Card.Grid>
                        <Card.Grid style={gridStyle}>内容</Card.Grid>
                        <Card.Grid style={gridStyle}>内容</Card.Grid>
                        <Card.Grid style={gridStyle}>内容</Card.Grid>
                        <Card.Grid style={gridStyle}>内容</Card.Grid>
                        <Card.Grid style={gridStyle}>内容</Card.Grid>
                    </Card>
                </Card><br/>
                <Card title='带页签的卡片' style={style}>
                    <Card activeTabKey={this.state.key} tabList={tabList} onTabChange={(key)=>{ this.handleTagChange(key, 'key')}}>
                        {this.state.key}
                    </Card>
                </Card>
            </div>
        )
    }
}
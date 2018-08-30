import React from 'react';
import { Pagination, Card } from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px'
};


export default class PaginationComponents extends React.Component{
    render(){
        return (
            <div>
                <Card title='基础分页' style={style}>
                    <Pagination defaultCurrent={1} total={50} defaultPageSize={5}/>
                </Card><br/>
                <Card title='改变和跳转' style={style}>
                    <Pagination showSizeChanger showQuickJumper defaultCurrent={1} total={100}/>
                </Card>
            </div>
        );
    }
}
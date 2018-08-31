import React from 'react';
import { Pagination, Card } from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px'
};


export default class PaginationComponents extends React.Component{
    state = {
      current: 2,
    };

    changePage = (page)=>{
      this.setState({current: page});
    };

    itemRender = (current, type, originalElement)=> {
        if (type === 'prev') {
            return <a>上一页</a>;
        } if (type === 'next') {
            return <a>下一页</a>;
        }
        return originalElement;
    };

    render(){
        return (
            <div>
                <Card title='基础分页' style={style}>
                    <Pagination defaultCurrent={1} total={50} defaultPageSize={5}/>
                </Card><br/>
                <Card title='改变和跳转' style={style}>
                    <Pagination showSizeChanger showQuickJumper defaultCurrent={1} total={100}/>
                </Card><br/>
                <Card title='简洁' style={style}>
                    <Pagination simple defaultCurrent={1} total={100}/>
                </Card><br/>
                <Card title='受控和总数' style={style}>
                    <Pagination current={this.state.current} total={50} defaultPageSize={5} onChange={this.changePage} showTotal={(total, range) => `第${range[0]}至第${range[1]}条 / 总计${total}条 `}/>
                </Card><br/>
                <Card title='上一步/下一步' style={style}>
                    <Pagination defaultCurrent={1} total={50} defaultPageSize={5} itemRender={this.itemRender}/>
                </Card>
            </div>
        );
    }
}
import React from 'react';
import {Card, List, Avatar, Button, Skeleton, Icon, message, Spin} from 'antd';
import reqwest from 'reqwest';
import InfiniteScroll from 'react-infinite-scroller';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

const data = [
    '力拔山兮气盖世。',
    '时不利兮骓不逝。',
    '骓不逝兮可奈何！',
    '虞兮虞兮奈若何！',
];

const basicData = [
    {
        text: '美人卷珠帘，深坐颦蛾眉。',
    },
    {
        text: '但见泪痕湿，不知心恨谁。',
    }

];

const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'http://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}

const IconText = ({ type, text }) => (
    <span>
    <Icon type={type} style={{ marginRight: 8 }} />
        {text}
  </span>
);

const count = 4;

const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;

export default class ListComponents extends React.Component{

    state = {
        initLoading: true,
        loading: false,
        hasMore: true,
        list: [],
        data: [],
    };

    componentDidMount(){
        this.getData((res)=>{
            this.setState({
                initLoading: false,
                data: res.results,
                list: res.results,
            })
        })
    }

    getData = (callback)=>{
        reqwest({
            url: fakeDataUrl,
            type: 'json',
            method: 'get',
            contentType: 'application/json',
            success: (res)=>{
                callback(res);
            }
        })
    };

    onLoadingMore = ()=>{
        this.setState({
            loading: true,
            list: this.state.data.concat([...new Array(count)].map(()=>({loading: true, name: {} })))
        });
        this.getData((res)=>{
            const data = this.state.data.concat(res.results);
            this.setState({
                data: data,
                list: data,
                loading: false,
            }, ()=>{
                window.dispatchEvent(new Event('resize'));
            });
        });
    };

    handleInfiniteOnLoad = ()=>{
        let data = this.state.data;
        this.setState({
            loading: true,
        });
        if(data.length >15){
            message.warn("列表已经全部载入完成！");
            this.setState({
                hasMore: false,
                loading: false,
            });
            return
        }
        this.getData((res) => {
            data = data.concat(res.results);
            this.setState({
                data,
                loading: false,
            });
        });
    };

    render(){
        const loadMore = !this.state.initLoading && !this.state.loading ? (
            <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
                <Button onClick={this.onLoadingMore} htmlType='button'>加载更多</Button>
            </div>
        ) : null;
        return (
            <div>
                <Card title='简单列表' style={style}>
                    <List header={<div>垓下歌</div>} footer={<div>项羽</div>} dataSource={data} renderItem={item=>(<List.Item>{item}</List.Item>)}/>
                </Card><br/>
                <Card title='基础列表' style={style}>
                    <List itemLayout='horizontal' dataSource={basicData} renderItem={
                        item=> (
                            <List.Item>
                                <List.Item.Meta avatar={<Avatar src='http://img.hb.aicdn.com/f70c40cd32a3090095b89e57010896fd6d6e93817622-xyWNjy_fw658'/>} title={<a href="https://ant.design">{item.text}</a>}/>
                            </List.Item>
                        )
                    }/>
                </Card><br/>
                <Card title='栅格列表' style={style}>
                    <List grid={{gutter: 16, column: 4}} dataSource={data} renderItem={item=>(<List.Item><Card>{item}</Card></List.Item>)}/>
                </Card><br/>
                <Card title='加载更多' style={style}>
                    <List dataSource={this.state.list} loading={this.state.initLoading} itemLayout='horizontal' loadMore={loadMore} renderItem={item=>(
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item actions={[<a>修改</a>, <a>更多</a>]}>
                                <List.Item.Meta avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                                title={<a href="https://ant.design">{item.name.last}</a>}
                                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"/>
                            </List.Item>
                            <div>内容</div>
                        </Skeleton>
                    )}/>
                </Card><br/>
                <Card title='竖排列表样式' style={style}>
                    <List dataSource={listData} pagination={{
                        onChange: (page)=>{
                            console.log(page);
                        },
                        pageSize: 3
                    }} renderItem={item=>(
                        <List.Item key={item.title}
                                   actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                                   extra={<img width={100} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}>
                            <List.Item.Meta
                                avatar={<Avatar src={item.avatar} />}
                                title={<a href={item.href}>{item.title}</a>}
                                description={item.description}
                            />
                            {item.content}
                        </List.Item>
                    )}/>
                </Card><br/>
                <Card title='滚动加载' style={style}>
                    <InfiniteScroll initialLoad={false} pageStart={0} loadMore={this.handleInfiniteOnLoad} hasMore={!this.state.loading && this.state.hasMore} useWindow={false}>
                        <List
                            dataSource={this.state.list}
                            renderItem={item => (
                                <List.Item key={item.id}>
                                    <List.Item.Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title={<a href="https://ant.design">{item.name.last}</a>}
                                        description={item.email}
                                    />
                                    <div>Content</div>
                                </List.Item>
                            )}
                        >
                            {this.state.loading && this.state.hasMore && (
                                <div>
                                    <Spin />
                                </div>
                            )}
                        </List>
                    </InfiniteScroll>
                </Card>
            </div>
        )
    }
}
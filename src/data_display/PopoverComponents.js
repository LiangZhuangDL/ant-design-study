import React from 'react';
import {Card, Popover, Button} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

const content = (
    <div>
        <p>平林漠漠烟如织，寒山一带伤心碧。</p>
        <p>暝色入高楼，有人楼上愁。</p>
        <p>玉阶空伫立，宿鸟归飞急。</p>
        <p> 何处是归程？长亭连短亭。</p>
    </div>
);

export default class PopoverComponents extends React.Component{

    render(){
        return (
            <div>
                <Card style={style} title='基本'>
                    <Popover content={content} title='菩萨蛮·平林漠漠烟如织' trigger='click' arrowPointAtCenter>
                        <Button htmlType='button' type='primary'>古诗</Button>
                    </Popover>
                </Card>
            </div>
        )
    }

}
import React from 'react';
import {Card,Tooltip, Button} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

export default class TooltipComponents extends React.Component{
    render(){
        return (
            <div>
                <Card style={style} title='基本'>
                    <Tooltip title='提示文字'>
                        <span>文字内容</span>
                    </Tooltip>
                </Card><br/>
                <Card style={style} title='箭头指向'>
                    <Tooltip title='提示文字' arrowPointAtCenter>
                        <Button htmlType='button' type='primary'>文字内容</Button>
                    </Tooltip>
                </Card>
            </div>
        )
    }
}
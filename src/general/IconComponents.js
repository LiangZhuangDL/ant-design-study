import React from 'react';
import {Icon, Card} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
    fontSize: '30px'
};

class IconComponents extends React.Component{
    render(){
        return (
            <div>
                <Card title='标准图标' style={style}>
                    <Icon type="apple" /><br/>
                    <Icon type="apple-o"/>
                </Card>
                <Card title="旋转图标" style={style}>
                    <Icon type="chrome" spin/>
                </Card>
            </div>
        )
    }
}

export default IconComponents;
import React from 'react';
import {Card, TimePicker, Button} from 'antd';
import moment from 'moment'

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

const format = 'HH:mm';

export default class TimePickerComponents extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }

    onChange = (time, timeString)=>{
        console.log(time, timeString);
    };

    handleOpenChange = (open)=>{
        this.setState({open
        })
    };

    handleClose = ()=>{
        this.setState({
            open: false,
        })
    };

    render(){
        return (
            <div>
                <Card title='基本' style={style}>
                    <TimePicker onChange={this.onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}/>
                </Card><br/>
                <Card title='选择时分' style={style}>
                    <TimePicker onChange={this.onChange} defaultOpenValue={moment('00:00:00', format)} format={format}/>
                </Card><br/>
                <Card title='附加内容' style={style}>
                    <TimePicker open={this.state.open} onOpenChange={this.handleOpenChange} addon={()=>(
                        <Button type='primary' onClick={this.handleClose} htmlType='button'>确定</Button>
                    )}/>
                </Card><br/>
                <Card title='步长选择' style={style}>
                    <TimePicker onChange={this.onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} minuteStep={10} secondStep={15}/>
                </Card><br/>
                <Card title='12小时制' style={style}>
                    <TimePicker use12Hours onChange={this.onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss a')}/>
                </Card><br/>
            </div>
        )
    }

}
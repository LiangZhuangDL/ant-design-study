import React from 'react';
import {Card, Slider, Switch} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

export default class SliderComponents extends React.Component {
    state = {
      disabled: false,
    };

    handleDisabled = (disabled)=>{
        this.setState({
            disabled: disabled,
        })
    };


    render(){
        return (
            <div>
                <Card title='基本' style={style}>
                    <Slider defaultValue={30} disabled={this.state.disabled}/><br/>
                    <Slider range defaultValue={[20,50]} disabled={this.state.disabled}/><br/>
                    <div style={{textAlign: 'left'}}>
                        <p>可用/不可用</p>
                        <Switch checked={this.state.disabled} onChange={this.handleDisabled}/>
                    </div>
                </Card><br/>
            </div>
        );
    }

}


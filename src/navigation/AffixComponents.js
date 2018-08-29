import React from 'react';
import {Affix, Card, Button} from 'antd';

const style ={
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px'
};

class AffixComponents extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            top: 10,
            bottom: 10
        }
    }

    render(){
        return (
            <div>
                <Card title='基本' style={style}>
                    <Affix offsetTop={this.state.top}>
                        <Button htmlType='button' type='primary' onClick={()=>{this.setState({top: this.state.top + 10})}} style={{width: 150}}>TOP</Button>
                        <Button htmlType='button' type='danger' onClick={()=>{this.setState({bottom: this.state.bottom - 10})}} style={{width: 150}}>BOTTOM</Button>
                    </Affix>
                </Card><br/>
            </div>
        )
    }

}

export default AffixComponents;
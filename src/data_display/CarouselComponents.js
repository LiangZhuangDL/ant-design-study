import React from 'react';
import {Card, Carousel} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

export default class CarouselComponents extends React.Component{

    onChange = (a, b, c)=>{
        console.log(a, b, c)
    };

    render(){
        return (
            <div>
                <Card title='基本' style={style}>
                    <Carousel afterChange={this.onChange}>
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </Carousel>
                </Card><br/>
                <Card title='渐显' style={style}>
                    <Carousel effect='fade'>
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </Carousel>
                </Card><br/>
                <Card title='垂直' style={style}>
                    <Carousel vertical>
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </Carousel>
                </Card><br/>
                <Card title='自动切换' style={style}>
                    <Carousel autoplay>
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </Carousel>
                </Card><br/>
            </div>
        )
    }
}
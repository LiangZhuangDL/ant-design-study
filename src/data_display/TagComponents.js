import React from 'react';
import {Card, Icon, Input, Tag, Tooltip} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

export default class TagComponents extends React.Component{
    state = {
        tags: ['标签1', '标签2', "标签3"],
        inputVisible: false,
        inputValue: '',
        checked: true,
    };

    handelClose = (removedTag)=>{
        const tags = this.state.tags.filter(tag=> tag !== removedTag);
        this.setState({tags});
    };

    showInput = ()=>{
        this.setState({
            inputVisible: true,
        }, ()=>this.input.focus())
    };

    handleInputChange = (e)=>{
        this.setState({
            inputValue: e.target.value,
        })
    };

    handleInputConfirm = ()=>{
        let tags = this.state.tags;
        if(this.state.inputValue && tags.indexOf(this.state.inputValue) === -1){
            tags = [...tags, this.state.inputValue];
        }
        this.setState({
            tags,
            inputVisible: false,
            inputValue: '',
        })
    };

    handleChange = (checked)=>{
        this.setState({
            checked,
        })
    };

    saveInputRef = input => this.input = input;

    render(){
        const { tags, inputVisible, inputValue } = this.state;
        return (
            <div>
                <Card style={style} title='基本'>
                    <Tag>标签1</Tag>
                    <Tag><a href='javascript:;'>链接</a> </Tag>
                </Card><br/>
                <Card style={style} title='动态添加和删除'>
                    <div>
                        {tags.map((tag, index)=>{
                            const isLongTag = tag.length > 20;
                            const tagElem = (
                                <Tag key={tag} closable={index !== 0} afterClose={()=>this.handelClose(tag)}>
                                    {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                                </Tag>
                            );
                            return isLongTag ? <Tooltip title={tag} key={tag}>{tagElem}</Tooltip> : tagElem;
                        })}
                        {inputVisible && (
                            <Input
                                ref={this.saveInputRef}
                                type="text"
                                style={{ width: 78 }}
                                value={inputValue}
                                onChange={this.handleInputChange}
                                onBlur={this.handleInputConfirm}
                                onPressEnter={this.handleInputConfirm}
                            />
                        )}
                        {!inputVisible && (
                            <Tag
                                onClick={this.showInput}
                                style={{ background: '#fff', borderStyle: 'dashed' }}
                            >
                                <Icon type="plus" /> New Tag
                            </Tag>
                        )}
                    </div>
                </Card><br/>
                <Card style={style} title='多彩标签'>
                    <div>
                        <Tag color="magenta">magenta</Tag>
                        <Tag color="red">red</Tag>
                        <Tag color="volcano">volcano</Tag>
                        <Tag color="orange">orange</Tag>
                        <Tag color="gold">gold</Tag>
                        <Tag color="lime">lime</Tag>
                        <Tag color="green">green</Tag>
                        <Tag color="cyan">cyan</Tag>
                        <Tag color="blue">blue</Tag>
                        <Tag color="geekblue">geekblue</Tag>
                        <Tag color="purple">purple</Tag>
                    </div><br/><br/>
                    <div>
                        <Tag color="#f50">#f50</Tag>
                        <Tag color="#2db7f5">#2db7f5</Tag>
                        <Tag color="#87d068">#87d068</Tag>
                        <Tag color="#108ee9">#108ee9</Tag>
                    </div>
                </Card><br/>
                <Card style={style} title='可选择'>
                    <Tag.CheckableTag checked={this.state.checked} onChange={this.handleChange}>
                        可选择
                    </Tag.CheckableTag>
                </Card>
            </div>
        )
    }
}
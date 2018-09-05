import React from 'react';
import {Card, Select, message} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

const children = [
    <Select.Option value='汉语'>汉语</Select.Option>,
    <Select.Option value='英语'>英语</Select.Option>,
    <Select.Option value='俄语'>俄语</Select.Option>,
    <Select.Option value='西班牙语'>西班牙语</Select.Option>,
    <Select.Option value='葡萄牙语'>葡萄牙语</Select.Option>,
];

export default class SelectComponents extends React.Component {

    onChange = (value) => {
        message.info(value);
    };

    onTextChange = (value) => {
        message.info(value);
    };

    handleBlur = () => {
        console.log('blur');
    };

    handleFocus = () => {
        console.log('focus')
    };

    render() {
        return (
            <div>
                <Card title='基本使用' style={style}>
                    <Select defaultValue='英语' onChange={this.onChange} style={{width: 200}}>
                        <Select.Option value='汉语'>汉语</Select.Option>
                        <Select.Option value='英语'>英语</Select.Option>
                        <Select.Option value='俄语'>俄语</Select.Option>
                        <Select.Option value='西班牙语'>西班牙语</Select.Option>
                        <Select.Option value='葡萄牙语'>葡萄牙语</Select.Option>
                    </Select>
                </Card><br/>
                <Card title='多选' style={style}>
                    <Select onChange={this.onChange} style={{width: 600}} mode='multiple' placeholder='请选择语言'>
                        {children}
                    </Select>
                </Card><br/>
                <Card title='带搜索框' style={style}>
                    <Select onBlur={this.handleBlur} onFocus={this.handleFocus} onChange={this.onChange} style={{width: 600}} mode='multiple' placeholder='请选择语言' showSearch optionFilterProp='children' filterOption={(input, option)=>option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                        {children}
                    </Select>
                </Card><br/>
                <Card title='标签' style={style}>
                    <Select onChange={this.onChange} style={{width: 600}} mode='tags' placeholder='请选择语言'>
                        {children}
                    </Select>
                </Card><br/>
                <Card title='分组' style={style}>
                    <Select defaultValue='英语' onChange={this.onChange} style={{width: 300}}>
                        <Select.OptGroup label='亚洲'>
                            <Select.Option value='汉语'>汉语</Select.Option>
                        </Select.OptGroup>
                        <Select.OptGroup label='欧洲'>
                            <Select.Option value='英语'>英语</Select.Option>
                            <Select.Option value='俄语'>俄语</Select.Option>
                            <Select.Option value='西班牙语'>西班牙语</Select.Option>
                            <Select.Option value='葡萄牙语'>葡萄牙语</Select.Option>
                        </Select.OptGroup>
                    </Select>
                </Card><br/>
                <Card title='获得选项的文本' style={style}>
                    <Select labelInValue onChange={this.onTextChange} style={{width: 600}} placeholder='请选择语言' defaultValue={{key: '汉语'}}>
                        <Select.Option value='英语' key='英语'>英语</Select.Option>
                        <Select.Option value='俄语' key='俄语'>俄语</Select.Option>
                        <Select.Option value='西班牙语' key='西班牙语'>西班牙语</Select.Option>
                        <Select.Option value='葡萄牙语' key='葡萄牙语'>葡萄牙语</Select.Option>
                    </Select>
                </Card>
            </div>
        );
    }

}
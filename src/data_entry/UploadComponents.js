import React from 'react';
import {Card, Upload, Button, Icon, message} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

const defaultFileList = [
    {
        uid: '1',
        name: 'cat.png',
        status: 'done',
        response: '服务器错误',
        url: 'http://www.baidu.com/cat.png',
    },
    {
        uid: '2',
        name: 'pig.png',
        status: 'done',
        url: 'http://www.baidu.com/pig.png',
    },
    {
        uid: '3',
        name: 'dog.png',
        status: 'error',
        response: '服务器错误',
        url: 'http://www.baidu.com/dog.png',
    },
];

export default class UploadComponents extends React.Component{
    state = {

    };

    getBase64 = (img, callback)=>{
        const reader = new FileReader();
        reader.addEventListener('load', ()=> callback(reader.result));
        reader.readAsDataURL(img);
    };

    beforeUpload = (file)=>{
        const isJPG = file.type === 'image/jpeg';
        if(!isJPG){
            message.error("只能上传JPG文件");
        }

        const isLt2M = file.size/1024/1024 < 2;
        if(!isLt2M){
            message.error("只能上传小于2MB的图片");
        }
        return isJPG && isLt2M;
    };

    onChange = (info)=>{
        if(info.file.status !== 'uploading'){
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} 文件上传成功`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} 文件上传失败.`);
        }
    };

    render(){
        return (
            <div>
                <Card title='点击上传' style={style}>
                    <Upload onChange={this.onChange} action='//jsonplaceholder.typicode.com/posts/' name='image'>
                        <Button htmlType='button'>
                            <Icon type='upload'/>上传文件
                        </Button>
                    </Upload>
                </Card><br/>
                <Card title='已上传文件列表' style={style}>
                    <Upload defaultFileList={defaultFileList} onChange={this.onChange} action='//jsonplaceholder.typicode.com/posts/' name='image' multiple>
                        <Button htmlType='button'>
                            <Icon type='upload'/>上传文件
                        </Button>
                    </Upload>
                </Card><br/>
                <Card title='文件夹上传' style={style}>
                    <Upload onChange={this.onChange} action='//jsonplaceholder.typicode.com/posts/' name='image' directory>
                        <Button htmlType='button'>
                            <Icon type='upload'/>上传文件夹
                        </Button>
                    </Upload>
                </Card><br/>
                <p>未完结。。。。。。</p>
            </div>
        )
    }
}
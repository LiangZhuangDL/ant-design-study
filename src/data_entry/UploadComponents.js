import React from 'react';
import {Card, Upload, Button, Icon, message, Modal} from 'antd';

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

function getBase64(img, callback){
    const reader = new FileReader();
    reader.addEventListener('load', ()=> callback(reader.result));
    reader.readAsDataURL(img);
};

export default class UploadComponents extends React.Component{
    state = {
        loading: false,
        previewVisible: false,
        previewImage: '',
        fileList: [
            {
                uid: '-1',
                name: 'pizza.jpg',
                status: 'done',
                url: 'http://img.hb.aicdn.com/231ec1ae0b968661004cecfb6d35c880b06dd13e33f64-D2Uuos_fw658'
            },
        ],
        imageUrl: '',
    };

    handleCancel = ()=>{
        this.setState({
            previewVisible: false,
        })
    };

    handlePreview = (file)=>{
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        })
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

    handleImageChange = (info)=>{
        if(info.file.status === 'uploading'){
            this.setState({
                loading: true,
            });
            return
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, imageUrl => this.setState({
                imageUrl,
                loading: false,
            }));
    }};

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
    handleChange = ({fileList})=>{
        this.setState({
            fileList: fileList,
        })
    };

    render(){
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">上传</div>
            </div>
        );

        const uploadImageButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div>Upload</div>
            </div>
        );
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
                <Card title='用户头像' style={style}>
                    <Upload name='avatar' action="//jsonplaceholder.typicode.com/posts/" listType='picture-card' showUploadList={false} beforeUpload={this.beforeUpload} onChange={this.handleImageChange}>
                        {this.state.imageUrl ? <img src={this.state.imageUrl} alt="avatar" /> : uploadImageButton}
                    </Upload>
                </Card><br/>
                <Card title='照片墙' style={style}>
                    <Upload action="//jsonplaceholder.typicode.com/posts/" listType="picture-card" fileList={this.state.fileList} onPreview={this.handlePreview} onChange={this.handleChange} multiple>
                        {uploadButton}
                    </Upload>
                    <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel} align='center'>
                        <img alt="example" style={{ width: '100%' }} src={this.state.previewImage} />
                    </Modal>
                </Card>
            </div>
        )
    }
}
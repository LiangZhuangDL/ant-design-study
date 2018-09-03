import React from 'react';
import {Form, Card, Icon, Input, Button, message} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

class FormComponents extends React.Component{

    componentDidMount(){
        this.props.form.validateFields();
    }

    handleSubmit = (e)=>{
      e.preventDefault();
      this.props.form.validateFields((err, values)=>{
          if(!err){
              message.info(values);
          }
      })
    };

    hasErrors = (fieldsError)=>{
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    };

    render(){
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const passwordError = isFieldTouched('password') && getFieldError('password');

        return (
            <div>
                <Card title='水平登录栏' style={style}>
                    <Form layout='inline' onSubmit={this.handleSubmit}>
                        <Form.Item validateStatus={userNameError? 'error': ''} help={userNameError || ''} hasFeedback label='用户名' colon={true}>
                            {getFieldDecorator('userName', {rules: [{ required: true, message: '请填入您的用户名'}],})(
                                <Input placeholder='用户名' prefix={<Icon type='user' style={{color: 'rgba(0,0,0,.25)'}}/>}/>
                            )}
                        </Form.Item>
                        <Form.Item validateStatus={passwordError? 'error': ''} help={passwordError || ''} hasFeedback label='密码' colon={true}>
                            {getFieldDecorator('password', {rules: [{ required: true, message: '请填入您的密码'}], initialValue: '123456'})(
                                <Input type="password" placeholder='密码' prefix={<Icon type='lock' style={{color: 'rgba(0,0,0,.25)'}}/>}/>
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" disabled={this.hasErrors(getFieldsError())}>登录</Button>
                        </Form.Item>
                    </Form>
                </Card><br/>
                <Card title='垂直登录栏' style={style}>
                    <Form layout='horizontal' onSubmit={this.handleSubmit}>
                        <Form.Item validateStatus={userNameError? 'error': ''} help={userNameError || ''} label='用户名' colon={true} labelCol={{span: 4, offset: 3}} wrapperCol={{span: 12}}>
                            {getFieldDecorator('userName', {rules: [{ required: true, message: '请填入您的用户名'}],})(
                                <Input placeholder='用户名' prefix={<Icon type='user' style={{color: 'rgba(0,0,0,.25)'}}/>}/>
                            )}
                        </Form.Item>
                        <Form.Item validateStatus={passwordError? 'error': ''} help={passwordError || ''} label='密码' colon={true} labelCol={{span: 4, offset: 3}} wrapperCol={{span: 12}}>
                            {getFieldDecorator('password', {rules: [{ required: true, message: '请填入您的密码'}],})(
                                <Input type="password" placeholder='密码' prefix={<Icon type='lock' style={{color: 'rgba(0,0,0,.25)'}}/>}/>
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" disabled={this.hasErrors(getFieldsError())}>登录</Button>
                        </Form.Item>
                    </Form>
                </Card><br/>
            </div>
        );
    }
}

const WrappedHorizontalLoginForm = Form.create()(FormComponents);
export default WrappedHorizontalLoginForm;
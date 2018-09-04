import React from 'react';
import {Card, Mention} from 'antd';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

const languages = ['汉语', '英语', '日语', '俄语','西班牙语','阿拉伯语'];
const versions = ['1.0', '2.0', '3.0', '4.0'];

export default class MentionComponents extends React.Component{
    state = {
      suggestions: [],
      loading: false,
    };

    fetchSuggestions = (value, callback)=>{
      setTimeout(()=>{
          callback(languages.filter(item => item.indexOf(value) !== -1));
      }, 500)
    };

    onSearchChange = (value)=>{
      this.fetchSuggestions(value, (suggestions) =>{
          this.setState({
              suggestions,
              loading: false,
          });
      });
      this.setState({
          loading: true,
      })
    };

    onChange = (contentState)=>{
        console.log(Mention.toString(contentState))
    };

    onSelect = (suggestion)=>{
      console.log(suggestion);
    };

    onDifferentSearchChange = (value, trigger)=>{
      const dataSource = trigger === '@'? languages: versions;
      this.setState({
        suggestions: dataSource.filter(item => item.indexOf(value) !== -1)
      })
    };

    render(){
        return (
          <div>
              <Card title='基本使用' style={style}>
                  <Mention style={{width: '100%'}} defaultValue={Mention.toContentState('@汉语')} onChange={this.onChange} onSelect={this.onSelect} suggestions={['汉语', '英语', '日语', '俄语']} placement='top'/>
              </Card><br/>
              <Card title='异步加载' style={style}>
                  <Mention style={{width: '100%'}} loading={this.state.loading} onSearchChange={this.onSearchChange} suggestions={this.state.suggestions} placement='top'/>
              </Card><br/>
              <Card title='多行' style={style}>
                  <Mention style={{width: '100%', height: 150, textAlign: 'left'}} multiLines defaultValue={Mention.toContentState('@汉语')} onChange={this.onChange} onSelect={this.onSelect} suggestions={['汉语', '英语', '日语', '俄语']} placement='top'/>
              </Card><br/>
              <Card title='无效或只读' style={style}>
                  <Mention style={{width: '100%'}} disabled onChange={this.onChange} onSelect={this.onSelect} suggestions={['汉语', '英语', '日语', '俄语']}/><br/><br/>
                  <Mention style={{width: '100%'}} readOnly onChange={this.onChange} onSelect={this.onSelect} suggestions={['汉语', '英语', '日语', '俄语']}/>
              </Card><br/>
              <Card title='自定义触发字符' style={style}>
                  <Mention style={{width: '100%', textAlign: 'left'}} onSearchChange={this.onDifferentSearchChange} suggestions={this.state.suggestions} placement='top' prefix={['@', '#']} onChange={this.onChange} onSelect={this.onSelect}/>
              </Card>
          </div>
        );
    }
}
import React from 'react'
import {DatePicker, Card} from 'antd';
import moment from 'moment';

const style = {
    width: 1000,
    margin: 'auto',
    padding: '10px 10px 10px 10px',
};

const dateFormat = 'YYYY年MM月DD日';
const monthFormat = 'YYYY/MM';

export default class DatePickerComponents extends React.Component{

    state = {
        mode: 'time',
    };

    handleOpenChange = (open) => {
        if (open) {
            this.setState({ mode: 'time' });
        }
    };

    handlePanelChange = (value, mode) => {
        this.setState({ mode });
    };

    disabledDate = (current)=>{
      return current && current < moment().endOf('day');
    };

    render(){
        return (
          <div>
              <Card title='基本和日期格式' style={style}>
                  <DatePicker format={dateFormat} defaultValue={moment(new Date(), monthFormat)} showTime renderExtraFooter={() => '日期选择器'}/><br/><br/>
                  <DatePicker.MonthPicker placeholder='请选择月份' format={monthFormat} defaultValue={moment(new Date(), monthFormat)} renderExtraFooter={() => '月份选择器'}/><br/><br/>
                  <DatePicker.WeekPicker placeholder='请选择星期' defaultValue={moment(new Date())}/><br/><br/>
                  <DatePicker.RangePicker format={dateFormat} placeholder={['开始时间', '结束时间']} showTime/>
              </Card><br/>
              <Card title='不可选择日期' style={style}>
                  <DatePicker disabledDate={this.disabledDate} style={{width: 300}}/>
              </Card><br/>
              <Card title='预设范围' style={style}>
                  <DatePicker.RangePicker format={dateFormat} placeholder={['开始时间', '结束时间']} showTime ranges={{'今天': [moment(), moment()], '本月': [moment(), moment().endOf('month')]}}/>
              </Card><br/>
              <Card title='受控面板' style={style}>
                  <DatePicker onOpenChange={this.handleOpenChange} onPanelChange={this.handlePanelChange} mode={this.state.mode} showTime/>
              </Card>
          </div>
        );
    }
}
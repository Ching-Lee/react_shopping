import React from 'react';
import './loginComponent.css';
export default class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {phone: '',message:'该用户名为空'};
    }

    clickHandle() {
        const username = this.state.phone;
        //传过来了一个方法，是点击登录按钮后的处理
        const loginHandle = this.props.loginHandle;
        loginHandle(username);
    }

    changeHandle(e) {
        let value=e.target.value;
       let telReg=/[1][34578]\d{9}$/;
        //验证用户名是否为空
        if(value=='')
            this.setState({message:'该用户名为空'});
        //验证用户名不是手机号
        else if(!telReg.test(value)){
            this.setState({message:'请输入正确的手机号码'});
        }
        else
            this.setState({message:''});
        this.setState({phone: e.target.value});
    }

    render() {
        const params = this.props.params;
        return (
            <div className='login-container'>
                <div className='input-container phone-container'>
                    <i className='icon-tablet'/>
                    <input type='tel'
                           required='required'
                           placeholder='输入手机号'
                           onChange={this.changeHandle.bind(this)}
                           value={this.state.phone}/>
                </div>
                <span style={{fontSize:'12px',color:'rgb(233,32,61)'}}>{this.state.message}</span>
                <div className='input-container password-container'>
                    <i className='icon-key'/>
                    <input type='text' placeholder='请输入验证码'/>
                    <button>发送验证码</button>
                </div>
                <button className='login-button' onClick={this.clickHandle.bind(this)}>登录</button>
            </div>
        );
    }
}

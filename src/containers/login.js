import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userInfoActions from '../action/userInfoActions';
import PageHeader from "../component/common/pageHeader";
import {hashHistory} from 'react-router'
import LoginComponent from "../component/login/loginComponent";



class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state={checking:true};
    }

    componentDidMount(){
        this.doCheck();
    }
    //检测是否登陆
    doCheck(){
        const userinfo=this.props.userinfo;
        if(userinfo.username){
            //已经登录，直接转到用户中心
            this.goUserpage();
        }else{
            //尚未登录
            this.setState({
               checking:false
            });
        }
    }

    goUserpage(){
        hashHistory.push('/user');
    }
     //登录成功之后的业务处理
    loginHandle(username){
        //保存用户名
        const actions=this.props.userInfoActions;
        let userinfo=this.props.userinfo;
        userinfo.username=username;
        if(username=='')
            return;

        actions.update(userinfo);

        //跳转连接
        const params=this.props.params;
        const router=params.router;
        if(router)
            hashHistory.push('/'+router);
        else
            this.goUserpage();
    }

    render() {
        const params = this.props.params;
        return (
            <div>
                <PageHeader title='用户登录'/>
                {
                    this.state.checking ?
                    <div/>
                    :
                    <LoginComponent loginHandle={this.loginHandle.bind(this)}/>
                }

            </div>


        );
    }


}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

//触发数据改变
function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActions, dispatch),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
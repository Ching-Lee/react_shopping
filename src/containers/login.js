import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userInfoActions from '../action/userInfoActions';
import PageHeader from "../component/common/pageHeader";
import {hashHistory} from 'react-router'
import LoginComponent from "../component/login/loginComponent";
import * as storeActions from '../action/storeActions';


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
        if(username=='')
            return;
        //保存用户名到redux
        const actions=this.props.userInfoActions;
        let userinfo=this.props.userinfo;
        userinfo.username=username;
        actions.update(userinfo);
        //保存用户名到localstorage
        localStorage.username=username;
        //有了登录信息，就可以去获取收藏列表
        this.props.storeActions.getInitStore(this.props.userinfo.username);
        //跳转连接
        const params=this.props.params;
        console.log("登录页面跳转返回连接"+params);
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
        userinfo: state.userinfo,
        store:state.store
    }
}

//触发数据改变
function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActions, dispatch),
        storeActions: bindActionCreators(storeActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
import React from 'react';
import PageHeader from '../component/common/pageHeader';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import * as userInfoActions from '../action/userInfoActions';
import UserInfo from '../component/user/userinfo'
import OrderList from '../component/user/orderList'
 class User extends React.Component {
    constructor(props) {
        super(props);
        this.state={ischecking:true};
    }

    componentDidMount(){
        //判断有没有登陆，没有登陆直接跳转
        const userinfo=this.props.userinfo;
        //如果尚未登录
        if(!userinfo.username){
            hashHistory.push('/login');
        }
        //如果已经登录
        else{
            this.setState({ischecking:false});
        }



    }
    render(){
        return(
            this.state.ischecking ? <div/>:
                <div>
                    <PageHeader title='用户主页' backRouter='/'/>
                    <UserInfo cityName={this.props.userinfo.cityName} username={this.props.userinfo.username}/>
                    <OrderList username={this.props.userinfo.username}/>
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
)(User)
/*收藏组件*/

import React from 'react';
import {hashHistory} from 'react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import * as storeActions from '../../../action/storeActions';


class Store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isStore: false}
    }



    //验证是否登录
    loginCheck() {
        const id = this.props.id;
        const userinfo = this.props.userinfo;
        //把当前详情页的router传递过去，登录完了之后会跳转到原来的页面
        //如果没有用户名，跳转到登录页面
        if (!userinfo.username) {
            hashHistory.push('/login/' + encodeURIComponent('detail/' + id));
            return false;
        }
        return true;
    }

    //收藏事件
    storeHandle() {

        //验证登录
        const loginFlag = this.loginCheck();
        if (!loginFlag)
            return;
        //收藏的流程
        const id = this.props.id;
        //判断当前页面是否收藏，如果收藏，就取消
        if (this.state.isStore) {
           this.props.storeActions.removeStore({id: id});
           this.setState({isStore: false});
        } else {
            this.props.storeActions.addStore({id: id});
            this.setState({isStore: true});
        }

        //跳转到用户主页
        // hashHistory.push('/User');

    }


    render() {

        return (

            <i className={'icon-star'} onClick={this.storeHandle.bind(this)} style={
                this.state.isStore ? {color: '#FFD700'} : {color: '#ccc'}
            }/>

        );
    }

    componentDidMount() {


        this.checkStoreState();

    }

    //检验当前商品是否被收藏
    checkStoreState() {
        //从父组件传递过来的
        const id = this.props.id;

        //some函数只要有一个满足即可
        this.props.store.some(item => {
                if (item.id === id) {
                    this.setState({isStore: true});
                    return true;
                }

            }
        );
    }


}


// -------------------redux react 绑定--------------------

//用于收藏和购买部分的功能

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        store: state.store
    }
}

//触发数据变化
function mapDispatchToProps(dispatch) {
    return {
        storeActions: bindActionCreators(storeActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Store)
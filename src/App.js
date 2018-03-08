import React from 'react';

import './App.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userInfoActions from './action/userInfoActions'
import * as storeActions from './action/storeActions';

class App extends React.Component {
    constructor() {
        super();
        this.state = {initDone: false};
    }

    componentDidMount() {
        // 获取位置信息
        let cityName = localStorage.cityName;
        if (cityName == null) {
            cityName = '北京';
        }
        //触发redux的修改行为
        this.props.userinfo.cityName=cityName;
        this.props.userInfoActions.update(this.props.userinfo);

        //获取用户名
        let username=localStorage.username;
        if(username!=null){
            //触发redux的修改行为
            this.props.userinfo.username=username;
            this.props.userInfoActions.update(this.props.userinfo);

            //触发从后台根据username获取个人收藏商品id，存储在redux中
            if(this.props.userinfo.username!=null){
                console.log('用户名'+this.props.userinfo.username);
                //从后台获取收藏信息
                this.props.storeActions.getInitStore(this.props.userinfo.username);

                console.log('初始化的store'+this.props.store);

            }

        }

        // 更改状态
        this.setState({
            initDone: true
        })
    }


//首先判断是否完成初始化
    render(){
        return (
            <div>
                {
                    this.state.initDone ? this.props.children : <div>正在加载</div>
                }

            </div>
        );
    }
}



//-------------------redux react 绑定--------------------

//当前组件如需使用redux中的共享数据，在此设置，就能够当作属性来使用
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
)(App)

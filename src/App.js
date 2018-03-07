import React from 'react';

import './App.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userInfoActions from './action/userInfoActions'

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
        this.props.userInfoActions.update({
            cityName: cityName
        });

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
    return {}
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
)(App)

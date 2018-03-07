import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userInfoActions from '../action/userInfoActions';
import PageHeader from '../component/common/pageHeader';
import CurrentCity from '../component/city/currentCity';
import CityList from '../component/city/cityList';
import {hashHistory} from 'react-router';
class City extends React.Component{
    changeCity(newCity){
        if(newCity==null)
            return;
      //修改redux
        const userinfo=this.props.userinfo;
        userinfo.cityName=newCity;
        this.props.userInfoActions.update(userinfo);
      //修改localstorage
        localStorage.cityName=newCity;

        //跳转到首页
        hashHistory.push('/');
    }
    render(){
        return(
            <div>
                <PageHeader title='选择城市'/>
                <CurrentCity currentCity={this.props.userinfo.cityName}/>
                <CityList changeFn={this.changeCity.bind(this)}/>
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
)(City)
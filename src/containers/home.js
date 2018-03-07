import React from 'react';
import HomeHeader from '../component/home/homeheader/HomeHeader';
import Category from '../component/home/category/Category';
import Recomment from '../component/home/recommend/Recomment';
import Likelist from '../component/home/likelist/LikeList';
import { connect } from 'react-redux';
class Home extends React.Component{
    render(){
        return(
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName}/>
                <Category/>
                <Recomment/>
                <Likelist cityName={this.props.userinfo.cityName}/>
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

//触发数据变化
function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

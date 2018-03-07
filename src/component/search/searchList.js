import React from 'react';
import LikeItem from '../home/likelist/likeItem';
import { connect } from 'react-redux';
import LoadMore from '../home/likelist/LoadMore'

const initialState={
    list: [], //存储列表信息
    page: 0, //请求的页码
    hasMore:false,
    isLoadingMore:false,
};

class SearchList extends React.Component{

    constructor(props){
     super(props);
     this.state = initialState;
    }



    componentDidMount(){
        this.loadFirstPageData();
    }

    //第一次加载数据
    loadFirstPageData(){
        const myfetchOption={method:'GET'};
        const cityName=this.props.userinfo.cityName;
        const category=this.props.category;
        fetch('/api/search/'+this.state.page+'/'+cityName+'/'+category,myfetchOption).then(response => response.json())
            .then(json => this.setState({list: json.data, hasMore: json.hasMore}));
    }


    //点击加载更多触发
    loadMoreData() {
        //记录状态
        this.setState({isLoadingMore: true});
        let page=this.state.page+1;
        //发送请求
        let myFetchOptions = {method: 'GET'};
        const cityName=this.props.userinfo.cityName;
        const category=this.props.category;
        fetch('/api/search/'+this.state.page+'/'+cityName+'/'+category, myFetchOptions)
            .then(response => response.json())
            .then(json => this.setState({list: this.state.list.concat(json.data), hasMore: json.hasMore}));
        //设置page
        this.setState({page: page, isLoadingMore: false});

    }

    // 处理重新搜索
    componentDidUpdate(prevProps, prevState) {
        const keyword = this.props.keyword;
        const category = this.props.category;

        // 搜索条件完全相等时，忽略。重要！！！
        if (keyword === prevProps.keyword && category === prevProps.category) {
            return
        }

        // 重置 state
        this.setState(initialState);

        // 重新加载数据
        this.loadFirstPageData()
    }



    render(){
        const search=this.state.list;
        const searchList=search.length?
            search.map((searchItem,index)=>(
                <LikeItem key={index} item={searchItem}/>
            ))

            :'加载中...';
        return(
             <div>
                 {searchList}
                 {
                     this.state.hasMore?
                         <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                         : ''
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

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchList)
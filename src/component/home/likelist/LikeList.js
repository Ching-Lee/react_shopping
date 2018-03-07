import React from 'react';
import LoadMore from './LoadMore';
import LikeItem from './likeItem';

export default class LikeList extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [], //存储列表信息
            page: 0, //请求的页码
            hasMore:false,
            isLoadingMore:false,
        }
    }

    componentDidMount() {
        let myFetchOptions = {method: 'GET'};
        fetch('/api/homelist/' + this.props.cityName + '/' + this.state.page, myFetchOptions)
            .then(response => response.json())
            .then(json => this.setState({list: json.data, hasMore: json.hasMore}));
    };

    //点击加载更多触发
    loadMoreData() {
        //记录状态
        this.setState({isLoadingMore: true});
        let page=this.state.page+1;
        //发送请求
        let myFetchOptions = {method: 'GET'};
        fetch('/api/homelist/' + this.props.cityName + '/' + page, myFetchOptions)
            .then(response => response.json())
            .then(json => this.setState({list: this.state.list.concat(json.data), hasMore: json.hasMore}));
        //设置page
        this.setState({page: page, isLoadingMore: false});

    }



    render() {
        const like = this.state.list;
        let likeList = like.length ?
            like.map((likeItem, index) => (
                <LikeItem key={index} item={likeItem}/>
            ))

            : '加载中';
        return (
            <div>
                <h3 style={{
                    padding: '10px',
                    borderTop: '1px #F8F8F8 solid',
                    borderBottom: '1px #F8F8F8 solid',
                    margin: '0px'}}>
                    猜你喜欢
                </h3>
                {likeList}
                {
                    this.state.hasMore?
                        <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                        : ''
                }

            </div>

        );
    }



}
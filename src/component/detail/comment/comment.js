import React from 'react';
import Star from '../info/star';
import LoadMore from '../../home/likelist/LoadMore';
import './comment.css'
const initialState = {
    list: [], //存储列表信息
    page: 0, //请求的页码
    hasMore: false,
    isLoadingMore: false,
};
export default class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount() {
        this.loadFirstPageData();
    }

    //第一次加载数据
    loadFirstPageData() {
        const myfetchOption = {method: 'GET'};
        fetch('/api/detail/comment/' + this.state.page + '/' + this.props.id, myfetchOption).then(response => response.json())
            .then(json => this.setState({list: json.data, hasMore: json.hasMore}));
    }

    //点击加载更多触发
    loadMoreData() {
        //记录状态
        this.setState({isLoadingMore: true});
        let page = this.state.page + 1;
        //发送请求
        let myFetchOptions = {method: 'GET'};
        fetch('/api/detail/comment/' + this.state.page + '/' + this.props.id, myFetchOptions)
            .then(response => response.json())
            .then(json => this.setState({list: this.state.list.concat(json.data), hasMore: json.hasMore}));
        //设置page
        this.setState({page: page, isLoadingMore: false});

    }

    render() {
        let comment = this.state.list;
        const commentList = comment.length ?
            comment.map((item, index) => (
                <div key={index} className='comment_info'>
                    <p>
                        <i className='icon-user'/>
                        <span>{item.username}</span>
                    </p>
                    <Star star={item.star}/>
                    <p className='comment_content'>{item.comment}</p>
                </div>
            ))
            : '加载中';
        return (
            <div className='comment'>
                <h4>用户点评</h4>
                {commentList}
                {
                    this.state.hasMore?
                        <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                        : ''
                }
            </div>
        );
    }


}
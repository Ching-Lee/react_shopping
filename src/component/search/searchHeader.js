import React from 'react'
import SearchInput from '../common/searchInput'
import './searchHeader.css'
import '../../static/css/font.css'
import {Link,hashHistory} from 'react-router'
export default class SearchHeader extends React.Component{
    //实现页面跳转，还是search页面，不过请求参数不同
    enterHandle(value) {
        hashHistory.push('/search/all/'+encodeURIComponent(value));
    }

    clickHandle() {
        window.history.back();
    }

    render(){
        return(
            <div className='search_header'>
                <i className='icon-chevron-left' onClick={this.clickHandle.bind(this)}/>
                <div className='search_input'>
                    <SearchInput keyword={this.props.keyword||''} enterHandle={this.enterHandle.bind(this)}/>
                </div>

            </div>
        );
    }
}
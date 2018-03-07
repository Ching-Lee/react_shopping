import React from 'react';
import SearchHeader from '../component/search/searchHeader';
import SearchList from '../component/search/searchList';
export default class Search extends React.Component{
    render(){
        const params=this.props.params;
        return(
            <div>
                <SearchHeader keyword={params.keyword}/>
                <SearchList keyword={params.keyword} category={params.category}/>
            </div>
        );
    }
}

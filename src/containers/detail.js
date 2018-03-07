import React from 'react';
import PageHeader from '../component/common/pageHeader';
import Info from '../component/detail/info/info';
import Comment from '../component/detail/comment/comment';
export default class Detail extends React.Component{
    render(){
        const params=this.props.params;
        return(
            <div>
                <PageHeader title='商家信息'/>
                <Info id={params.id}/>
                <Comment id={params.id}/>
            </div>
        );
    }
}

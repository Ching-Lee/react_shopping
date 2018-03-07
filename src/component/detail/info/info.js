import React from 'react';
import DetailInfo from './detailInfo';
export default class Info extends React.Component{
    constructor(props){
        super(props);
        this.state={info:false};
    }

    componentDidMount(){
        const myfetchOption={method:'GET'};
        fetch('/api/detail/info/'+this.props.id,myfetchOption).then(response => response.json())
            .then(json => this.setState({info: json}));
    }

    //只有一个元素不能用array，json是一个Object，array的length还是0
    render(){
        const info=this.state.info;
        const dataList=info?
             <DetailInfo info={info} id={this.props.id}/>
            :'加载中...';

        return(
            <div>
                {dataList}
            </div>
        );
    }
}
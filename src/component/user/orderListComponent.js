import React from 'react';
import './orderListComponent.css';

export default class OrderListComponent extends React.Component {


    constructor() {
        super();
        this.state = {commentState: '',commentValue:''};
    }

    componentDidMount() {
        //0未评价，1评价中，2已评价
        this.setState({commentState: this.props.item.commentState});
    }

    //显示评价框
    showComment() {
        //当未评价的时候，点击按钮的响应事件
        this.setState({commentState: 1});
    }

    //隐藏评价框
    hideComment(){
        this.setState({commentState:0});
    }

    //双向绑定评论内容
    commentText(e){
        this.setState({commentValue:e.target.value});
    }

    //提交评价
    submitComment(){
        const data={"id":`${this.props.item.id}`,
            "commentText":`${this.state.commentValue}`};
        if(!data.commentText)
            return;

       fetch('/api/submitComment', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body:`data=${JSON.stringify(data)}`,
        })
           .then(response=>response.json())
           .then(json=>{
               if(json.errno===0)
                   //已经评价，修改状态
                   this.commentOK();
           });


    }

    //评价成功
    commentOK(){
        //已经评价，修改状态
        this.setState({
            commentState:2
        })
    }
    render() {
        const item = this.props.item;
        return (
            <div className='orderContainer'>
                <div className='order'>
                    <img src={item.img}/>
                    <section>
                        <p>{`商户：${item.title}`}</p>
                        <p>{`数量：${item.count}`}</p>
                        <p>{`价格：${item.price}`}</p>
                    </section>
                    {
                        this.state.commentState === 0 ?
                            //未评价
                            <button onClick={this.showComment.bind(this)}>评价</button> : this.state.commentState === 1 ?
                            //评价中
                            '' :
                            //已评价
                            <button disabled="disabled" style={{backgroundColor: '#ccc'}}>已评价</button>
                    }
                </div>

                {
                    this.state.commentState === 1 ?
                        <div className='order_comment'>
                            <textarea value={this.state.commentValue} onChange={this.commentText.bind(this)}/>
                            <button onClick={this.submitComment.bind(this)}>提交</button>
                            <button onClick={this.hideComment.bind(this)} style={{backgroundColor: '#ccc'}}>取消</button>
                        </div> : ''
                }
            </div>

        );
    }
}
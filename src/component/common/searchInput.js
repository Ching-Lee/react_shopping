import React from 'react';
import './searchinput.css'
export default class HomeHeader extends React.Component {
    constructor() {
        super();
        this.state = {kwd: ''}
    }

    componentDidMount(){
       this.setState({kwd:this.props.keyword});
    }


    ChangeHandle(e) {
        let val = e.target.value;
        this.setState({
            kwd: val
        });
    }

    KeyUpHandle(e) {
        if (e.keyCode !== 13)
            return;
        this.props.enterHandle(this.state.kwd);
    }


    render(){
        return(
            <div className='middle_header'>
                <i className='icon-search'/>
                &nbsp;
                <input
                    type='text'
                    placeholder='请输入关键字'
                    onChange={this.ChangeHandle.bind(this)}
                    onKeyUp={this.KeyUpHandle.bind(this)}
                    value={this.state.kwd}
                />
            </div>
        );
    }

}
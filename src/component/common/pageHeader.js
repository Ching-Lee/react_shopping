import React from 'react';
import '../../static/css/font.css';
import './pageheader.css';
import {hashHistory} from 'react-router'

export default class PageHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    clickHandle() {
        const backRouter=this.props.backRouter;
        if(backRouter)
            hashHistory.push(backRouter);
        else {
            window.history.back();
        }

    }


    render() {
        return (
            <div className='page_header'>
                <h1>{this.props.title}</h1>
                <i className='icon-chevron-left' onClick={this.clickHandle.bind(this)}/>
            </div>
        );
    }
}
import React from 'react';
import '../../../static/css/font.css';
import './homeheader.css'
import {Link, hashHistory} from 'react-router'
import SearchInput from '../../common/searchInput'

export default class HomeHeader extends React.Component {

    enterHandle(value) {
        hashHistory.push('/search/all/' + encodeURIComponent(value));
    }

    render() {
        return (
            <header className='home_header'>
                <div className='left_header'>
                    <Link to='/city'>
                        <span>{this.props.cityName}</span>
                        <i className='icon-angle-down'/>
                    </Link>
                </div>

                <SearchInput keyword='' enterHandle={this.enterHandle.bind(this)}/>

                <div className='right_header'>
                    <Link to='/login' style={{color:'white'}}>
                        <i className='icon-user'/>
                    </Link>
                </div>


            </header>
        );
    }
}

import React from 'react';
import './likeItem.css';
import {Link} from 'react-router';

export default class LikeItem extends React.Component {
    render() {
        return (
            <div className='like_item clearfix'>
                <Link to={`/detail/${this.props.item.id}`}>
                    <img src={this.props.item.img} className='left' alt={this.props.item.title}/>
                    <div className='content'>
                        <div className='clearfix'>
                            <span className='title'>{this.props.item.title}</span>
                            <span className='distance'>{this.props.item.distance}</span>
                        </div>

                        <p className='subTitle'>{this.props.item.subTitle}</p>

                        <div className='clearfix'>
                            <span className='price'>￥{this.props.item.price}</span>
                            <span className='mumber'>已售{this.props.item.mumber}</span>
                        </div>

                    </div>
                </Link>
            </div>
        );
    }
}
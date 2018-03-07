import React from 'react';
import './detailinfo.css';
import Star from './star';
import Store from './store';

export default class DetailInfo extends React.Component {
    render() {
        const info = this.props.info;
        return (
            <div className='info'>
                <div className='info_top clearfix'>
                    <img src={info.img} alt={info.title}/>
                    <div className='info_content'>
                        <div className='clearfix'>
                            <h3>{info.title}</h3>
                            <div style={{float: 'right',display:'flex',alignItems:'center',lineHeight:'25px',marginTop:'2px'}}>
                                <span ><Store id={this.props.id}/></span>
                                <span style={{fontSize:'12px',color:'#FFA500',fontWeight:'bolder'}}>收藏</span>
                            </div>
                        </div>

                        <p>
                            <Star star={info.star}/>
                            <span>  ￥{info.price}</span>
                        </p>

                        <p>{info.subTitle}</p>
                    </div>
                </div>

                <p className='info_bottom' dangerouslySetInnerHTML={{__html: info.desc}}/>

            </div>

        );
    }
}


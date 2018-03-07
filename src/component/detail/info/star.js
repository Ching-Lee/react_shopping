import React from 'react';
import './star.css'
export default class DetailInfo extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let star=this.props.star||0;
        if(star>5){
            star=star%5;
        }
        return(
            <span>
                {
                    [1,2,3,4,5].map((item,index)=>{
                        const lightClass=star>=item?' light':'';
                        return <i key={index} className={'icon-star'+ lightClass}/>
                    })

                }


            </span>
        );
    }
}
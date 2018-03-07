import React from 'react';
export default class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div style={{padding:'0 1em',borderBottom:'1em solid #f1f1f1'}}>
                <p>
                    <i className='icon-user'/>
                    <span style={{marginLeft:'1em'}}>{this.props.username}</span>
                </p>
                <p>
                    <i className='icon-map-marker'/>
                    <span style={{marginLeft:'1em'}}>{this.props.cityName}</span>
                </p>
            </div>
        );
    }
}
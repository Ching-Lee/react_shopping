import React from 'react';


export default class CurrentCity extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div style={{paddingTop:'30px',paddingBottom:'30px',borderBottom:'1px #f1f1f1 solid',textAlign:'center'}}>
                <h2>{this.props.currentCity}</h2>
            </div>


        );
    }
}
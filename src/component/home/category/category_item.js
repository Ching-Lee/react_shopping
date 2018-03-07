import React from 'react'

export default class CategoryItem extends React.Component {
    constructor() {
        super();
    }

    render() {
        let psty={
            textAlign:'center',
            margin:0,
            fontSize:'14px'

        };

        let imgsty={
          width:'40px',
        };
        let listy={
            textAlign:'center',
            width:'60px',
            marginLeft:'5px',
            marginRight:'5px',
            listStyle:'none'
        };
        return (
            <li style={listy}>
                <img src={this.props.src} style={imgsty}/>
                <p style={psty}>{this.props.text}</p>
            </li>
        );
    }
}
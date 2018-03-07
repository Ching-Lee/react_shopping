import React from 'react';

export default class Recomment extends React.Component {
    constructor() {
        super();
        this.state = {ad: ''}
    }

    componentWillMount() {
        let myFetchOptions = {method: 'GET'};
        fetch('/api/homead', myFetchOptions)
            .then(response => response.json())
            .then(json => this.setState({ad: json}));
    };

    render() {
        const ad = this.state.ad;
        let colors=['green','blue','yellow','orange','red','pink'];
        const adList = ad.length ?
            ad.map((adItem, index) => (
                <li key={index} style={{width:'120px',listStyle:'none',paddingTop:'10px',textAlign:'center'}}>
                    <h4 style={{color:colors[index],margin:'0px'}}>{adItem.title}</h4>
                    <img src={adItem.img} style={{width:'120px'}} />
                </li>
            ))


            : '加载中';
        return (
            <div>
                <h3 style={{padding:'10px',borderTop:'1px #F8F8F8 solid',borderBottom:'1px #F8F8F8 solid',margin:'0px'}}>超值特惠</h3>
                <ul style={{paddingLeft:'0px',display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
                    {adList}
                </ul>
            </div>
        );
    }
}
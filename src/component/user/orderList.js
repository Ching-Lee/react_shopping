import React from 'react';
import OrderListComponent from './orderListComponent';

export default class OrderList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {order: []}

    }

    componentDidMount() {
        const fetchOption = {method: 'GET'};
        fetch('/api/orderlist/' + this.props.username, fetchOption).then(response => response.json()).then(json => this.setState({order: json}));

    }

    render() {
        const order = this.state.order;
        const orderList = order.length ?
            order.map((item, index) => (
                <OrderListComponent key={index} item={item}/>
               ))
            : '加载中...';
        return (
            <div>
                <h4 style={{borderBottom:'1px solid #ccc',margin:'0 0 0 10px',padding:'0.5em 10px'}}>您的订单</h4>
                {
                    orderList
                }
            </div>

        );
    }
}

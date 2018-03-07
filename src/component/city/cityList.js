import React from 'react'
import './citylist.css'
export default class CityList extends React.Component{
    clickHandle(newcity){
        const changeFn=this.props.changeFn;
        changeFn(newcity);
    }



    render(){



        return(
            <div >
                <h3 style={{paddingLeft:'20px',fontSize:'16px'}}>热门城市</h3>
                <ul className='city_list'>
                    <li onClick={this.clickHandle.bind(this,'北京')}>北京</li>
                    <li onClick={this.clickHandle.bind(this,'上海')}>上海</li>
                    <li onClick={this.clickHandle.bind(this,'杭州')}>杭州</li>
                    <li onClick={this.clickHandle.bind(this,'深圳')}>深圳</li>
                    <li onClick={this.clickHandle.bind(this,'广州')}>广州</li>
                    <li onClick={this.clickHandle.bind(this,'西安')}>西安</li>
                    <li onClick={this.clickHandle.bind(this,'成都')}>成都</li>
                    <li onClick={this.clickHandle.bind(this,'长沙')}>长沙</li>
                    <li onClick={this.clickHandle.bind(this,'无锡')}>无锡</li>

                </ul>

            </div>
        );
    }
}
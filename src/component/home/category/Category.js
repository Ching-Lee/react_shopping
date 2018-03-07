import React from 'react';
import ReactSwipe from 'react-swipe';
import './Category.css'
import CategoryItem from './category_item';
import {Link} from 'react-router';

export default class Category extends React.Component {
    constructor() {
        super();
        this.state = {index: 0};
    }

    render() {
        //当我们滑动轮播图，会返回一个索引值index，表示当前页面
        //index值为0，1，2
        let opt = {
            continuous: false,
            callback: index => {
                this.setState({index: index});
            }

        };


        return (
            <div>
                <ReactSwipe className="carousel" swipeOptions={opt}>
                    <div>
                        <ul>
                            <Link to='/search/01food'><CategoryItem
                                src={require('../../../static/image/icon/01food_icon_1.png')} text='美食'/></Link>
                            <Link to='/search/01movie'><CategoryItem
                                src={require('../../../static/image/icon/01movie_icon_2.png')} text='电影'/></Link>
                            <Link to='/search/01hotel'><CategoryItem
                                src={require('../../../static/image/icon/01hotel_icon_3.png')} text='酒店'/></Link>
                            <Link to='/search/01entertainment'><CategoryItem
                                src={require('../../../static/image/icon/01entertainment_icon_4.png')}
                                text='休闲娱乐'/></Link>
                            <Link to='/search/01fast_food'><CategoryItem
                                src={require('../../../static/image/icon/01fast_food_icon_5.png')} text='外卖'/></Link>
                            <Link to='/search/01hot_pot'><CategoryItem
                                src={require('../../../static/image/icon/01hot_pot_icon_6.png')} text='火锅'/></Link>
                            <Link to='/search/01beautiful'><CategoryItem
                                src={require('../../../static/image/icon/01beautiful_icon_7.png')} text='丽人'/></Link>
                            <Link to='/search/01travel'><CategoryItem
                                src={require('../../../static/image/icon/01travel_icon_8.png')} text='度假出行'/></Link>
                            <Link to='/search/01massage'><CategoryItem
                                src={require('../../../static/image/icon/01massage_icon_9.png')} text='足疗按摩'/></Link>
                            <Link to='/search/01around'><CategoryItem
                                src={require('../../../static/image/icon/01around_travel_icon_10png.png')} text='周边游'/></Link>
                        </ul>

                    </div>
                    <div>
                        <ul>
                            <Link to='/search/02jingdian'><CategoryItem
                                src={require('../../../static/image/icon/02景点icon_1.png')} text='景点'/></Link>
                            <Link to='/search/02KTV'><CategoryItem
                                src={require('../../../static/image/icon/02KTVicon_2.png')} text='ktv'/></Link>
                            <Link to='/search/02gouwu'><CategoryItem
                                src={require('../../../static/image/icon/02购物icon_3.png')} text='购物'/></Link>
                            <Link to='/search/02shenghuo'><CategoryItem
                                src={require('../../../static/image/icon/02生活服务icon_4.png')} text='生活服务'/></Link>
                            <Link to='/search/02yundong'><CategoryItem
                                src={require('../../../static/image/icon/02运动健身icon_5.png')} text='健身'/></Link>
                            <Link to='/search/02meifa'><CategoryItem
                                src={require('../../../static/image/icon/02美发icon_6.png')} text='美发'/></Link>
                            <Link to='/search/02qinzi'><CategoryItem
                                src={require('../../../static/image/icon/02亲子icon_7.png')} text='亲子'/></Link>
                            <Link to='/search/02xiaochi'><CategoryItem
                                src={require('../../../static/image/icon/02小吃快餐icon_8.png')} text='小吃快餐'/></Link>
                            <Link to='/search/02zizhu'><CategoryItem
                                src={require('../../../static/image/icon/02自助餐icon_9.png')} text='自助餐'/></Link>
                            <Link to='/search/02jiuba'><CategoryItem
                                src={require('../../../static/image/icon/02酒吧icon_10.png')} text='酒吧'/></Link>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <Link to='/search/03ribencai'><CategoryItem
                                src={require('../../../static/image/icon/03日本菜icon_1.png')} text='日本菜'/></Link>
                            <Link to='/search/03SPA'><CategoryItem
                                src={require('../../../static/image/icon/03SPAicon_2.png')} text='SPA'/></Link>
                            <Link to='/search/03jiehun'><CategoryItem
                                src={require('../../../static/image/icon/03结婚icon_3.png')} text='结婚'/></Link>
                            <Link to='/search/03xuexi'><CategoryItem
                                src={require('../../../static/image/icon/03学习培训icon_4.png')} text='学习培训'/></Link>
                            <Link to='/search/03xican'><CategoryItem
                                src={require('../../../static/image/icon/03西餐icon_5.png')} text='西餐'/></Link>
                            <Link to='/search/03huoche'><CategoryItem
                                src={require('../../../static/image/icon/03火车机票icon_6.png')}
                                text='火车机票'/></Link>
                            <Link to='/search/03shaokao'><CategoryItem
                                src={require('../../../static/image/icon/03烧烤icon_7.png')}
                                text='烧烤'/></Link>
                            <Link to='/search/03jiazhuang'><CategoryItem
                                src={require('../../../static/image/icon/03家装icon_8.png')}
                                text='家装'/></Link>
                            <Link to='/search/03chongwu'><CategoryItem
                                src={require('../../../static/image/icon/03宠物icon_9.png')}
                                text='宠物'/></Link>
                            <Link to='/search/all'><CategoryItem
                                src={require('../../../static/image/icon/03全部分类icon_10.png')}
                                text='全部分类'/></Link>
                        </ul>
                    </div>
                </ReactSwipe>

                <ul className='circle'>
                    <li className={this.state.index === 0 ? "selected" : ''}/>
                    <li className={this.state.index === 1 ? "selected" : ''}/>
                    <li className={this.state.index === 2 ? "selected" : ''}/>
                </ul>
            </div>

        );
    }
}
import React,{Component} from 'react'
import Loaction from './LocationContainer'
import { Carousel } from 'antd-mobile';

import icon1 from 'images/weather_1_e1e40dc.png'
import icon2 from 'images/CgAANVjc1F4EAAAAAAAAAO0Vby0765.png'
import icon3 from 'images/icon_detail_de477fd.png'
import icon4 from 'images/icon_reRecommend_dc544d7.png'

import ichuanyi1 from 'images/xiao-y-bg_211ce7f.png'
import ichuanyi2 from 'images/star-bg_926561a.png'
import ichuanyi3 from 'images/suit-smart-bottom_039c841.png'

import{
    Recommend,
    SwipperItem,
    SwipperBottom,
    NoSame
} from './swipperStyledComponent'

class SwipperContainer extends Component{
    constructor(){
        super()
        this.state={
            cutIndex:0,
            slideIndex:0,
            distance:0,
            data: [],
            imgHeight: 520,
            location:'北京'
        }
        this.recevieLocation=this.recevieLocation.bind(this)
    }
    render(){
        console.log(this.state.slideIndex)
        if(this.state.data){
            return(
                <Recommend>
                    <Loaction
                         receive={this.recevieLocation}
                         currentI={this.state.slideIndex}
                    ></Loaction>
                        <Carousel className="space-carousel"
                            frameOverflow="visible"
                            cellSpacing={10}
                            slideWidth={0.8}
                            selectedIndex={0}
                            autoplay
                            infinite
                            // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                            afterChange={index => this.setState({ slideIndex: index })}
                            >
                            {
                                this.state.data.map((val, index) => (
                                    val?<a
                                        key={index}
                                        href='##'
                                        style={{
                                            display: 'block',
                                            position: 'relative',
                                            top: this.state.slideIndex === index ? -15 : 0,
                                            transform: this.state.slideIndex === index ? 'scale(1)':'scale(.9)',
                                            height: this.state.imgHeight,
                                        }}
                                        >
                                        <SwipperItem
                                            onLoad={() => {
                                                window.dispatchEvent(new Event('resize'));
                                                this.setState({ imgHeight: 'auto' });
                                            }}>
                                                <div style={{width:300,heigth:450}}>
                                                    <img
                                                        src={`https://image3.ichuanyi.cn/${val.suit.image}`}
                                                        alt=""
                                                        style={{ width:'100%',heigth:'100%', verticalAlign: 'top' }}
                                                    />  
                                                </div>                                    
                                                <SwipperBottom>
                                                    <li>
                                                        <span>
                                                            <img style={{width:30,height:30,marginTop:5,
                            marginLeft:5}} src={icon1} alt='' />
                                                        </span>
                                                        <span>{val.temperature} {val.cladIndexText}</span>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <img src={icon2} alt='' />
                                                        </span>
                                                        <span>下载穿衣助手</span>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <img src={icon3} alt='' />  
                                                        </span>
                                                        <span>详情</span>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <img src={icon4} alt='' />
                                                        </span>
                                                        <span>再推荐</span>
                                                    </li>
                                                </SwipperBottom>                           
                                        </SwipperItem>
                                        </a>:<a
                                            key={index}
                                            href='##'
                                            style={{
                                                display: 'block',
                                                position: 'relative',
                                                top: this.state.slideIndex === index ? -15 : 0,
                                                transform: this.state.slideIndex === index ? 'scale(1)':'scale(.9)',
                                                height: this.state.imgHeight,
                                            }}
                                        >
                                            <NoSame>
                                                <div>想知道更多穿搭方案？</div>
                                                <div><img src={ichuanyi1} alt=''/></div>
                                                <div><img src={ichuanyi2} alt=''/></div>
                                                <div><img src={ichuanyi3} alt=''/></div>
                                            </NoSame>
                                        </a>
                            ))}
                        </Carousel>
                </Recommend>
            )
        }
        return null
    }
    async componentDidMount() {
       //默认请求
        let d = new Date()
        let result0 = await fetch('/m.php?method=recommend.get&day=-1&time='+d.getTime())
                        .then(response=>response.json())
        let result1 = await fetch('/m.php?method=recommend.get&day=0&time='+d.getTime())
                        .then(response=>response.json())
        this.setState({
            data:[result0.data,result1.data,'']
        })

      }

      async recevieLocation(v){
        console.log(v)
        this.setState({
            location:v
        })
        //根据时间戳和地点进行数据请求
        let d = new Date()
        let result0 = await fetch('/m.php?method=recommend.get&day=-1&time='+d.getTime()+'&location='+v+'&refresh=1')
                        .then(response=>response.json())
        let result1 = await fetch('/m.php?method=recommend.get&day=0&time='+d.getTime()+'&location='+v+'&refresh=1')
                        .then(response=>response.json())
        this.setState({
            data:[result0.data,result1.data,'']
        })
      }
} 

export default SwipperContainer
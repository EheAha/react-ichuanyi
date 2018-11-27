import React,{Component} from 'react'
import Loaction from './LocationContainer'
import { Carousel, WingBlank } from 'antd-mobile';
import{
    Recommend,
    // SwipperWrap,
    // SwipperBlock,
       SwipperItem,
    // Dot,
    // DotItem
} from './swipperStyledComponent'

class SwipperContainer extends Component{
    constructor(){
        super()
        this.state={
            cutIndex:0,
            distance:0,
            data: ['1', '2', '3'],
            imgHeight: 176
        }
    }
    render(){
        return(
            <Recommend>
                <Loaction></Loaction>
                    <Carousel className="space-carousel"
                        frameOverflow="visible"
                        cellSpacing={10}
                        slideWidth={0.8}
                        autoplay
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => this.setState({ slideIndex: index })}
                        >
                        {this.state.data.map((val, index) => (
                            <a
                            key={val}
                            href="http://www.alipay.com"
                            style={{
                                display: 'block',
                                position: 'relative',
                                top: this.state.slideIndex === index ? -10 : 0,
                                height: this.state.imgHeight,
                                boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.2)',
                            }}
                            >
                            <SwipperItem></SwipperItem>
                            {/* <img
                                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                                }}
                            /> */}
                            </a>
                        ))}
                    </Carousel>
            </Recommend>
        )
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
        }, 100);
      }
} 

export default SwipperContainer
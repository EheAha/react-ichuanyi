import React,{Component,Fragment} from 'react'
import randomString from 'random-string'

import {
    LookWrap,
    WantLook,
    LookScroll,
    LookItem,
    MatchLook,
    Superfluous,
    TypeOf,
    TypeOfItem
} from './styledComponent'

import ShareHeaderContainer from 'more/views/ShareHeaderContainer'

import BScroll from 'better-scroll'

import IsMore from 'images/more-icon-up_e810cb7.png'

class MatchStyle extends Component{
    constructor(){
        super()
        this.state={
            guideTags:{},
            tags:{},
            isShowMore:false,
            currentIndex:0
        }
    }
    render(){
        return(
            <Fragment>
                <ShareHeaderContainer></ShareHeaderContainer>
            <LookWrap ref={el=>{this.Match=el}}>
              <div>
                <WantLook>
                    <span>猜你想看</span>
                    <span></span>
                </WantLook>
                <div ref={div=>this.lookScroll=div} style={{background:'#fff'}}>
                    <LookScroll>
                        {
                            this.state.tags.list && Object.values(this.state.tags.list).map((value,index)=>{
                                return (
                                    <LookItem key={index}>
                                        <img src={`https://image3.ichuanyi.cn/`+`${value.image}`} alt='' />
                                        <span>{value.tagName}</span>
                                    </LookItem>
                                )
                            })
                        }                    
                    </LookScroll>
                </div>
                <WantLook style={{marginTop:'10px'}}>
                    <span>穿搭指南</span>
                    <span></span>
                </WantLook>
                {
                    this.state.guideTags.list && Object.values(this.state.guideTags.list).map((value,index)=>{
                        let count = 0;
                        return(
                            <div key={randomString()}>
                            <MatchLook >
                                <img src={'https://image3.ichuanyi.cn/'+`${value.image}`} alt=''/>
                                <TypeOf>
                                    {
                                        this.state.guideTags.list && Object.values(this.state.guideTags.list[index].tags).map((v,i)=>{
                                            if(count < 5){
                                                count++;
                                                return(
                                                    <TypeOfItem key={i} isHighlight={v.isHighlight}>
                                                        {v.tagName}
                                                    </TypeOfItem>
                                                )
                                            }
                                        })
                                    }
                                    {
                                        Object.keys(this.state.guideTags.list[index].tags).length >= 5 ? 
                                        <li className='isMore' key={randomString()} onClick={()=>{
                                            return this.changeShow(index)}
                                            }>
                                            <img src={IsMore} alt=''/>
                                        </li>:''
                                    }
                                        
                                </TypeOf>
                            </MatchLook>
                            {
                                Object.values(this.state.guideTags.list[index].tags).splice(5).length !== 0 && index === this.state.currentIndex?
                                <Superfluous isShowMore={this.state.isShowMore}>
                                    {
                                        Object.values(this.state.guideTags.list[index].tags).splice(5).map((val,ind)=>{
                                            return(
                                                <span key={ind}>{val.tagName}</span>
                                            )
                                        })
                                        
                                    }  
                                </Superfluous>:''
                            }
                            </div>
                        )
                    })
                } 
              </div>
            </LookWrap>
            </Fragment>
        )
    }

    changeShow(i){
        this.setState({
            isShowMore:!this.state.isShowMore,
            currentIndex:i    
        })
    }

    async componentDidMount(){
        let result = await fetch('/m.php?method=fashion.dressManual&viewUserId=')
                        .then(response=>response.json())
        this.setState({
            guideTags:result.data.guideTags,
            tags:result.data.tags
        }) 
        
        this.lookscroll = new BScroll(this.lookScroll,{
            click:true,
            scrollX:true
        })

        this.match = new BScroll(this.Match,{
            click:true
        })
    }
}

export default MatchStyle
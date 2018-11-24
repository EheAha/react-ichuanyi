import React,{Component,Fragment} from 'react'
import Header from 'common/header/Header'
import {TabBar} from 'common/tabbar/TabBar'
import BScroll from 'better-scroll'
import {
    withRouter
} from 'react-router-dom'

import {
    ScrollWrap,
    MsgBar,
    Banner,
    Title,
    MainList,
    Ellipsis
} from './HomeComponent'

class HomeUi extends Component{
    constructor(){
        super()
        this.state={
            isShow:true,
            homeListData:[],
            total:0,
            page:2
        }
    }
    render(){
        // console.log(9)
        let inSeasonResource = {...this.props.homeData.inSeason}
        let tabbarResource = this.props.homeData.suitTabs
        let homeListResource = this.state.homeListData
        console.log(homeListResource)
        return(
            <Fragment>
                <Header hasList={this.props.hasList}></Header>
                <ScrollWrap ref={el => this.homeList = el}>
                    <div>
                        <MsgBar>
                            <div>当季必备</div>|
                            <div>
                                {
                                    inSeasonResource.tags && Object.values(inSeasonResource.tags).map((value,index)=>{
                                        return(
                                            <span key={index} onClick={()=>{
                                                return this.props.recommend(this.props,value.name)
                                            }}>{value.name}</span>
                                        )
                                    })
                                }
                            </div>
                            <div onClick={()=>{
                                    return this.props.toMore(this.props)
                                }
                            }>
                            更多>
                            </div>
                        </MsgBar>
                        <TabBar tabbarResource={tabbarResource} isShow={this.state.isShow}></TabBar>
                        <Banner>
                            <div>
                                <img src='https://image3.ichuanyi.cn/group3/M00/23/3E/CgAAGlfGo_AEAAAAAAAAALG_R7w784.png' alt=''/>
                            </div>
                            <div>
                                <div>
                                    <img src='https://image3.ichuanyi.cn/group3/M00/23/3E/CgAAGlfGo_kEAAAAAAAAABQNGuE790.png' alt=''/>
                                </div>
                                <div>
                                    <img src='https://image3.ichuanyi.cn/group3/M00/23/3E/CgAAGlfGpAYEAAAAAAAAAHDo7Ks542.png' alt=''/>
                                </div>
                            </div>
                        </Banner>
                        <Title>
                            <span></span>
                            <span>优选美搭</span>
                            <span></span>
                        </Title>
                        <MainList>
                            {
                               homeListResource && homeListResource.map((value,index)=>{
                                    return(
                                        <li key={index}>
                                            <img src={value.image} alt=''/>
                                            <Ellipsis>{value.content || value.username}</Ellipsis>
                                        </li>
                                    )
                                })
                            }
                        </MainList>
                    </div>
                </ScrollWrap>
        </Fragment>
        )
    }
    async componentDidMount(){
        let homeListData = await fetch('/m.php?fromPageId=0&pageSize=20&viewUserId=&method=index.getChoicenessList&page=1')
                            .then(response=>response.json())
        this.setState({
            homeListData:Object.values(homeListData.data.result),
            total:homeListData.data.total
        })
       
        this.homeScroll = new BScroll(this.homeList,{
            click:true,
            probeType:1,
            pullUpLoad:{
                threshold:30
            }
        })
        this.homeScroll.on('pullingUp',async ()=>{
            let count = Math.ceil(this.state.total/20)
           
            if(this.state.page <= count){
                let loadData = await fetch(`/m.php?fromPageId=0&pageSize=20&viewUserId=&method=index.getChoicenessList&page=${this.state.page}`)
                    .then(response=>response.json())
                loadData = Object.values(loadData.data.result)

                //添加上拉加载的数据    
                this.setState(()=>{
                    let obj = [...this.state.homeListData,...loadData]
                    return{
                        homeListData:obj
                    }
                },()=>{
                    this.homeScroll.refresh()
                    let pages = this.state.page

                    this.setState(()=>{
                        return {
                            page:pages+1
                        }
                    })
                    //可以进行下一次刷新了
                    this.homeScroll.finishPullUp()
                })
            }
            if(this.state.page > count){
                alert('到底了')
                this.homeScroll.finishPullUp()
            }
        })
    }
    
}

export default withRouter(HomeUi)
import React,{Component,Fragment} from 'react'
import ShareHeaderContainer from 'more/views/ShareHeaderContainer'
import SinglePageContainer from 'singlePage/views/SinglePageContainer'
import {SelectCeiling} from 'common/select/SelectCeiling'

import search from 'images/search.png'

import BScroll from 'better-scroll'

import {
    ScrollWrap,
    SearchWrap,
    HotSearch
} from './styledComponent'


class Search extends Component{
    constructor(){
        super()
        this.state={
            goods:{},
            isShowList:false,
            inputValue:'',
            listData:{},
            isCelling:false
        }
        this.handleSearch = this.handleSearch.bind(this)
    }
    render(){
        return (
            <Fragment>
                {
                    this.state.isCelling? 
                    <div>
                        <SearchWrap className={this.state.isCelling?'cell':''} style={{marginTop:0}}>
                            <div>
                                <span><img src={search}/></span>
                                <input type='text' 
                                    value={this.state.inputValue}
                                    onChange={this.handleValue.bind(this)}
                                    placeholder='单品搜索'/>
                            </div>
                            <div onClick={
                                this.handleSearch
                            }>搜索</div>
                        </SearchWrap>
                       <SelectCeiling isCelling={this.state.isCelling}></SelectCeiling>
                    </div>
                    :<ShareHeaderContainer></ShareHeaderContainer>    
                }
                <ScrollWrap ref={div=>this.singleScroll=div}>
                    <div>
                    <SearchWrap cell={this.state.isCelling}>
                        <div>
                            <span><img src={search}/></span>
                            <input type='text' 
                                value={this.state.inputValue}
                                onChange={this.handleValue.bind(this)}
                                placeholder='单品搜索'/>
                        </div>
                        <div onClick={
                            ()=>this.handleSearch(this.state.inputValue)
                        }>搜索</div>
                    </SearchWrap>               
                    {
                        this.state.isShowList ?
                        <SinglePageContainer listdata={this.state.listData}></SinglePageContainer>:
                        <HotSearch>
                            <div>热门搜索词</div>
                            <ul>
                                {
                                    Object.values(this.state.goods).map((val,i)=>{
                                        return(
                                            <li key={i} 
                                                onClick={()=>this.handleSearch(val)}
                                                >{val}</li>
                                        )
                                    })
                                }
                            </ul>
                        </HotSearch>
                    }
                </div>
               </ScrollWrap>
            </Fragment>
        )
    }

    async componentDidMount(){
        let result = await fetch('/index.php?method=search.getKeywords')
                    .then(response=>response.json())
        this.setState({
            goods:result.data.goods
        })

        this.single = new BScroll(this.singleScroll,{
            click:true,
            probeType:2
        })

        //监听滚动事件
        let that = this
        that.timer = 0
        that.single.on('scroll',function(){
            if(that.timer === 0){
                setTimeout(()=>{
                    that.timer =0
                    console.log(this.y)
                    if(this.y<=-96){
                        that.setState({
                            isCelling:true
                        })
                    }else{
                        that.setState({
                            isCelling:false
                        })
                    }
                },50)
            }
            that.timer = 1
        })
    }
    
    async handleSearch(v){
            var result = await fetch('/index.php?fromPageId=0&pageSize=20&method=goods.search&sortType=0&keywords[]='+v+'&page=1')
            .then(response=>response.json())
        
        this.setState({
            isShowList:true,
            listData:result.data.goodsList,
            isCelling:false
        })
        this.single.refresh()
    }

    handleValue(e){
        this.setState({
            inputValue:e.target.value
        })
    }
}

export default Search
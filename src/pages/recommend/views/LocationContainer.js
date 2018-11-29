import React,{Component} from 'react'
import {connect} from 'react-redux'

import row from 'images/icon-back_0981eb2.png'
import down from 'images/icon-trangle_6c65d25.png'

import {
    withRouter
} from 'react-router-dom'

import {
    LocWrapper,
    PosTitle,
    PosSelectWrap,
    PosSelectHead,
    PosSelectList,
    PosSelectItem,
    ListSlider
} from './styledComponent'

import {
    getLocationDataAsync
} from '../actionCreators'

const mapState = (state)=>{
    return {
        locationData:state.loc.locationData
    }
}

const mapDispatch = (dispatch)=>{
    return{
        getLocationResouce(){
            dispatch(getLocationDataAsync(dispatch))
        }
    }
}

class Location extends Component{
    constructor(){
        super()
        this.state={
            isPop:false,
            left:false,
            cityArray:[],
            city:localStorage.getItem('city')||'北京',
            requrestData:''
        }
        this.toLocation = this.toLocation.bind(this)
    }
    render(){
        console.log(this.props.currentI)
            return(
                <LocWrapper>
                    <PosTitle>
                        <li onClick={()=>{
                            this.props.history.push('/home')
                        }}>
                            <img src={row} alt=''/> 
                        </li>
                        {
                            this.props.currentI !== 2 ?
                            <li>
                                <span>{this.props.currentI === 0 ?'今天':'明天'}</span>
                                <span onClick={this.toLocation}>
                                    {this.state.city}
                                    <i>
                                        <img src={down} alt='' />
                                    </i>
                                </span>
                            </li>:''
                        }
                        
                    </PosTitle>
                    <PosSelectWrap isPop={this.state.isPop}>
                        {
                            this.state.left?
                            <PosSelectHead>
                                <span onClick={()=>{
                                    this.setState({
                                        left:!this.state.left,
                                    })
                                }}><img src={row} alt=''/></span>
                                <span>请选择你所在的城市</span>
                            </PosSelectHead>:
                            <PosSelectHead>
                                <span onClick={this.toLocation}>X</span>
                                <span>请选择你所在的城市</span>
                            </PosSelectHead>
                        }
                        <div>
                            <PosSelectList>
                                {
                                    this.props.locationData && Object.keys(this.props.locationData).map((value,index)=>{
                                        return(
                                            <PosSelectItem key={index} onClick={()=>{
                                                this.citySelect(value)
                                                this.setState({
                                                    requrestData:value
                                                })
                                                }}>
                                                <span>{value}</span>
                                                <span></span>   
                                            </PosSelectItem>
                                        )
                                    })
                                }                       
                            </PosSelectList>
                        </div>
                        <ListSlider active={this.state.left}>
                            <PosSelectList>
                                {
                                    this.state.cityArray.map((value,index)=>{
                                        return(  
                                            <PosSelectItem key={index} onClick={
                                                ()=>{
                                                    this.city(value)
                                                    let con =  this.state.requrestData + ' ' + value
                                                    this.setState({
                                                        requrestData:con
                                                    })
                                                    //将requrestData传给父组件
                                                    this.props.receive(con)
                                                }
                                            }>
                                                <span>{value}</span>
                                                <span></span>   
                                            </PosSelectItem>
                                        )
                                    })
                                }
                            </PosSelectList>
                        </ListSlider>
                    </PosSelectWrap>
                </LocWrapper>
            )
        }

    toLocation(){
       this.setState({
           isPop:!this.state.isPop
       })
    }

    componentDidMount(){
        this.props.getLocationResouce()
    }

    citySelect(val){
        let cityResource = this.filterCity(val)
        this.setState({
            left:!this.state.left,
            cityArray:[...cityResource]
        })
    }

    city(val){
        this.saveLocal(val)
        this.setState({
            city:localStorage.getItem('city'),
            left:!this.state.left,
            isPop:!this.state.isPop
        })
    }

    saveLocal(val){
        let str;
        if(localStorage.getItem('city')){
            str = JSON.stringify(localStorage.getItem('city'))
        }else{
            str = []
        }

        if(str){
            let flag = false;
            if(str === val){
               return flag = true;
            }
            if(!flag){
                str = val
            }
        }else{
            str = val
        }
        localStorage.setItem('city',str)
    }

    filterCity(val){
        return this.props.locationData[val]
    }

}

export default withRouter(connect(mapState,mapDispatch)(Location))

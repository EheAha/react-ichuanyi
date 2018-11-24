import React,{Component,Fragment} from 'react'
import Header from 'common/header/Header'
import { TabBar } from 'common/tabbar/TabBar.js'
import { connect } from 'react-redux'

import {
    withRouter
} from 'react-router-dom'

import {
    getMoreResourceAsync
} from '../actionCreators'

const mapState = (state)=>{
    return{
        moreData:state.more.moreData
    }
}

const mapDispatch = (dispatch)=>{
    return{
        getMoreResource(){
            dispatch(getMoreResourceAsync(dispatch))
        }
    }
}

class ShareHeaderContainer extends Component{
    constructor(){
        super()
        this.state={
            isShow:false
        }
        this.receiveIsShow=this.receiveIsShow.bind(this)
    }
    render(){
        let tabbarResource = this.props.moreData
        // console.log(this.props)
        return(
            <Fragment>
                <Header receive={this.receiveIsShow} {...this.props}></Header>
                <TabBar 
                    tabbarResource={tabbarResource}    
                    isShow={this.state.isShow}   
                    isMargin = {true}             
                ></TabBar>
            </Fragment>
        )
    }
    componentDidMount(){
        this.props.getMoreResource()
    }
    receiveIsShow(isShow){
        this.setState({
            isShow
        })
    }
}

export default withRouter(connect(mapState,mapDispatch)(ShareHeaderContainer))
import React,{Component} from 'react'
import {
    HeadContainer
} from './styledComponent'

import {
    withRouter
} from 'react-router-dom'

import logo from 'images/ichuanyi-logo_a3dc343.png'
import smallLogo from 'images/small-logo.png'
import cart from 'images/my-shopping-cart-icon.png'


export default withRouter(class Header extends Component{
    constructor(){
        super()
        this.state = {
            isShowTabbar:true
        }
        this.isShowTab = this.isShowTab.bind(this)
    }
    render(props){
        let { location } = this.props
        return(
            <HeadContainer {...this.props}>
                <div onClick={()=>{
                    this.isShowTab()
                    this.props.receive(this.state.isShowTabbar)
                }}>
                    <p></p>
                    <p className='short'></p>
                    <p></p>
                </div>
                <div>
                    {location.state?location.state:(<img src={logo} alt=''/>)}                    
                </div>
                <div>
                    <img src={smallLogo} alt=''/>
                </div>
                <div>
                    <img src={cart} alt=''/>
                </div>
            </HeadContainer>
        )
    }
    isShowTab(){
        let isShow = !this.state.isShowTabbar
        this.setState({
            isShowTabbar:isShow
        })
    }
})

// export {
//     Header
// }
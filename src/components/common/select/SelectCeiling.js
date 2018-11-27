import React,{Component} from 'react'

import {
    SingleHeader,
    SingleHeaderItem
} from './styledComponent'


class SelectCeiling extends Component{
    constructor(){
        super()
        this.state={
            currentIndex:0
        }
    }
    render(){
        return(
            <SingleHeader className={this.props.isCelling?'cell':''}>
                <SingleHeaderItem onClick={()=>{this.changeOrder(0)}} active={this.state.currentIndex === 0}><span>默认</span></SingleHeaderItem>
                <SingleHeaderItem onClick={()=>{this.changeOrder(1)}} active={this.state.currentIndex === 1}><span>销量</span></SingleHeaderItem>
                <SingleHeaderItem onClick={()=>{
                    this.changeOrder(2)
                }} active={this.state.currentIndex === 2}><span>价格↑</span></SingleHeaderItem>
                <SingleHeaderItem onClick={()=>{this.changeOrder(3)}} active={this.state.currentIndex === 3}><span>价格↓</span></SingleHeaderItem>
            </SingleHeader>
        )
    }    

    changeOrder(i){
        this.setState({
            currentIndex:i
        })
    }
}

export{
    SelectCeiling
}
import React,{Component} from 'react'
import {
    withRouter
} from 'react-router-dom'

//用高阶组件withRouter实现
const MyList = withRouter(
    class EnhenceList extends Component{
        render(){
            return(
                <li onClick={this.jump.bind(this)}>
                    {this.props.children}
                </li>
            )
        }
        jump(){
            this.props.history.push(this.props.to)
        }
    }
) 

export {
    MyList
}

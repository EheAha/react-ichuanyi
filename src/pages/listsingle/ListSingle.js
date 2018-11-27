import React,{Component,Fragment} from 'react'

import ShareHeaderContainer from 'more/views/ShareHeaderContainer'

import SinglePage from 'singlePage/views/SinglePageContainer'

import {
    withRouter
} from 'react-router-dom'

import {
    SingleWrap
} from './styledComponent'

class ListSingle extends Component{
    constructor(){
        super()
        this.state={
            listData:{}
        }
    }
    render(){
        console.log(this.props.location.state)
        return(
            <Fragment>
                <ShareHeaderContainer></ShareHeaderContainer>
                <SingleWrap>
                    <SinglePage listdata={this.state.listData}></SinglePage>
                </SingleWrap>
            </Fragment>
        )
    }
    async componentDidMount(){
        let sort = this.props.location.state
        let result = await fetch('/m.php?fromPageId=0&pageSize=20&method=goods.getListByTag&sort=0&tag='+sort+'&page=1')
                        .then(response=>response.json())
        console.log(result)
        this.setState({
            listData:result.data.list
        })
    }
}

export default withRouter(ListSingle)
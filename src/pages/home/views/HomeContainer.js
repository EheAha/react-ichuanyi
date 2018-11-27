import React,{Component,Fragment} from 'react'
import { connect } from 'react-redux'
import HomeUi from './HomeUi'
import { getHomeResourceAsync } from '../actionCreators'

const homeDataGetter = (data) => {
    return data ? data : {}
}

const mapState = (state)=>{
    return{
        homeData : homeDataGetter(state.home.homeData)
    }
}

const mapDispatch = (dispatch)=>{
    return{
        getHomeResource(){
            dispatch(getHomeResourceAsync(dispatch))
        }
    }
}

class HomeContainer extends Component{
    constructor(){
        super()
        this.state={
            hasList:true
        }
        this.recommend.bind(this)
    }
    render(){
        return(
            <Fragment>
                <HomeUi 
                    hasList={this.state.hasList} 
                    recommend={this.recommend}
                    toMore={this.toMore}
                    {...this.props}
                ></HomeUi>
            </Fragment>
        )
    }
    recommend(props,text){ 
        console.log(text)
        props.history.push('/singlePage',text)
    }
    toMore(props){ 
        props.history.push('/more')
    }
    componentDidMount(){
        this.props.getHomeResource()
    }
}

export default connect(mapState,mapDispatch)(HomeContainer)
import React, { Component, Fragment } from 'react'
import ShareHeaderContainer from './ShareHeaderContainer'
import { connect } from 'react-redux'

import { getMuneResourceAsync } from '../actionCreators'

import BScroll from 'better-scroll'

import {
    SingleTitle,
    NavContentWrap,
    LeftNavMune,
    NavItem,
    RightContent
} from './styledComponent'

const muneDataGetter = (data) => {
    return data ? data : {}
}

const mapState = (state) => {
    return {
        muneData: muneDataGetter(state.more.muneData)
    }
}

const mapDispatch = (dispatch) => {
    return {
        getMuneResource() {
            dispatch(getMuneResourceAsync(dispatch))
        }
    }
}

class More extends Component {
    constructor() {
        super()
        this.state = {
            curIndex: 0,
            navContent:{}
        }
    }
    render() {
        let muneResource = this.props.muneData
        if (muneResource[0]) {
            return (
                <Fragment>
                    <ShareHeaderContainer></ShareHeaderContainer>
                    <SingleTitle>单品</SingleTitle>
                    <NavContentWrap>
                        <LeftNavMune>
                            <div>
                                {
                                    Object.values(muneResource).map((value, index) => {
                                        return (
                                            <NavItem
                                                key={index}
                                                isActive={this.state.curIndex === index}
                                                onTouchStart={(e) => this.handleNavLight(index, e, value)}
                                            >
                                                <span>{value.name}</span>
                                            </NavItem>
                                        )
                                    })}
                            </div>
                        </LeftNavMune>
                        <RightContent ref={el => this.navListScroll=el}>
                            <div>
                                {
                                    Object.values(this.state.navContent).map((value,index)=>{
                                        return(
                                            <div key={index}>
                                                <img src={`https://image3.ichuanyi.cn/`+`${value.pic}`} alt='' />
                                                <span>{value.name}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </RightContent>
                    </NavContentWrap>
                </Fragment>
            )
        }
        return null
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            navContent:nextProps.muneData[Object.keys(nextProps.muneData)[0]].tags.fixedTags
        })
    }

    componentDidMount() {
        this.props.getMuneResource()
        //this.navlist = new BScroll(this.navListScroll, {click: true})
    }
    componentDidUpdate(){
        this.navlist = new BScroll(this.navListScroll, {click: true})
    }
    handleNavLight(i, e, v) {
        //当前高亮
        this.setState({
            curIndex: i
        })

        //显示菜单内容
        this.setState({
            navContent: this.filterNavList(v)
        })
    }

    filterNavList(v){
        return v.tags.fixedTags
    }
}

export default connect(mapState, mapDispatch)(More)
import React,{Component,Fragment} from 'react'

import {SelectCeiling} from 'common/select/SelectCeiling'

import {
    SingleList,
    SingleListItem,
    Ellipsis
} from './styledComponent'

class SinglePage extends Component{
    render(){
        // console.log(this.props.listdata)
        return(
            <Fragment>
                <SelectCeiling></SelectCeiling>
                <SingleList>
                    {
                        this.props.listdata && Object.values(this.props.listdata).map((val,i)=>{
                            return(
                                <SingleListItem key={i}>
                                    <img src={'https://image3.ichuanyi.cn/'+`${val.image}`} alt='' />
                                    <div>
                                        <Ellipsis>{val.name}</Ellipsis>
                                        <p>￥{val.price}</p>
                                    </div>
                                </SingleListItem>
                            )
                        })
                    }                   
                </SingleList>
            </Fragment>
        )
    }
}

export default SinglePage
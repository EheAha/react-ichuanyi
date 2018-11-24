import React,{Component} from 'react'
import {MyList} from 'high/withRouter'

import {
    TabBarContainer
} from './styledComponent'


class TabBar extends Component{
    render(){
        let tabbarResource = this.props && {...this.props.tabbarResource} 
        //此时tabbarResource存在，但是tabbarResource[0]不一定存在，所以一定要做判断               
        if(tabbarResource['0'] && this.props.isShow){
            return(
                <TabBarContainer {...this.props}> 
                    <MyList to={this.filterRoute1(tabbarResource[0])}>
                        <img src={'https://image3.ichuanyi.cn/'+this.filterImg(tabbarResource[0])} alt=''/>
                        <span>{this.filterText(tabbarResource[0])}</span>
                    </MyList>
                    <MyList to='/tomorrow'>
                        <img src={'https://image3.ichuanyi.cn/'+this.filterImg(tabbarResource[1])} alt=''/>
                        <span>{this.filterText(tabbarResource[1])}</span>
                    </MyList>
                    <MyList to='/matchTest'>
                        <img src={'https://image3.ichuanyi.cn/'+this.filterImg(tabbarResource[2])} alt=''/>
                        <span>{this.filterText(tabbarResource[2])}</span>
                    </MyList>
                    <MyList to={this.filterRoute2(tabbarResource[0])}>
                        <img src={'https://image3.ichuanyi.cn/'+this.filterImg(tabbarResource[3])} alt=''/>
                        <span>{this.filterText(tabbarResource[3])}</span>
                    </MyList>
                </TabBarContainer>
            )
        }           
        //不存在时，要返回null，防止报其他的错误。
        return null
    }
    filterImg (val) {
        return val.image!==undefined?val.image:val.icon
    }
    filterText (val) {
        return val.name!==undefined?val.name:val.text
    }
    filterRoute1(val){
        return  val.name === undefined?'/home':'/matchStyle'
    }
    filterRoute2(val){
        return  val.name !== undefined?'/search':'/matchStyle'
    }
}

export{
    TabBar
}


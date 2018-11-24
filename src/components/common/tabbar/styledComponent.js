import styled from 'styled-components'
import border from 'styled/border'


const TabBarContainer = border({
    component:styled.ul`
        width:100%;
        height:.7rem;
        background:#fff;
        display:flex;
        /* margin-top:${props=>
            props.isMargin?'.44rem':0
        } */
        position:${props=>
            props.isMargin?'absolute!important':''
        }
        z-index:${props=>
            props.isMargin?100:0
        }
        >li{
            flex:1;
            height:100%;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            img{
                width:.42rem;
                height:.42rem;
            }
            span{
                color:rgb(72, 74, 73);
            }
        }
    `,
    color:'#eee'
    }
)


export{
    TabBarContainer
}
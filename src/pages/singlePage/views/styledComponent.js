import styled from 'styled-components'
import ellipsis from 'styled/ellipsis'
 
const SingleList = styled.ul`
        width:100%;
        background:#fff;
        margin-top:.04rem;
        display:flex;
        flex-wrap:wrap;
        >li:nth-child(even){
            margin-left:2%;
        }
`
const SingleListItem = styled.li`
        position:relative;
        font-size:0;
        width:49%;
        padding-bottom:80%;
        display:flex;
        flex-direction:column;
        /* margin-top:.04rem; */
        >img{
            position:absolute;
            width:100%;
            height:85%;
        }
        >div{
            position:absolute;
            bottom: 0;
            z-index:999;
            width:100%;
            padding:.04rem;
            >p:nth-child(2){
                height:.2rem;
                line-height:.2rem;
                width:100%;
                font-size:.14rem;
                font-weight:600;
            }
        }
`

const Ellipsis = ellipsis({
    component:styled.p`
        height:.3rem;
        line-height:.4rem;
        font-size:.14rem;
    `,
    lineClamp: 1
})


export{
    SingleList,
    SingleListItem,
    Ellipsis
}
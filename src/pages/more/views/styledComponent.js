import styled from 'styled-components'

const SingleTitle = styled.div`
    width:100%;
    height:.4rem;
    line-height:.4rem;
    font-size:26px;
    color:#333;
    margin-top:.5rem;
    background:#fff;
    text-align:center;
`

const NavContentWrap = styled.div`
    width:100%;
    height:100%;
    background:#fff;
    display:flex;
    margin-top:.08rem;
    flex:1;
    >div{
        overflow:hidden;
        height:100%;
    }
`

const LeftNavMune = styled.div`
    width:25%;
    border-right:1px solid #eee;
    display:flex;
    flex-direction:column;
    >div{
        width:100%;
        height:100%;
    }
`
const NavItem = styled.div`
    width:100%;
    height:.3rem;
    margin-top:.15rem;
    display:flex;
    >span{
        width:100%;
        height:.3rem;
        font-size:.16rem;
        line-height:.3rem;
        text-align:center;
        color:${props=>props.isActive?'#d075ea':'#877f81'};
        border-right:${props=>props.isActive?'3px solid #d075ea':'none'};
    }
`
const RightContent = styled.div`
    width:75%;
    padding:.08rem 0 0 .08rem;
    >div{
        width:100%;
        /* height:100%; */
        display:flex;
        flex-wrap:wrap;
        >div{
            width:33.333%;
            height:.99rem;
            padding:0 .13rem .09rem 0;
            display:flex;
            flex-direction:column;
            >img{
                width:.77rem;
                height:.77rem;
            }
            >span{
                color:#877f81;
                font-size:.14rem;
                text-align:center;
            }
        }
    }
`

export{
    SingleTitle,
    NavContentWrap,
    LeftNavMune,
    NavItem,
    RightContent
}
import styled from 'styled-components'
import ellipsis from 'styled/ellipsis'

const ScrollWrap = styled.div`
    width:100%;
    height:100%;
`

const MsgBar = styled.div`
    width:100%;
    height:.38rem;
    background:#fff;
    margin-top:.5rem;
    display:flex;
    line-height:.38rem;
    text-align:center;
    color:#666;
    >div:nth-child(1){
        width:.82rem;
        height:100%;
    }
    >div:nth-child(2){
        flex:1;
        height:100%;
        display:flex;
        justify-content:space-around;
        >span{
            margin-top:.1rem;
            padding: 0 .08rem;
            height:.22rem;
            background:#f5f5f5;
            color:#666;
            line-height:.22rem;
            font-size:.12rem;
            transform:scale(.9);
            border-radius:20px;
        }
    }
    >div:nth-child(3){
        font-size:.12rem;
        transform:scale(.9);
        padding-right:.12rem;
        padding-top:.03rem;
        color:#8a5899;
    }
`
const Banner = styled.div`
    width:100%;
    height:1.54rem;
    margin:.16rem 0;
    display:flex;
    >div:nth-child(1){
        width:1.365rem;
        height:100%;
        margin-right:.01rem;
        img{
            width:1.365rem;
            height:100%;
        }
    }
    
    >div:nth-child(2){
        display:flex;
        flex-direction:column;
        flex:1;
        height:100%;
        justify-content:space-between;
        >div{
            width:100%;
            height:50%;
            img{
                width:100%;
                height:.77rem;
            }
        }
        >div:nth-child(1){
            margin-bottom:.01rem;
        }
    }
`

const Title = styled.div`
    width:100%;
    height:.44rem;
    background:#fff;
    display:flex;
    justify-content:center;
    >span:nth-child(1),>span:nth-child(3){
        width:.4rem;
        height:.01rem;
        border:1px solid #979797;
        margin-top:.2rem;
    }
    >span:nth-child(2){
        padding:0 .2rem;
        line-height:.44rem;
        color:#333;
        font-size:.14rem;
    }
`

const MainList = styled.ul`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    background:#fff;
    >li:nth-child(even){
        padding-left:2%;
    }
    >li{
        position:relative;
        font-size:0;
        width:49%;
        /* height:2.75rem; */
        padding-bottom:100%;
        display:flex;
        flex-direction:column;

        >img{
            position:absolute;
            width:100%;
            height:85%;
        }
    }
`
const Ellipsis = ellipsis({
    component:styled.p`
        position:absolute;
        bottom: 0;
        z-index:999;
        width:100%;
        /* height:10%; */
        height:.56rem;
        line-height:.36rem;
        padding:.08rem 0 .15rem 0;
        font-size:.16rem;
        padding-left:.08rem;
    `,
    lineClamp: 1
})

export{
    ScrollWrap,
    MsgBar,
    Banner,
    Title,
    MainList,
    Ellipsis
}
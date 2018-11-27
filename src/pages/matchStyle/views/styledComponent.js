import styled from 'styled-components'

const LookWrap = styled.div`
    width:100%;
    height:100%;
`

const WantLook = styled.div`
    width:100%;
    height:.7rem;
    padding:.3rem 0 .15rem 0;
    background:#fff;
    margin-top:.44rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    font-size:.14rem;
    color:#333;
    line-height:.25rem;
    >span:nth-child(2){
        width:.25rem;
        height:.02rem;
        border:1px solid #8a5899;
    }
`

const LookScroll = styled.ul`
    width:max-content;
    height:.35rem;
    background:#fff;
    padding-left:.2rem;
    /* margin-bottom:10px; */
`

const LookItem = styled.li`
    width:.9rem;
    height:.32rem;
    position:relative;
    overflow:hidden;
    margin-right:.2rem;
    float:left;
    >img{
        width:100%;
        /* height:100%; */
    }
    >span{
        width:.81rem;
        height:.2rem;
        line-height:.2rem;
        text-align:center;
        color:#fff;
        font-weight:600;
        position:absolute;
        top:.06rem;
        left:.04rem;
    }
`

const MatchLook = styled.div`
    width:100%;
    height:1.2rem;
    background:#fff;
    position:relative;
    >img{
        width:100%;
    }
`

const Superfluous=styled.div`
    width:100%;
    height:.35rem;
    background:#fff;
    line-height:.35rem;
    padding:0 .2rem;
    display:${props=>props.isShowMore?'block':'none'};
    color:${props=>props.isHighlight?'#8a5899':'#333'}
    >span{
        margin-right:.4rem;
    }
`

const TypeOf = styled.ul`
    width:2.43rem;
    height:.86rem;
    position:absolute;
    top:.18rem;
    right:0;
    .isMore{
        width:.65rem;
        height:.34rem;
        position:absolute;
        top:.42rem;
        left:1.56rem;
        >img{
            width:.18rem;
            height:.18rem;
            margin-top:.08rem;
            margin-left:.23rem;
        }
    }
`

const TypeOfItem = styled.li`
    float:left;
    width:.66rem;
    height:.34rem;
    background:rgba(255,255,255,.1);
    font-size:.12rem;
    transform:scale(.98);
    line-height:.34rem;
    border:1px solid #fff;
    text-align:center;
    margin:0 .11rem .08rem 0;
    color:${props=>props.isHighlight?'#8a5899':'#333'}
`

export {
    LookWrap,
    WantLook,
    LookScroll,
    LookItem,
    MatchLook,
    Superfluous,
    TypeOf,
    TypeOfItem
}
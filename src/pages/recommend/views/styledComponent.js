import styled from 'styled-components'

const LocWrapper = styled.div`
    width:100%;
    /* height:100%; */
    position:relative;
`

const PosTitle = styled.ul`
    width:100%;
    height:.5rem;
    padding-top:.05rem;
    background:#fff;
    display:flex;
    >li:nth-child(1){
        width:35%;
        height:100%;
        padding-left:4%;
       >img{
            width:.3rem;
            height:.08rem;
            margin-top:.15rem;
       }
    }
    >li:nth-child(2){
        width:65%;
        height:100%;
        display:flex;
        >span{
            width:.32rem;
            height:100%;
            line-height:.45rem;
            text-align:center;
            color:#666;
            margin-right:.16rem;
            font-size:.16rem;
        }
        >span:nth-child(2){
            width:auto;
            display:flex;
            >i{
                width:.1rem;
                height:.06rem;
                padding-left:.06rem;
                >img{
                    width:.1rem;
                    height:.06rem;
                }
            }
        }
    }
`

const PosSelectWrap = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:#fff;
    z-index:222;
    display:${props=>props.isPop?'block':'none'};
    >div:nth-child(2){
        width:100%;
        height:100%;
        overflow-y:scroll;
    }
`

const PosSelectHead = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:.4rem;
    background:#fff;
    display:flex;
    z-index:222;
    >span{
        line-height:.4rem;
        height:.4rem;
        font-size:.16rem;
        font-weight:500;
        color:#666;
    }
    >span:nth-child(1){
        width:25%;
        padding-left:6%;
        >img{
            width:.3rem;
            height:.08rem;
       }
    }
    >span:nth-child(2){
        width:75%;
        padding-left:7%;
    }
`

const PosSelectList = styled.ul`
    width:100%;
    background:#fff;
    border-top:1px solid #eee;
    margin-top:.4rem;
`

const PosSelectItem = styled.li`
    width:100%;
    height:.5rem;
    line-height:.5rem;
    padding:0 .2rem 0 .14rem;
    display:flex;
    justify-content:space-between;
    font-size:.15rem;
    color:#333;
    border-bottom:1px solid #eee;
    >span:nth-child(2){
        width:.19rem;
        background:url('https://ydcdn4.ichuanyi.cn/media/m/image/page/tomorrow_recommend/module/address_list/img/icon-arrow_b76a7c2.png?__sprite') center center no-repeat;
        background-size:.1rem .17rem;
    }
`
const ListSlider = styled.div`
    width:100%;
    height:100%;
    background:#fff;
    position:absolute;
    left:${props=>props.active?0:'100%'};
    top:0;
    z-index:200;
    transition:all 500ms ease;
`

export {
    LocWrapper,
    PosTitle,
    PosSelectWrap,
    PosSelectHead,
    PosSelectList,
    PosSelectItem,
    ListSlider
}
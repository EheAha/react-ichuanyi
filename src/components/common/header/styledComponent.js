import styled from 'styled-components'

const HeadContainer = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:.5rem;
    background:#fff;
    display:flex;
    z-index:100;
    font-size:18px;
    color:#333;
    text-align:center;
    >div:nth-child(1){
        width:.36rem;
        height:.46rem;
        padding-top:.16rem;
        padding-left:.16rem;
        opacity:${ props => 
            props.hasList ? 0 : 1
        };
        >p{
            width:.2rem;
            height:.01rem;
            border-bottom:1px solid #999;
            border-radius:.04rem;
        }
        >.short{
            margin:.07rem 0;
            width:.13rem
        }
    }
    >div:nth-child(2){
        width:.95rem;
        height:.3rem;
        margin:.1rem 10% .1rem 28%;
        line-height:.3rem;
        >img{
            width:100%;
            height:100%;
        }
    }
    >div:nth-child(3){
        width:.22rem;
        height:.22rem;
        margin:.14rem 5% .14rem 5%;
        >img{
            width:100%;
            height:100%;
            border:1px solid #fff;
            border-radius:50%;
        }
    }
    >div:nth-child(4){
        width:.23rem;
        height:.2rem;
        margin:.15rem 0;
        >img{
            width:100%;
            height:100%;
        }
    }
`

export {
    HeadContainer
}
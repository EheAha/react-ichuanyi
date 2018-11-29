import styled from 'styled-components'

const Recommend = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    background:#fff;    
    position:relative;
    .space-carousel{
        position:absolute;
        top:.1rem;
        height:520px!important;
        margin-top:.25rem!important;

        .slider-decorator-0{
            bottom:-.4rem!important;
        }
    }
    
`

const SwipperItem = styled.div`
    margin-top:1%;
    width:100%;
    height:100%;
    background:#fff;
    box-shadow:5px 5px 5px 5px #eee;
    border-radius:4px;
`

const SwipperBottom = styled.ul`
    width:100%;
    flex:1;
    display:flex;
    justify-content:space-around;
    background:#fff;
    border:1px solid #eee;
    >li{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        >span:nth-child(1){
            width:.4rem;
            height:.4rem;
            >img{
                margin-top:.1rem;
                margin-left:.1rem;
                width:.2rem;
                height:.2rem;
            }
        }
        >span:nth-child(2){
            font-size:.12rem;
            color:#333;
        }
    }
`

const NoSame = styled.div`
    margin-top:1%;
    width:100%;
    height:5.1rem;
    background:#fff;
    box-shadow:5px 5px 5px 5px #e3e3e3;
    border-radius:4px;
    position:relative;
    >div:nth-child(1){
        width:100%;
        height:.35rem;
        padding-top:.75rem;
        line-height:.35rem; 
        font-size:.26rem;
        text-align:center;
        color:#474747;
    }
    >div:nth-child(2){
        width:100%;
        height:1.78rem;
        padding:.6rem .25rem .18rem;
        >img{
            width:100%;
            height:100%;
        }
    }
    >div:nth-child(3){
        width:100%;
        height:1.75rem;
        padding:.35rem .25rem .37rem;
        >img{
            width:100%;
            height:100%;
        }
    }
    >div:nth-child(4){
        position:absolute;
        bottom:0;
        left:0;
        width:100%;
        height:.52rem;
        >img{
            width:100%;
            height:100%;
        }
    }
`

export {
    Recommend,
    SwipperItem,
    SwipperBottom,
    NoSame
}
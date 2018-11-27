import styled from 'styled-components'

const ScrollWrap = styled.div`
    width:100%;
    height:100%;
`

const SearchWrap = styled.div`
    width:100%;
    height:.38rem;
    background:#fff;
    margin-top:.5rem;
    display:flex;
    padding:0 .12rem;
    &.cell{
        position:fixed;
        top:0;
        left:0;
        z-index:400;
    }
    >div:nth-child(1){
        width:85%;
        height:.25rem;
        margin-top:.06rem;
        border-radius:20px;
        background:#f5f5f5;
        padding:0 .07rem;
        >span{
            width:.19rem;
            height:.17rem;
            >img{
                width:.19rem;
                height:.17rem;
            }
        }
        >input{
            border:0;
            width:90%;
            height:100%;
            background:#f5f5f5;  
            padding-left:.04rem; 
        }
    }
    >div:nth-child(2){
        width:15%;
        line-height:.38rem;
        text-align:center;
        color:#8a5899
    }
`

const HotSearch = styled.div`
    width:100%;
    height:1.28rem;
    padding:.1rem .1rem 0;
    margin-top:.08rem;
    background:#fff;
    color:#333;
    font-size:.12rem;
    >div{
        width:100%;
        height:.16rem;
        line-height:.16rem;
        margin-bottom:.1rem;
    }
    >ul{
        width:100%;
        >li{
            float:left;
            width:1.04rem;
            height:.26rem;
            border:1px solid #eee;
            border-radius:20px;
            margin:0 .1rem .04rem 0;
            line-height:.26rem;
            text-align:center;
        }
    }
`


export{
    ScrollWrap,
    SearchWrap,
    HotSearch
}
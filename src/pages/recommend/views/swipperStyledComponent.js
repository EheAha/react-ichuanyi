import styled from 'styled-components'

const Recommend = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    background:#fff;    
    .space-carousel{
        height:300px!important;
        margin-top:.25rem!important;
    }
`

const SwipperWrap = styled.div`
    width:100%;
    height:100%;
    position:relative;
`

const SwipperBlock = styled.ul`
    position:absolute;
    top:0;
    left:${props=>props.dis?props.dis:0};
    width:300%;
    height:100%;
    background:#f00;
    padding-left:7%;
    transition:all .3s;
`

const SwipperItem = styled.div`
    float:left;
    margin-top:1%;
    width:100%;
    height:100%;
    /* width:3.2rem;
    height:71.96%; */
    background:#ff0;
    /* box-shadow: 5px -5px 5px #eee; */
    /* border:1px solid #000; */
    margin-right:1.5%;
`

const Dot = styled.ul`
    width:100%;
    height:.2rem;
    background:#f0f;
    position:absolute;
    bottom:.8rem;
    display:flex;
    text-align:center;
    padding-left:45%;
    padding-top:.03rem;
`
const DotItem = styled.li`
    width:.12rem;
    height:.12rem;
    margin-right:.06rem;
    border:2px solid #888;
    border-radius:50%;
    text-indent:-999999px;
`

export {
    Recommend,
    SwipperWrap,
    SwipperBlock,
    SwipperItem,
    Dot,
    DotItem
}
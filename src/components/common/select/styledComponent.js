import styled from 'styled-components'

const SingleHeader = styled.ul`
    width:100%;
    height:.44rem;
    background:#fff;
    display:flex;
    color:#333;
    font-size:.12rem;
    &.cell{
        position:fixed;
        top:.38rem;
        left:0;
        z-index:400;
    }
`

const SingleHeaderItem = styled.li`
        flex:1;
        display:flex;
        >span{
            line-height:.44rem;
            margin-left:40%;
            border-bottom:${props=>props.active?'2px solid #8a5899':''};
            color:${props=>props.active?'#8a5899':'#333'};
        }
`

export{
    SingleHeader,
    SingleHeaderItem
}
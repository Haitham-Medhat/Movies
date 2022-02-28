import styled from "styled-components";



export const Div = styled.div`
    background-color: rgba(253, 250, 250, 0.6);
    top: 100%;
    color: black;
    right: 0;
    left :0;
    bottom: -100%;
    width: 100%;
    transition: top .2s ease-in;  
`;
export const DivHover = styled.div`
    &:hover{
        & Div{
            top: 0;
            bottom: 0;
        }
    }
`

export const UL = styled.ul`
    display : flex ;
    list-style: none;
    font-size:16px
    background-color: #1a1a36;
    padding : 5px 15px;
    justify-content: center;
`

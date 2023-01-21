import styled from "styled-components";

export const Navigator = styled.nav`
    font-size: 1.3rem;
    display: flex;
    flex-direction: ${props => props.vertical ? "column" : "row"};
    justify-content: space-evenly;
    width: 30%;

    a{
        text-decoration: none;
        color: #F2F2F2;
        transition: 0.3s;
        padding: ${props => props.vertical ? "1rem 0" : "0"};
        
        &:hover{
            color: #6B98F2;
        }
    }
`
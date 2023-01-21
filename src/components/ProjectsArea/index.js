import styled from "styled-components";

export const ProjectsArea = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`
export const ArowButton = styled.button`
    display: ${props => props.off ? "none" : "block"};
    background-color: transparent;
    color: #F2F2F2;
    font-size: 3rem;
    border: none;
    padding: 0;
    
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        color: #6B98F2;
    }
`

export const Carousel = styled.div`
    display: flex;
    align-items: flex-start;
    width: 62rem;
    overflow: hidden;
    scroll-behavior: smooth;
    
    .project-content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

        width: 62rem;
        padding: 0 5rem;

        .grid-img{
            display: grid;
            grid-template-areas: 
                "img1 img1 img2"
                "img1 img1 img3";
            column-gap: 0.5rem;
            row-gap: 5px;
            align-content: center;
            width: 62rem;
            border-radius: 15px;
            
            .img1 {
                width: 41rem;
                background-color: azure;
                grid-area: img1;
                border-radius: 15px;
            }

            .img2 {
                width: 20rem;
                background-color: tomato;
                grid-area: img2;
                border-radius: 15px;
            }

            .img3 {
                width:20rem;
                background-color: #6B98F2;
                grid-area: img3;
                border-radius: 15px;
            }
        }

        a {
            background-color: #F2F2F2;
            color: #0D0D0D;
            text-decoration: none;
            font-size: 1rem;
            padding: 0.2rem 2rem;
            margin-top: 1rem;

            transition: 0.5s;

            &:hover {
                box-shadow: inset #6B98F2 20rem 0;
            }
        }
    }
`
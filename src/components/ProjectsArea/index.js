import styled from "styled-components";

export const ProjectsArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    min-height: 70vh;

    .project-content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
        height: 100%;
        max-width: 62rem;
        padding: 0 0rem;

        .grid-img{
            display: grid;
            grid-template-areas: 
                "img1 img1 img2"
                "img1 img1 img3";
            column-gap: 0.5rem;
            row-gap: 5px;
            align-content: center;
            width: 100%;
            max-width: 62rem;
            margin: 0 2.2rem;
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
            @media(max-width: 980px){
                display: flex;
                flex-direction: column;
                align-items: center;
                .img1 {
                    width: 18rem;
                    grid-area: img1;
                    border-radius: 15px;
                }
                .img2 {
                    width: 18rem;
                    grid-area: img2;
                    border-radius: 15px;
                }
                .img3 {
                    width:18rem;
                    grid-area: img3;
                    border-radius: 15px;
                }
            }
        }

        .project-details {
            width: 40vw;
            min-height: 40vh;

            p {
                margin-bottom: 1rem;
            }

            @media(max-width: 980px){
                width: 100%;
                height: 100%;
                padding: 0;
                margin: 0;
            }
        }
    }
`

export const ButtonLink = styled.a`
    background-color: #F2F2F2;
    color: #0D0D0D;

    font-weight: 700;
    text-decoration: none;
    padding: 0.3rem 2rem;
    transition: 0.4s;

    &:hover, &:focus {
        box-shadow: inset 450px 0 0 0 #6B98F2;
    }
`


export const ArowButton = styled.button`
    display:  block;
    background-color: transparent;
    color: #F2F2F2;
    font-size: 3rem;
    border: none;
    padding: 0;

    position: absolute;
    right: ${props => props.right ? "2%" : ''};
    left: ${props => props.left ? "2%" : ''};

    
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        color: #6B98F2;
    }
`

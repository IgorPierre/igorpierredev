import styled from "styled-components";

export const Section = styled.section`
    background-color: ${props=> props.primary ? "#0D0D0D" : "#262626"};
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    width: 100%;
    height: 100vh;
    padding: 1rem;
`

export const Title = styled.h2`
    font-size: ${props=> props.primary ? "2.5rem" : "2rem"};
    color: ${props=> props.primary ? "#F2F2F2" : "#6B98F2"};
    font-weight: 700;
    padding: 1rem;
`

export const AboutContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 8rem 12rem;

    .profile-image{
        width: 280px;
        height: auto;
        max-height: 400px;
        border-radius: 50% 10% 50% 50%;
        box-shadow: -15px 15px #6B98F2;
    }

    .info-container {
        padding: 4rem;

        h2 {
            font-size: 3rem;
            font-weight: 900;
            color: #6B98F2;
        }

        div {
            width: 100%;
            height: 200px;
            overflow-y: scroll;
        }
    }
`

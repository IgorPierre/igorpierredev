import styled from "styled-components";

export const Section = styled.section`
    background-color: ${props=> props.primary ? "#272024" : "#2B2C31"};
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;

    width: 100%;
    height: auto;
    min-height: 100vh;
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
    padding: 5rem 12rem;

    .profile-image{
        width: 40%;
        max-width: 280px;
        height: auto;
        max-height: 400px;
        border-radius: 50% 10% 50% 50%;
        box-shadow: -15px 15px #6B98F2;
    }

    .info-container {
        width: 70%;
        padding: 4rem;

        h2 {
            font-size: 3rem;
            font-weight: 900;
            color: #6B98F2;
            padding: 1rem 0;
        }

        div {
            width: 100%;
            height: 200px;
            overflow-y: scroll;
        }
    }

    @media(max-width: 980px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;

        .info-container {
            width: 100%;
        }
    }
`

import styled from "styled-components";

export const LightBlock = styled.div`
    padding: 80px 0;
`;

export const AboutBox = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    min-height: 60vh;
    

    > div {
        /* background-color: ${({ theme }) => theme.dark_bg}; */
        padding: 20px;
        width: 50%;
        border-radius: 10px;
        h3 {
            font-size: 25px;
        }
        p {
            font-size: 18px;
            text-align: justify;
        }
    }

    > img {
        transition: 0.3s ease;
        height: 500px;
        transform: rotate(-90deg) scale(2.5) translateY(10%);
    }

    @media only screen and (max-width: 1280px) {
        > img {
            height: 500px;
            transform: rotate(-90deg) scale(2) translateY(10%);
        }
    }
    @media only screen and (max-width: 1020px) {
        flex-direction: column;
        > div {
            width: 100%;
        }
        > img {
            transition: 0.3s ease;
            height: 500px;
            transform: rotate(-90deg) scale(2) translateY(20%);
        }
    }
    @media only screen and (max-width: 630px) {
   
           > img {
            transition: 0.3s ease;
            height: 300px;
            transform: rotate(-90deg) scale(2) translateY(20%);
        }
    }
`;

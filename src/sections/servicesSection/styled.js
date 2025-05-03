import styled from "styled-components";

export const DarkBlock = styled.div`
    background-color: ${({ theme }) => theme.dark_bg};
    padding: 80px 0;
`;

export const BlockList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px 5%;
    padding: 0 5% 30px;
    @media only screen and (max-width:1280px) {
        padding: 0 0 30px;
        grid-gap: 40px 20px;
    }
    @media only screen and (max-width:860px) {
        grid-template-columns: 1fr;
    }
    > div {
        background: ${({ theme }) => theme.bg};
        padding: 1.5rem;
        transition: 0.5s;
        border-radius: 10px;
        position: relative;
        z-index: 1;
        overflow: hidden; // to keep the glow inside
        
        h3{
            text-align: center;
            font-size: 20px;
        }
        ul {
            display: flex;
            flex-direction: column;
            gap: 10px;
            padding-left: 30px;
            li{
                line-height: 20px
            }
        }
    }
`;


export const IconsList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 10px;
    color: #ff4d4f;
`;



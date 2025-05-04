import styled from "styled-components";

export const LightBlock = styled.div`
    padding: 80px 0;
    background-color: ${({ theme }) => theme.dark_bg};
`;

export const ContactBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`;

export const SubText = styled.p`
    text-align: center;
    font-size: 18;
    max-width: 400px;
    margin: 0 auto 30px;
`;

export const ContactCard = styled.div`
    background-color: ${({ theme }) => theme.bg};

    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    padding: 30px;
    border-radius: 12px;
    width: 100%;
    max-width: 400px;
    h3 {
        font-size: 22px;
        margin-bottom: 15px;
    }
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
            margin-bottom: 12px;
            line-height: 1.5;
            font-size: 16px;
        }
    }
`;

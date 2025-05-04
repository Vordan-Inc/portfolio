import styled from "styled-components";

export const LightBlock = styled.div`
    padding: 80px 0;
`;

export const Note = styled.p`
    font-size: 1rem;
    color: ${({ theme }) => theme.secondary};
    font-style: italic;
    margin-top: 20px;
    line-height: 1.6;
    text-align: center;
    max-width: 500px;
    margin: 0px auto 30px;
`;

export const PortfolioEntry = styled.div`
    /* background-color: ${({ theme }) => theme.dark_bg}; */
    box-shadow: 0 5px 10px ${({ theme }) => theme.block_shadow};
    padding: 24px;
    border-left: 5px solid #ff4d4f;
    border-radius: 10px;
    margin-bottom: 2rem;
    width: 80%;
    margin: 0 auto 30px;

    &:hover {
        box-shadow: 0 10px 15px ${({ theme }) => theme.block_shadow};
    }

    h3 {
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
    }

    .project-duration {
        display: block;
        font-size: 0.9rem;
        color: ${({ theme }) => theme.duration_text};
        margin-bottom: 1rem;
    }

    ul {
        list-style: disc;
        padding-left: 1.25rem;

        li {
            margin-bottom: 0.5rem;
        }
    }

    .project-label {
        display: inline-block;
        border:3px solid #faad14;
        padding: 4px 8px;
        border-radius: 6px;
        font-size: 0.85rem;
        font-weight: 600;
        margin-top: 10px;
    }

    @media only screen and (max-width: 860px) {
        width: 100%;
    }
`;

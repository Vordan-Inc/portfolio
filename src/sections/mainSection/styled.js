import styled from "styled-components";

export const MainSectionBlock = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    padding-top: 150px;
    overflow: hidden;
    transition: 0.3s ease;
    div {
        &:nth-child(1) {
            width: 40%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 10px;
            padding-bottom: 10vh;
        }

        &:nth-child(2) {
            width: 40%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .banner {
        width: 100%;
    }

    h1 {
        margin: 10px 0;
        padding: 0;
        font-size: 40px;
    }
    p {
        font-weight: bold;
        font-size: 22px;
        margin: 10px 0;
        line-height: 1.5;
    }

    .btn {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px 30px;
        background: #f5222d;
        border-radius: 40px;
        color: white;
        font-size: 22px;
        text-transform: capitalize;
        cursor: pointer;
        font-weight: 600;
        text-decoration: none;

        &:hover {
            background: #cf1322;
            text-decoration: none;
            color: white;
        }
    }
    @media only screen and (max-width: 1400px) {
        h1 {
            font-size: 35px;
        }
        p {
            font-size: 18px;
        }
        div {
            &:nth-child(1) {
                width: 40%;
            }

            &:nth-child(2) {
                width: 50%;
            }
        }
    }
    @media only screen and (max-width: 1280px) {
        h1 {
            font-size: 30px;
        }
        p {
            font-size: 16px;
        }
        .btn {
            font-size: 18px;
        }
    }
    @media only screen and (max-width: 1030px) {
        h1 {
            font-size: 35px;
        }
        p {
            font-size: 18px;
        }
        .btn {
            font-size: 18px;
        }
        position: relative;
        align-items: flex-start;
        div {
            &:nth-child(1) {
                margin-top: 5dvh;
                padding: 10px 15px 30px;
                width: 70%;
                position: relative;
                z-index: 1;
                background: ${({ theme }) =>
                    theme.mode !== "light"
                        ? "rgba(255, 255, 255, 0.05)"
                        : "rgba(255, 255, 255, 0.5)"};
                border: 1px solid
                    ${({ theme }) =>
                        theme.mode !== "light"
                            ? "rgba(255, 255, 255, 0.1)"
                            : "rgba(255, 255, 255, 0.3)"};
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                border-radius: 16px;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            }

            &:nth-child(2) {
                height: 100%;
                position: absolute;
                bottom: -10%;
                display: flex;
                justify-content: center;
                align-items: flex-end;
                width: 100%;
                opacity: 0.7;
            }
        }
    }
    @media only screen and (max-width: 780px) {
        h1 {
            font-size: 25px;
        }
        div {
            &:nth-child(1) {
                margin-top: 0;
                width: 100%;
            }
            &:nth-child(2) {
                bottom: 0;
            }
        }

    }
`;

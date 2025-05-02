import styled from 'styled-components'


export const MainMenu = styled.div`
    width: 100dvw;
    height: 70px;
    background: #eee;
    padding: 5px 15px;
    display: flex;
    justify-content: space-between;
`;

export const LogoBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    span {
        font-family: sans-serif;
        font-size:30px;
        font-weight: bold;
        color: #a8071a;
    }
    img {
        width: 60px
    }
`;
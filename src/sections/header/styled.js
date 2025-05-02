import styled from "styled-components";

export const Menu = styled.div`
    width: 100%;
    display: block;
    border-bottom: 1px solid ${({ theme }) => theme.border};
    position: fixed;
`;

export const MainMenu = styled.div`
    height: 56px;
    background: ${({ theme }) => theme.body};
    padding: 5px 20px;
    display: flex;
    justify-content: space-between;
`;

export const LogoBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const SecondaryMenu = styled.div`
    background: ${({ theme }) => theme.body};
    padding: ${({ scrolled }) => (scrolled ? "0 20px": "5px 20px")};
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    overflow: hidden;
    height: ${({ scrolled }) => (scrolled ? "0": "40px")};
    > * {
        transform: translateY( ${({ scrolled }) => (scrolled ? "-200%" : 0)});
    }
`;

export const Location = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
    color: ${({ theme }) => theme.secondary};
    span {
        font-size: 13px;
        font-weight: 400;
    }
`;

export const Nav = styled.div`
    display: flex;
    gap: 10px;
`;

export const Toggler = styled.div`
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.secondary};
    padding: 3px 6px;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    font-size: 13px;
    border-radius: 12px;
    box-shadow: ${({ theme }) => theme.box_shadow};

    &:hover {
        box-shadow: ${({ theme }) => theme.box_shadow_hover};
        color: ${({ theme }) => theme.text};
    }
`;

import styled from "styled-components";

export const Menu = styled.div`
    width: 100%;
    display: block;
    border-bottom: 1px solid ${({ theme }) => theme.border};
    position: fixed;
    z-index: 100;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none;
    background: ${({ theme }) => theme.bg};
    box-shadow: ${({ theme }) => theme.box_shadow};
`;

export const SecondaryMenu = styled.div`
    padding: ${({ scrolled }) => (scrolled ? "0" : "5px 0")};
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    /* overflow: hidden; */
    font-size: 14px;
    height: ${({ scrolled }) => (scrolled ? "0" : "40px")};
    > * {
        transform: translateY(${({ scrolled }) => (scrolled ? "-200%" : 0)});
    }
`;

export const Location = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;
    color: ${({ theme }) => theme.secondary};
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
    border-radius: 12px;
    box-shadow: ${({ theme }) => theme.box_shadow};

    &:hover {
        box-shadow: ${({ theme }) => theme.box_shadow_hover};
        color: ${({ theme }) => theme.text};
    }

    > img {
        width: 20px;
        height: 20px;
    }
`;
export const MainMenu = styled.div`
    height: 75px;
    padding: 5px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div {
        gap: 50px;
    }
    > .logo-box {
        gap: 5px;
        transition: 0.3s ease;
    }
`;

export const LogoBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 150px;
    }
`;

export const MenuLink = styled.a`
    color: ${({ theme }) => theme.text};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    text-transform: capitalize;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    text-decoration: none;

    span {
        position: absolute;
        left: 0;
        display: block;
        width: 100%;
        height: 3px;
        background: #f5222d;
        bottom: 5px;
        transform: translateX(-101%);
        transition: transform 0.3s ease;
    }
    &:hover {
        span {
            transform: translateX(0);
        }
    }
`;

export const MenuButton = styled.div`
    padding: 10px 20px;
    background: #f5222d;
    border-radius: 20px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: fit-content;
    font-size: 18px;
    text-transform: capitalize;
    cursor: pointer;
    font-weight: 600;

    &:hover {
        background: #cf1322;
    }
`;

export const Burger = styled.div`
    /* display: none; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border-radius: 10px;
    padding: 10px;
    background: ${({ isOpen, theme }) => isOpen ? theme.button_bg_hover : "transparent"};


    &:hover {
        background: ${({ theme }) => theme.button_bg_hover};
    }
`;

export const DropDownMenu = styled.div`
    position: absolute;
    top: calc(100% + 5px);
    left: 10px;
    min-width: 220px;
    background: ${({ theme }) => theme.bg};
    padding: 10px;
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.box_shadow};
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px !important;
    transform: translateX(${({ isOpen }) => (!isOpen ? "-200%" : "0")});

    a {
        padding: 10px 10px;
        display: block;
        border-radius: 10px;
        &:hover {
            background: ${({ theme }) => theme.button_bg_hover};
        }
    }
`;

import styled from "styled-components";

export const ContainerBox = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;

    @media only screen and (min-width: 1600px) {
        width: 1600px;
    }

    @media only screen and (max-width: 690px) {
        padding: 0 10px;
    }
`;

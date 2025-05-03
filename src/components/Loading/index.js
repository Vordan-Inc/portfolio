import React from "react";
import { RingWrapper, Ring } from "./styled";
import { Riple } from "react-loading-indicators";

const LoadingComponent = () => {
    return (
        <RingWrapper>
            <Riple color="#f5222d" size="large" />
        </RingWrapper>
    );
};

export default LoadingComponent;

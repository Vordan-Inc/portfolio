import React from "react";
import { RingWrapper, Ring } from "./styled";

const LoadingComponent = () => {
    return (
        <RingWrapper>
            <Ring />
            <Ring />
            <Ring />
            <Ring />
        </RingWrapper>
    );
};

export default LoadingComponent;

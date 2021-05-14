import React from "react";
import styled from "styled-components";
import HeroText from "./HeroText";

const HeroContainer = styled.div`
    padding: 50px 40px;
`;

export default function Hero() {
    return (
        <HeroContainer>
            <HeroText />
        </HeroContainer>
    );
};
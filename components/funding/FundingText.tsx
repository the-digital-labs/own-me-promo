import React from "react";
import styled from "styled-components";

const FundingTextContainer = styled.div`
    font-family: Poppins, Open Sans;
    font-size: 30px;
    padding: 20px 10%;

    @media screen and (max-width: 600px) {
        font-size: 20px;
        padding: 20px 5%;
    }
`;

const BoldText = styled.span`
    font-family: Yeseva One, Open Sans;
    display: block;

    @media screen and (max-width: 600px) {
        font-size: 25px;
        margin-bottom: 10px;
    }
`;

export default function FundingText({ boldText, mainText }) {
    return (
        <FundingTextContainer>
            <BoldText>{boldText}</BoldText>
            {mainText}
        </FundingTextContainer>
    );
};
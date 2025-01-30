import { Button, Image, Typography } from "antd";
import styled from "styled-components";

const { Title } = Typography;

export const TheaterSummaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ShowtimesContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-height: 500px;
    width: 300px;
    flex-grow: 1;
    background-color: #fff;
    padding: 16px;
    border-left: 1px solid var(--primary-color-lighter);
`;


export const ShowtimesTitle = styled(Title)`
    font-family: Avenir;
    font-weight: 900 !important;
    font-size: 1.5rem !important;
    color: var(--primary-color-light) !important;
    margin-bottom: calc(var(--app-gap) * 4) !important;

    span {
        color: var(--secondary-color);
    }
`;

export const TheaterSummary = styled.dl`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px dashed var(--primary-color-lighter);

    &:last-of-type {
        border-bottom: none;
    }
`;

export const TheaterDetails = styled.dt`
    display: flex;
    max-width: 60%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex-grow: 1;
`;

export const TheaterName = styled.h3`
    font-family: Avenir;
    font-weight: 900;
    font-size: 0.9rem;
    color: var(--primary-color-light);
    margin: 0.5rem 0;
`;

export const TheaterLocation = styled.p`
    font-family: Avenir;
    font-weight: 300;
    font-size: 0.8rem;
    color: --primary-color-lighter;
    margin-bottom: 0.5rem;
`;

export const TheaterLocationImage = styled(Image)`
    max-width: 100px;
    object-fit: cover;
    border-radius: var(--border-radius);
`;

export const ShowtimesList = styled.dd`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const TheaterShowtime = styled(Button)`
    font-family: Avenir;
    font-weight: 700;
    font-size: 0.8rem;
    color: --primary-color;
    border-bottom: 1px solid --primary-color-light;

    &.ant-btn-dangerous {
        cursor: not-allowed;
    }

    &[data-availibility="0"]::after {
        content: 'Sold Out';
        font-size: 0.6rem;
        color: var(--remove-color);
    }

    &:not([data-availibility="0"])::after {
        content: attr(data-availibility) ' seats';
        font-size: 0.6rem;
        color: var(--primary-color-lighter);
    }
`;




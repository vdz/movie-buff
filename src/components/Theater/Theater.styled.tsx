import { Button, Image } from "antd";
import styled from "styled-components";

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
    color: var(--secondary-color);
    margin: 0.5rem 0 1.5rem;
`;

export const TheaterLocation = styled.p`
    font-family: Avenir;
    font-weight: 300;
    font-size: 0.8rem;
    color: --primary-color-lighter;
`;

export const TheaterLocationImage = styled(Image)`
    max-width: 100px;
    border: 3px solid var(--background-color);
    object-fit: cover;
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
`;




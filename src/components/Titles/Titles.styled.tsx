import { Button, Card, Rate } from "antd";
import styled from "styled-components";

export const TitlesContainer = styled.section`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const Title = styled.h1`
    margin: 2rem 0;
    font-size: 2rem;
    font-weight: 1000;
`;

export const NoResults = styled.h3`
    display: flex;
    flex-grow: 1;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const TitleList = styled.div`
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    gap: 1rem;
    max-width: 80%;
`;

export const TitleResultContainer = styled(Card)`
    margin: 1.5rem;
    width: 240px;
    
    .ant-card-cover {
        height: 355.66px;
    }
`;

export const Rating = styled(Rate)`
    margin: 0.5rem 0;
`;

export const Duration = styled.p`
    font-size: 0.8rem;
    margin: 0.5rem 0;
    color: var(--primary-color-lighter);
`;

export const ReleaseYear = styled.p`
    font-size: 0.8rem;
    margin: 0.5rem 0;
    color: var(--primary-color-lighter);
`;

export const Genres = styled.p`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin: 0.5rem 0 1.5rem;
`;

export const Genre = styled(Button)`
    font-size: 0.7rem;

    &:last-of-type {
        border-right: none;
    }
`;

export const TitleInfoContainer = styled.section`
    display: flex;
    flex-grow: 1;
    flex-direction: row;
    gap: 1rem;

    align-items: flex-start;
    justify-content: flex-start;
`;

export const TitleInfoHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const TitleInfoTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
`;
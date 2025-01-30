import { Layout, Select } from "antd";
import { styled } from "styled-components";

export const HeaderStyled = styled(Layout.Header)`
    background-color: transparent;
    flex-grow: 1;
    //height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: calc(var(--app-gap) * 2);
    border-bottom: 1px solid var(--primary-color-lighter);
`;

export const SiteTitle = styled.h1`
    color: var(--primary-color);
    font-weight: 900;
    letter-spacing: 0.03em;
    text-align: left;
    margin-left: 0;
    padding-left: 0;

    a:hover::before {
        content: '🏠';
        position: absolute;
        left: var(--app-gap);
        filter: opacity(0.8);
    }
`;

export const CurrentMovie = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--app-gap);
    color: var(--primary-color-lighter);
`;

export const MovieSelector = styled(Select)`
    width: 200px;
    border: 1px solid var(--primary-color-lighter);
    border-radius: var(--border-radius);

    .ant-select-selection-item {
        font-weight: 900;
        color: var(--secondary-color);
    }
    .ant-select-arrow {
        color: var(--secondary-color);
    }
`;
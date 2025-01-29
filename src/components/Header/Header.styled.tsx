import { Breadcrumb, Layout } from "antd";
import { styled } from "styled-components";

export const HeaderStyled = styled(Layout.Header)`
    background-color: var(--accent-color);
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: calc(var(--app-gap) * 2);
`;

export const SiteTitle = styled.h1`
    color: var(--secondary-color);
    font-weight: 900;
    letter-spacing: 0.03em;
`;

export const Breadcrumbs = styled(Breadcrumb)`
    flex-grow: 1;
    display: flex;
    justify-content: flex-start;
`;

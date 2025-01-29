import { styled } from "styled-components";
import { Layout } from "antd";

export const PageWrapper = styled(Layout)`
    width: 100%;    
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ContentWrapper = styled(Layout.Content)`
    flex-grow: 1;
    position: relative;
`;


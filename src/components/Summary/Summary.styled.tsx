import styled from "styled-components";
import { Button } from "antd";

export const SummaryContainer = styled.main`
    background-color: var(--color-background);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 900;
    margin: 1rem auto 0;
    color: var(--primary-color-light);
`;

export const SummaryList = styled.dl`
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items:0.8rem;
    padding: 1rem 1.5rem;
    background-color: #fff;
    border: 1px solid var(--primary-color-lighter);
    border-radius: var(--border-radius);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    margin: 1rem auto;
    text-align: left;
    gap: 0.3rem;
    
    dt {
        font-weight: 100;
        color: var(--color-primary-light);
    }

    dd {
        font-weight: 700;
        color: var(--color-primary);

        &.actions {
            display: flex;
            flex-direction: row;
            font-weight: 400;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.7rem;
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 1px solid var(--primary-color-lighter);
            
            a {
                color: var(--secondary-color);
                text-decoration: underline;

                &:hover {
                    color: var(--secondary-color);
                    text-decoration: none;
                }
            }
        }
    }
`;

export const ExternalLink = styled.a`
    color: var(--color-primary-light);
    text-decoration: none;
    margin-right: 1rem;
`;
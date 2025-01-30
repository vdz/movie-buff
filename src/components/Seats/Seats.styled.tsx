import { Button, Descriptions, Modal, Select, Space } from "antd";
import { styled } from "styled-components";

const SEAT_SIZE = 24;

export const SeatsContainer = styled(Modal)`
    min-width: 90vw;
    font-family: var(--font-family);

    h1.ant-typography {
        font-weight: 900;
        text-align: center;
        color: var(--primary-color-light);
    }
    
    .ant-typography {
        font-family: var(--font-family);
    }
`;

export const SeatsHeader = styled(Space)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    font-size: 0.8rem;
    border-bottom: 1px solid var(--primary-color-lighter);
    padding-bottom: calc(var(--app-gap) * 4);
    margin-bottom: calc(var(--app-gap) * 2);
`;

export const BookButton = styled(Button)`
    width: 100%;
`;

export const ShowtimesInfo = styled(Descriptions)``;

export const BookingInfo = styled(Descriptions)``;

export const Info = styled(Descriptions.Item)`
    min-width: 100px;
    font-size: 1rem;
    font-weight: 700;
`;

export const SeatSelectorContainer = styled.div`
    max-height: 300px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: var(--app-gap);
    padding: 0 calc(var(--app-gap) * 4);
`;

export const SeatSelectorRow = styled(Space)`
    gap: calc(var(--app-gap) / 2);
    justify-content: space-between;

    &::before, &::after {
        content: attr(data-row);
        color: var(--primary-color-lighter);
        font-size: 0.6rem;
        margin-top: -5px;
        text-indent: -20px;
        color: var(--primary-color-lighter);
    }

    &::after {
        text-indent: 20px;
    }

    &:hover {
        &::before, &::after {
            color: var(--secondary-color);
            font-weight: 900;
        }
    }
`;

export const RowNumber = styled(Button)`
    width: ${SEAT_SIZE}px;
    height: ${SEAT_SIZE}px;
    padding: 0;
    margin: 0;
    font-size: 0.6rem;
    color: var(--primary-color-lighter);
`;

export const SeatSelectorSeat = styled(Button)`
    width: ${SEAT_SIZE}px;
    height: ${SEAT_SIZE}px;
    padding: 0;
    margin: 0;
    font-size: 0.6rem;
    border-radius: var(--border-radius);
    border: 2px solid transparent;

    &::after {
        content: '⊕';
        color: var(--primary-color-lighter);
        font-size: 1rem;
        line-height: 20px;
        text-align: center;
    }

    &:hover {
        border-color: var(--secondary-color);

        &::after {
            color: var(--secondary-color);
        }
    }


    &.selected {
        background-color: var(--secondary-color);
        border-color: var(--secondary-color);
        color: #fff;

        &::after {
            content: '☑︎';
        }

        &:hover {
            border-color: transparent;
            background-color: var(--remove-color) !important;

            &::after {
                content: '×';
            }
        }
    }

    &.occupied {
        background-color: var(--primary-color-light);
        color: #fff;
        border-color: var(--primary-color-light);
        &:hover {
            border-color: var(--remove-color);
        }
    }

`;

export const BookingList = styled(Select)`
    align-self: center;
`;
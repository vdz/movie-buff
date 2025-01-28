import { Modal } from "antd";
import { styled } from "styled-components";

export const SeatsContainer = styled(Modal)`
    width: 80%;
    min-width: 400px;

    & .ant-modal-body {
        max-height: 400px;
        overflow: auto;
    }
    /* position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */
`;

export const SeatsHeader = styled.header`
    font-size: 2rem;
`;
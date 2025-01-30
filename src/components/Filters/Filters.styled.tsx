import { Select } from 'antd';
import styled from 'styled-components';

export const FiltersContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: calc(var(--app-gap) * 2);
    margin-bottom: 1.5rem;
`;

export const Explanation = styled.div`
    font-size: 1rem;
    color: var(--primary-color-lighter);
`;

export const GenreSelect = styled(Select)`
    width: 300px;
`;

export const RatingSelect = styled(Select)`
    min-width: 300px;
`;
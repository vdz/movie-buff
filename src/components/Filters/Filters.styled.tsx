import { Select } from 'antd';
import styled from 'styled-components';

export const FiltersContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: calc(var(--app-gap) * 4);
`;

export const GenreSelect = styled(Select)`
    width: 300px;
`;

export const RatingSelect = styled(Select)`
    min-width: 300px;
`;
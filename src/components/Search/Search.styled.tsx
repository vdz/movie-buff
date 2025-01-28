import { DebouncedInput } from '../Input/DebouncedInput';
import styled from 'styled-components';

export const SearchInput = styled(DebouncedInput)`
    width: 100%;
    max-width: 80%;
    padding: 1rem;
    height: 4rem;
    border: 3px solid var(--background-color);
    color: var(--primary-color);
    outline: none;
    font-size: 1.5rem;
    font-weight: bold;
    margin: 1rem 0;

    &::placeholder {
        color: var(--primary-color-lighter);
        font-weight: 100;
    }
`;

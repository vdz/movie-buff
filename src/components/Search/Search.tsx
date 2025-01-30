import { titleSetSearchTerm } from "@/store/titles/titles.actions";
import { SearchInput } from "./Search.styled";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useCallback } from "react";

export function Search() {
    const dispatch = useDispatch();
    const term = useSelector((state: RootState) => state.titles.search);

    // Memoized callback to prevent unnecessary re-renders
    // BUT(!)
    // I prefer just adding functions AFTER the return statement for easier reading,
    // and they are memoized by React Compiler anyway (since v19)
    // You'll see examples of it in the codebase.
    const handleSearchChange = useCallback(
        (value: string | number) => dispatch(titleSetSearchTerm(String(value))),
        [dispatch]
    );

    return (
        <SearchInput 
            onChange={handleSearchChange}
            debounce={300}
            placeholder="Search for a movie by title"
            type="text"
            value={term ?? ''}
            aria-label="Search for a movie by title" 
        />
    );
}
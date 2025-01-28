import { Status } from "@/lib/requestStatus";

export type Duration = 'short' | 'medium' | 'long';
export type Genre = 'Action' | 'Adventure' | 'Animation' | 'Comedy' | 'Crime' | 'Documentary' | 'Drama' | 'Family' | 'Fantasy' | 'History' | 'Horror' | 'Music' | 'Mystery' | 'Romance' | 'Science Fiction' | 'Thriller' | 'War' | 'Western';

export interface TitlesState {
    titles: Title[];
    byId: Record<string, Title>;
    filtered: Title[];
    status: Status;
    error: string | null;
    search: string;
    filter: {
        genre: Filter;
        duration: Filter;
        rating: Filter;
    };
}

export interface Filter {
    value: string | number |null;
    order?: 'asc' | 'desc';
}

export interface Title {
    id: string;
    name: string;
    details: string;
    duration: number;
    rating: number;
    genre: Genre[];
    releaseYear: number;
    poster: string;
}


export interface TitlesFetchPayload {
    filters?: Filter[];
    page?: number;
    pageSize?: number;
}

export interface TitlesFetchSuccessPayload {
    titles: Title[];
    byId: Record<string, Title>;
}

export interface TitlesFetchFailurePayload {
    error: string;
}

export interface TitlesFilterSetPayload {
    value: string | number |null;
    order?: 'asc' | 'desc';
}

export interface TitlesFilterResetPayload {
    name: string;
}

export type TitleSetSearchTermPayload = string;

export interface TitlesSetFilteredPayload {
    filtered: Title[];
}

export interface TitlesSetGenrePayload {
    value: string;
    // order?: 'asc' | 'desc'; // for future use for ordering output by filter, also see titles.reducer.ts & titles.api.ts
}
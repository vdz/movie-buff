import { createAction } from "@reduxjs/toolkit";
import { TitleSetSearchTermPayload, TitlesFetchFailurePayload, TitlesFetchPayload, TitlesFetchSuccessPayload, TitlesSetFilteredPayload, TitlesSetGenrePayload, TitlesSetRatingPayload } from "./types";

// The App vocabuary Part: Titles
export const titlesFetch = createAction<TitlesFetchPayload>('titles/fetchTitles');
export const titlesFetchSuccess = createAction<TitlesFetchSuccessPayload>('titles/fetchTitlesSuccess');
export const titlesFetchFailure = createAction<TitlesFetchFailurePayload>('titles/fetchTitlesFailure');
export const titleSetSearchTerm = createAction<TitleSetSearchTermPayload>('titles/setSearchTerm');
export const titlesSetFiltered = createAction<TitlesSetFilteredPayload>('titles/setFiltered');
export const titlesSetGenre = createAction<TitlesSetGenrePayload>('titles/setGenre');
export const titlesSetRating = createAction<TitlesSetRatingPayload>('titles/setRating');
export const titlesFilterResetAll = createAction('titles/filterResetAll');

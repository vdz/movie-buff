import { createAction } from "@reduxjs/toolkit";
import { TitleSetSearchTermPayload, TitlesFetchFailurePayload, TitlesFetchPayload, TitlesFetchSuccessPayload, TitlesFilterResetPayload, TitlesFilterSetPayload, TitlesSetFilteredPayload, TitlesSetGenrePayload } from "./types";

export const titlesFetch = createAction<TitlesFetchPayload>('titles/fetchTitles');
export const titlesFetchSuccess = createAction<TitlesFetchSuccessPayload>('titles/fetchTitlesSuccess');
export const titlesFetchFailure = createAction<TitlesFetchFailurePayload>('titles/fetchTitlesFailure');
export const titleSetSearchTerm = createAction<TitleSetSearchTermPayload>('titles/setSearchTerm');
export const titlesSetFiltered = createAction<TitlesSetFilteredPayload>('titles/setFiltered');
export const titlesSetGenre = createAction<TitlesSetGenrePayload>('titles/setGenre');
export const titlesFilterSet = createAction<TitlesFilterSetPayload>('titles/filterSet');
export const titlesFilterReset = createAction<TitlesFilterResetPayload>('titles/filterReset');
export const titlesFilterResetAll = createAction('titles/filterResetAll');

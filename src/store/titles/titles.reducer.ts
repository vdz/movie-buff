import { createReducer } from "@reduxjs/toolkit";
import { TitlesState } from "@/store/titles/types";
import { titleSetSearchTerm, titlesFetch, titlesFetchFailure, titlesFetchSuccess, titlesFilterReset, titlesFilterSet, titlesSetFiltered, titlesSetGenre } from "@/store/titles/titles.actions";

export const defaultState: TitlesState = {
    titles: [],
    byId: {},
    filtered: [],
    status: 'idle',
    error: null,
    search: '',
    filter: { // key-value map of filters
        genre: {
            value: null,
            // order: 'asc' this can be added later
        },
        duration: {
            value: null,
            // order: 'asc' this can be added later
        },
        rating: {
            value: null,
            // order: 'asc' this can be added later
        },
    },
}

export const reducer = createReducer(defaultState, (builder) => {
    builder.addCase(titlesFetchSuccess, (state, action) => {
        state.titles = action.payload.titles;
        state.byId = action.payload.byId;
        state.filtered = [];
        state.status = 'success';
        state.error = null;
    }).addCase(titlesFetchFailure, (state, action) => {
        state.error = action.payload.error;
    })
    .addCase(titlesFetch, (state) => {
        state.status = 'loading';
    }).addCase(titleSetSearchTerm, (state, action) => {
        state.status = 'loading';
        state.search = action.payload;
    }).addCase(titlesSetFiltered, (state, action) => {
        state.status = 'success';
        state.filtered = action.payload.filtered;
    }).addCase(titlesSetGenre, (state, action) => {
        state.status = 'loading';
        state.filter.genre = action.payload;
    })
    .addCase(titlesFilterReset, (state) => {
        state.status = 'idle';
        state.filtered = [];
        state.search = '';
    })
})
import { createReducer } from "@reduxjs/toolkit";
import { TheatersState } from "./types";
import { theatersFetchSuccess, theatersFetchFailure, theatersFetch } from "./theaters.actions";

// TODO: re-enum statuses
export const defaultState: TheatersState = {
    theaters: [],
    byId: {},
    byShowtimes: {},
    status: 'idle',
    error: null
}

export const reducer = createReducer(defaultState, (builder) => {
    builder.addCase(theatersFetch, (state) => {
        state.status = 'loading';
        state.error = null;
    }).addCase(theatersFetchSuccess, (state, action) => {
        state.theaters = action.payload.theaters;
        state.byId = action.payload.byId;
        state.byShowtimes = action.payload.byShowtimes;
        state.status = 'success';
        state.error = null;
    }).addCase(theatersFetchFailure, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.error;
    })
});
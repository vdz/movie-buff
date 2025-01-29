import { TheatersFetchFailurePayload, UpdateOccupancyPayload } from "./types";

import { createAction } from "@reduxjs/toolkit";
import { TheatersFetchSuccessPayload } from "./types";

export const theatersFetch = createAction('theaters/fetch');
export const theatersFetchSuccess = createAction<TheatersFetchSuccessPayload>('theaters/fetchSuccess');
export const theatersFetchFailure = createAction<TheatersFetchFailurePayload>('theaters/fetchFailure');
export const addOccupiedSeat = createAction<UpdateOccupancyPayload>('theaters/addOccupiedSeat');
export const removeOccupiedSeat = createAction<UpdateOccupancyPayload>('theaters/removeOccupiedSeat');

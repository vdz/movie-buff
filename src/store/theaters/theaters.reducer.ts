import { createReducer } from "@reduxjs/toolkit";
import { TheatersState } from "./types";
import { theatersFetchSuccess, theatersFetchFailure, theatersFetch, updateOccupancy, addOccupiedSeat, removeOccupiedSeat } from "./theaters.actions";

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
    }).addCase(addOccupiedSeat, (state, action) => {
        const { showtimeId, seat } = action.payload;
        const showtime = state.byShowtimes[showtimeId];

        if (showtime) {
            showtime.seatsAvailable--;
            
            if (!showtime.occupancy[seat.row]) {
                showtime.occupancy[seat.row] = [];
            }
            showtime.occupancy[seat.row]!.push(seat.seat);
            
            state.byShowtimes[showtimeId] = showtime;

            const showtimeIndex = state.byId[showtime.theaterId].showtimes.findIndex(st => st.id === showtimeId);
            state.byId[showtime.theaterId].showtimes[showtimeIndex] = showtime;
            
            const theatreIndex = state.theaters.findIndex(t => t.id === showtime.theaterId);
            state.theaters[theatreIndex] = state.byId[showtime.theaterId];
        }
    }).addCase(removeOccupiedSeat, (state, action) => {
        const { showtimeId, seat } = action.payload;
        const showtime = state.byShowtimes[showtimeId];
        
        if (showtime) {
            showtime.seatsAvailable++;

            const seatIndex = showtime.occupancy[seat.row]!.findIndex(s => s === seat.seat);
            showtime.occupancy[seat.row]!.splice(seatIndex, 1);

            state.byShowtimes[showtimeId] = showtime;

            const showtimeIndex = state.byId[showtime.theaterId].showtimes.findIndex(st => st.id === showtimeId);
            state.byId[showtime.theaterId].showtimes[showtimeIndex] = showtime;

            const theatreIndex = state.theaters.findIndex(t => t.id === showtime.theaterId);
            state.theaters[theatreIndex] = state.byId[showtime.theaterId];
        }
    })
});

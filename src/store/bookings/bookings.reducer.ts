import { BookingState } from "./types";
import { createReducer } from "@reduxjs/toolkit";
import { addSeat, saveBooking, removeSeat, resetBooking, selectShowtime, selectTitle, selectBooking } from "./bookings.actions";

export const defaultState: BookingState = {
    selectedTitleId: '',
    selectedShowtimeId: '',
    selectedBookingId: '',
    selectedSeats: [],  
    bookings: {},
};

// Simple reducers, **no business logic in them**
export const reducer = createReducer<BookingState>(defaultState, (builder) => {
    builder.addCase(selectTitle, (state, action) => {
        state.selectedTitleId = action.payload.titleId;
    }).addCase(selectShowtime, (state, action) => {
        state.selectedShowtimeId = action.payload.showtimeId;
    }).addCase(addSeat, (state, action) => {
        state.selectedSeats.push(action.payload.seat);
    }).addCase(removeSeat, (state, action) => {
        state.selectedSeats = state.selectedSeats.filter(seat => seat.row !== action.payload.seat.row || seat.seat !== action.payload.seat.seat);
    }).addCase(resetBooking, (state) => {
        state.selectedShowtimeId = '';
        state.selectedSeats = [];
    }).addCase(saveBooking, (state, action) => {
        state.bookings[action.payload.id] = action.payload.booking;
    }).addCase(selectBooking, (state, action) => {
        state.selectedBookingId = action.payload.id;
    })  ;
});

import { createAction } from "@reduxjs/toolkit";
import { AddSeatPayload, SaveBookingPayload, RemoveSeatPayload, SelectShowtimePayload, SelectTitlePayload, SelectBookingPayload } from "./types";


// The App vocabuary Part: Bookings
export const selectTitle = createAction<SelectTitlePayload>('bookings/selectTitle');
export const selectShowtime = createAction<SelectShowtimePayload>('bookings/selectShowtime');
export const addSeat = createAction<AddSeatPayload>('bookings/addSeat');
export const removeSeat = createAction<RemoveSeatPayload>('bookings/removeSeat');
export const resetBooking = createAction('bookings/resetBooking');
export const bookSeats = createAction('bookings/bookSeats');
export const saveBooking = createAction<SaveBookingPayload>('bookings/saveBooking');
export const selectBooking = createAction<SelectBookingPayload>('bookings/selectBooking');
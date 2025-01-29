import { createAction } from "@reduxjs/toolkit";
import { AddSeatPayload, RemoveSeatPayload, SelectShowtimePayload, SelectTitlePayload } from "./types";


export const selectTitle = createAction<SelectTitlePayload>('bookings/selectTitle');
export const selectShowtime = createAction<SelectShowtimePayload>('bookings/selectShowtime');
export const addSeat = createAction<AddSeatPayload>('bookings/addSeat');
export const removeSeat = createAction<RemoveSeatPayload>('bookings/removeSeat');
export const resetBooking = createAction('bookings/resetBooking');
export const bookSeats = createAction('bookings/bookSeats');
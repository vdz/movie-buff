export interface BookingState {
    selectedTitleId: string;
    selectedShowtimeId: string;
    selectedBookingId: string;
    selectedSeats: SeatInfo[];
    bookings: Record<string, Booking>;
}

// just some structure to save all of the current user's bookings
export interface Booking { 
    showtimeId: string;
    seats: SeatInfo[];
    price: number;
    createdAt: string;
    isCovered: boolean;
    isFullfilled: boolean;
}

export interface SeatInfo {
    row: number;
    seat: number;
}

export interface SelectTitlePayload {
    titleId: string;
}

export interface SelectShowtimePayload {
    showtimeId: string;
}

export interface AddSeatPayload {
    seat: SeatInfo;
}

export interface RemoveSeatPayload {
    seat: SeatInfo;
}

export interface BookSeatsPayload {
    showtimeId: string;
    seats: SeatInfo[];
}

export interface SaveBookingPayload {
    id: string;
    booking: Booking;
}

export interface SelectBookingPayload {
    id: string;
}
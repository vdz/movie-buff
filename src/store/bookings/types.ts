export interface BookingState {
    selectedTitleId: string;
    selectedShowtimeId: string;
    selectedSeats: SeatInfo[];
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
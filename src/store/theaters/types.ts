import { Status } from "@/lib/requestStatus";

export interface Occupancy {
    [key: string]: number[] | undefined;
}

export interface Showtime {
    id: string;
    showtime: string;
    seatsAvailable: number;
    occupancy: Occupancy;
    theaterId: string;
    titleId: string;
}

export interface Theater {
    id: string;
    name: string;
    location: string;
    totalSeats: number;
    numberOfRows: number;
    locationImage: string;
    showtimes: Showtime[];
}

export interface TheatersState {
    theaters: Theater[];
    byId: { [key: string]: Theater }; // for O(1) lookup 
    byShowtimes: { [key: string]: Showtime };
    status: Status;
    error: string | null;
}

export interface TheatersFetchSuccessPayload {
    theaters: Theater[];
    byId: { [key: string]: Theater };
    byShowtimes: { [key: string]: Showtime };
}

export interface TheatersFetchFailurePayload {
    error: string;
}
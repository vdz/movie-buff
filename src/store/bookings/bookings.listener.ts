import { GENERIC_TICKET_PRICE } from "@/lib/constants";
import { bookSeats, resetBooking, saveBooking } from "./bookings.actions";
import { generateRandomID } from "@/lib/generateId";
import { BookSeatsPayload } from "./types";
import { selectBooking } from "./bookings.actions";

export const bookingsListener = [
    {
        actionCreator: bookSeats,
        effect: (_: { payload: BookSeatsPayload }, api: any) => {
            const showtimeId = api.getState().bookings.selectedShowtimeId;
            const seats = api.getState().bookings.selectedSeats;
            const newId = generateRandomID();

            const booking = {
                showtimeId,
                seats,
                price: seats.length * GENERIC_TICKET_PRICE,
                createdAt: new Date().toISOString(),
                isCovered: true,
                isFullfilled: false,
            };

            api.dispatch(saveBooking({ id: newId, booking }));
            api.dispatch(resetBooking());
            api.dispatch(selectBooking({ id: newId }));

            // Above is a client side action, 
            // but we need to update the server with the new booking
            // we'll call some async action, **after** we have optimistically 
            // updated client state
            // try {
            //     const response = await saveBooking({ id: newId, booking });
            // } catch (error) {
            //     dispatch(saveBookingFailure({ error: 'Error saving booking' }));
            // }
        }
    }
]
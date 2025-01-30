import { addOccupiedSeat, theatersFetchFailure, theatersFetchSuccess } from "./theaters.actions";
import { Listener } from "../listener";
import { theatersFetch } from "./theaters.actions";
import { getTheaters, formatServerData } from "./theater.api";
import { bookSeats, selectTitle } from "../bookings/bookings.actions";
import { SeatInfo } from "../bookings/types";

export const theatersListener: Listener[] = [
    {
        actionCreator: theatersFetch,
        effect: async (_, { getState, dispatch}) => {
            // we can pass title id with the action, 
            // but we rely on the state and keep actions as simple as possible
            const currentTitleId = getState().bookings.selectedTitleId;
            // in case we want to manage this in our app, 
            // another approach can be that this is handled 
            // on the API level inside `getTheaters` function
            if (!currentTitleId) {
                dispatch(theatersFetchFailure({ error: 'Title ID is required' }));
                return;
            }

            try {
                // theater locations with listings are requested by title id 
                // (and some use data, like location, that is not passed here)
                // fetched location data can be cashed in our in memory state 
                // and/or other storage devices if needed, so we have a growing 
                // offline state for an opimistic data manipulations on client, 
                // and server as a side-effect.
               const result = await getTheaters(currentTitleId);
                dispatch(theatersFetchSuccess(formatServerData(result)));
            } catch (error: unknown) {
                dispatch(theatersFetchFailure({ error: error as string }));
            }
        }
    },
    {
        actionCreator: selectTitle,
        effect: async (_, { dispatch}) => {
            // preemptively populate theaters for the selected title
            // it's a abstracted ask in form of an action, that will trigger
            // a side-effect, that will be handled by the listener to fetch theaters (see above)
            // either from a cached location or otherwise
            dispatch(theatersFetch());
        }
    },
    {
        // In terms of theater availability etc, when `bookSeats` happens 
        // we'd like to update theaters accordingly.
        actionCreator: bookSeats,
        effect: async (_, api: any) => {
            const showtimeId = api.getState().bookings.selectedShowtimeId;
            const seats = api.getState().bookings.selectedSeats;

            // I do it one by one because I wrote it earlier and now saving time
            seats.forEach((seat: SeatInfo) => {
                api.dispatch(addOccupiedSeat({
                    showtimeId,
                    seat
                }));
            });
        }
    }
]
import { addOccupiedSeat, removeOccupiedSeat, theatersFetchFailure, theatersFetchSuccess } from "./theaters.actions";

import { Listener } from "../listener";
import { theatersFetch } from "./theaters.actions";
import { getTheaters, formatServerData } from "./theater.api";
import { addSeat, removeSeat, selectTitle } from "../bookings/bookings.actions";
import { AddSeatPayload, RemoveSeatPayload } from "../bookings/types";

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
            dispatch(theatersFetch());
        }
    },
    // {
    //     actionCreator: addSeat,
    //     effect: async (action : { payload: AddSeatPayload }, { dispatch, getState }) => {
    //         if (!getState().bookings.selectedShowtimeId) return;
    //         dispatch(addOccupiedSeat({
    //             showtimeId: getState().bookings.selectedShowtimeId,
    //             seat: action.payload.seat
    //         }));
    //     }
    // },
    // {
    //     actionCreator: removeSeat,
    //     effect: async (action : { payload: RemoveSeatPayload }, { dispatch, getState }) => {
    //         if (!getState().bookings.selectedShowtimeId) return;

    //         dispatch(removeOccupiedSeat({
    //             showtimeId: getState().bookings.selectedShowtimeId,
    //             seat: action.payload.seat
    //         }));
    //     }
    // }

]
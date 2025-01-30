import { ListenerEffectAPI, TypedStartListening, ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { RootState, AppDispatch } from "./store";
import { createListenerMiddleware } from "@reduxjs/toolkit";
import { titlesListener } from "./titles/titles.listener";
import { theatersListener } from "./theaters/theaters.listener";
import { bookingsListener } from "./bookings/bookings.listener";
const listenerMiddleware = createListenerMiddleware();

export const startAppListening =
  listenerMiddleware.startListening as TypedStartListening<RootState, AppDispatch>;

export interface Listener {
    actionCreator: ActionCreatorWithPayload<any, string>;
    effect: (action: any, listenerApi: ListenerEffectAPI<RootState, AppDispatch>) => void | Promise<void>
}

// Just connect all your listeners here, or disconnect them if needed
const listeners: Listener[][] = [
   titlesListener,
   theatersListener,
   bookingsListener
];

export function initAppListeners() {
    listeners.forEach((listener) => {
        listener.forEach((logic) => {
            startAppListening(logic);
        })
    });
    
    return listenerMiddleware;
}
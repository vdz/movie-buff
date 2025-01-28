import { configureStore } from "@reduxjs/toolkit";
import { initAppListeners } from "./listener";
import { reducer as titlesReducer } from "./titles/titles.reducer";
import { reducer as theatersReducer } from "./theaters/theaters.reducer";
import { reducer as bookingsReducer } from "./bookings/bookings.reducer";
const listenerMiddleware = initAppListeners();

export const store = configureStore({
    reducer: {
        titles: titlesReducer,
        theaters: theatersReducer,
        bookings: bookingsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});


export type GetAppState = typeof store.getState;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<GetAppState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
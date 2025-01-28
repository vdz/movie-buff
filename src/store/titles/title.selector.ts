import { RootState } from '@/store/store';
import { createSelector } from '@reduxjs/toolkit';

export const listingsForFilm = createSelector(
    (state: RootState) => state.listings,
    (state: RootState) => state.theatres,
    (listings, theatres) => listings.map((listing) => {
        return {
            ...listing,
            theatre: theatres.byId[listing.theatreId],
        };
    });
};
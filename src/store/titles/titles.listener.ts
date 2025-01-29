import { Listener } from "@/store/listener";
import { titlesFetch, titlesFetchSuccess, titlesFetchFailure, titleSetSearchTerm, titlesSetFiltered, titlesSetGenre, titlesSetRating } from "./titles.actions";
import { formatServerData, getTitles } from "./titles.api";
import { TitleSetSearchTermPayload, TitlesFetchPayload, Title, TitlesState, Genre } from "./types";
import { selectTitle } from "@/store/bookings/bookings.actions";
import { theatersFetch } from "@/store/theaters/theaters.actions";

export const titlesListener: Listener[]  = [
    {
        actionCreator: titlesFetch,
        effect: async (action: { payload: TitlesFetchPayload}, { dispatch}) => {
            try {
                const result = await getTitles(action.payload);
                dispatch(titlesFetchSuccess(formatServerData(result)));
            } catch (error: unknown) {
                dispatch(titlesFetchFailure({ error: error as string }));
            }
        }
    },
    {
        actionCreator: titleSetSearchTerm,
        effect: async (action: { payload: TitleSetSearchTermPayload}, { getState, dispatch}) => {
            const searchTerm = action.payload;
            if (searchTerm === '') {
                dispatch(titlesSetFiltered({
                    filtered: getState().titles.titles,
                }));
                return;
            }

            let filtered = search(getState().titles.titles, searchTerm);
            filtered = filter(getState().titles);

            dispatch(titlesSetFiltered({filtered}));
        }
    },
    {
        actionCreator: titlesSetGenre,
        effect: async (_, { getState, dispatch}) => {
            const filtered = filter(getState().titles);
            dispatch(titlesSetFiltered({filtered}));
        }
    },
    {
        actionCreator: titlesSetRating,
        effect: async (_, { getState, dispatch}) => {
            const filtered = filter(getState().titles);
            dispatch(titlesSetFiltered({filtered}));
        }
    },
    {
        actionCreator: selectTitle,
        effect: async (_, { dispatch}) => {
            dispatch(theatersFetch());
        }
    }
]

function search(titles: Title[], searchTerm: string): Title[] {
    return titles.filter((title: Title) => {
        return (title.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        title.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
        title.genre.some((genre) => genre.toLowerCase().includes(searchTerm.toLowerCase())) ||
        title.rating.toString().includes(searchTerm) ||
        title.releaseYear.toString().includes(searchTerm)
        );
    });
}

// very basic filtering done not in the most efficient way to lessen the time complexity
function filter(state: TitlesState, filtered?: Title[]): Title[] {
    let result = filtered || state.titles;
    const filter = state.filter;

    if (filter.genre.value) {
        const genres = filter.genre.value;
        result = result.filter((item: Title) => {
            return genres.every((genre) => item.genre.includes(genre as Genre));
        });
    }
    if (filter.rating.value) {
        result = result.filter((item: Title) => item.rating >= Number(filter.rating.value));
    }
    return result;
}
import { TitlesFetchPayload } from "./types";
import titlesMockData from '@/mocks/titles_mock_data.json';

const MOCK_DELAY = 1000;

export const getTitles = async (options: TitlesFetchPayload) => {
    // Query prep and communication with the API will happen here.
    // If we'll have any errors will throw an exeption, to be handled by the listener.
    // For our app will return a mocked response.
    return new Promise((resolve) => {

        const requestQuery = buildTitlesQuery(options);
        // In real app this API query may be used, 
        // (or other methods of communication with the server).
        console.log('↗ Api call: ', requestQuery);

        setTimeout(() => {
            resolve({
                titles: [...titlesMockData]
            })
        }, MOCK_DELAY);
    })
}

// Formating server data into any format that is compatibly with current client's state.
// I place it here as a sort of "driver" for the present here api call. 
// If API wil change, the driver will change with it.
export const formatServerData = (data: any) => {
    return {
        titles: data.titles,
        byId: data.titles.reduce((acc: { [key: string]: any }, title: any) => {
            acc[title.id] = title;
            return acc;
        }, {})
    }
}

// This is just to show how API query will be built for real requests.
// You will be able to see console log with this URL: see `getTitles` above.
const buildTitlesQuery = (options: TitlesFetchPayload) => {
    let query = 'API-SERVER-FOR-ENV/titles/?';

    if (options.page) {
        query += `page=${options.page}&`;
    }
    if (options.pageSize) {
        query += `pageSize=${options.pageSize}&`;
    }
    if (options.filters && options.filters.length > 0) {
        Object.entries(options.filters).forEach(([name, filter]) => {
            query += `${name}=${filter.value}` + (filter.order ? `&filter=${name}-order=${filter.order}&` : '');
        });
    }
    return query;
}
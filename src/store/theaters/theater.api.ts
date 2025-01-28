import theatersMockData from '@/mocks/theaters_mock_data_v2.json';

const MOCK_DELAY = 700;

export function getTheaters(titleId: string) {
    // Query prep and communication with the API will happen here.
    // If we'll have any errors will throw an exeption, to be handled by the listener.
    // For our app will return a mocked response.
    return new Promise((resolve) => {
        console.log('↗ Api call: for theaters for a title with id: ', titleId);
        setTimeout(() => {
            resolve({
                theaters: [...theatersMockData]
            })
        }, MOCK_DELAY);
    })
}

export function formatServerData(data: any) {
    // This mock is closely formatted to client's needs
    // and can be easily adjusted to the actual server response
    const byShowtimes = data.theaters.reduce((acc: any, theater: any) => {
        theater.showtimes.forEach((showtime: any) => {
            acc[showtime.id] = showtime;
        });
        return acc;
    }, {});

    return {
        theaters: data.theaters,
        byId: data.theaters.reduce((acc: any, theater: any) => {
            acc[theater.id] = theater;
            return acc;
        }, {}),
        byShowtimes,
    };
}
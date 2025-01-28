import { createBrowserRouter } from 'react-router-dom';
import { TitlesPage, TitleInfo } from '@/components/Titles';
import { Seats } from './components/Seats/Seats';

    
export const routes = [
    {
        path: '/',
        name: 'titles',
        element: <TitlesPage />,
    },
    {
        path: '/title/:id',
        name: 'titleInfo',
        element: <TitleInfo />,
        children: [
            {
                path: 'seats/:showtimeId',
                name: 'seats',
                element: <Seats />,
            }
        ]
    },
    /*{
        path: '/seats/:listingId',
        element: <Seats />,
    } */
];

export const router = createBrowserRouter(routes);
export type Router = typeof router;


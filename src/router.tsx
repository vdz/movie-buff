import { createBrowserRouter } from 'react-router-dom';
import { Titles, TitleInfo } from '@/components/Titles';
import { Seats } from '@/components/Seats/Seats';
import { MovieBuffPage } from '@/layouts/main/MovieBuffPage';

    
export const routes = [
    {
        path: '/',
        name: 'main',
        element: <MovieBuffPage />,
        children: [
            {
                path: '',
                name: 'titles',
                element: <Titles />,
            },
            {
                path: 'title/:id',
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
        ]
    },
    
    /*{
        path: '/seats/:listingId',
        element: <Seats />,
    } */
];

export const router = createBrowserRouter(routes);
export type Router = typeof router;


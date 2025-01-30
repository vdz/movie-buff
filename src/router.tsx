import { createBrowserRouter } from 'react-router-dom';
import { Titles, TitleInfo } from '@/components/Titles';
import { Seats } from '@/components/Seats/Seats';
import { MovieBuffPage } from '@/layouts/main/MovieBuffPage';
import { Summary } from './components/Summary/Summary';
import { SummaryLoader } from './components/Summary/Summary.Loader';

    
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
            {
                path: 'summary/:id',
                name: 'summary-with-id',
                element: <Summary />,
            },
            {
                path: 'summary',
                name: 'summary',
                element: <SummaryLoader />,
            }
        ]
    },
];

export const router = createBrowserRouter(routes);
export type Router = typeof router;

export function navigate(path: string) {
    console.log('navigate', path);
    router.navigate(path);
}


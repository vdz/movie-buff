import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import Loader from '../Loader/Loader';
import { NoResults, Title, TitleList, TitlesContainer } from './Titles.styled';
import { TitleResult } from './TitleResult';
import { Search } from '@/components/Search/Search';
import { Filters } from '../Filters/Filters';
import { titlesFetch } from '@/store/titles/titles.actions';
import { useManualHydration } from '@/lib/useManualHydration';

export function Titles() {
    const titles = useSelector((state: RootState) => state.titles.titles);
    const filtered = useSelector((state: RootState) => state.titles.filtered);
    const search = useSelector((state: RootState) => state.titles.search);
    const filter = useSelector((state: RootState) => state.titles.filter);
    const isLoading = useSelector((state: RootState) => state.titles.status === 'loading');

    useManualHydration(titlesFetch, (state: RootState) => state.titles.status);

    return (
        <TitlesContainer>
            <Title>Welcome, you movie buff, you!</Title>
            <Search />
            <Filters />
           {showTitles()}
        </TitlesContainer>
    )

    function showTitles() {
        if (isLoading) {
            return <Loader />;
        }
        
        let result = titles;
        if (search || filter.genre.value || filter.rating.value) {
            result = filtered;
        }

        if (result.length === 0) {
            return <NoResults>No titles match your query</NoResults>
        }
        return (
            <TitleList>
                {result.map((title) => (
                    <TitleResult key={title.id} id={title.id} />
                ))}
            </TitleList>
        )
    }
}
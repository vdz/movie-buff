import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import Loader from '../Loader/Loader';
import { NoResults, Title, TitleList, TitlesContainer } from './Titles.styled';
import { TitleResult } from './TitleResult';
import { Search } from '@/components/Search/Search';
import { Filters } from '../Filters/Filters';

export function Titles() {
    const titles = useSelector((state: RootState) => state.titles.titles);
    const filtered = useSelector((state: RootState) => state.titles.filtered);
    const search = useSelector((state: RootState) => state.titles.search);
    const filter = useSelector((state: RootState) => state.titles.filter);
    const isLoading = useSelector((state: RootState) => state.titles.status === 'loading');

    // If you uncomment this, your component will be able to initiate hydration 
    // without knowing any of the implementation detail of the actual hydration.
    // Since we hydrate at the top level, this is not needed.
    // useManualHydration(titlesFetch, (state: RootState) => state.titles.status);

    return (
        <TitlesContainer>
            <Title>Welcome, you movie buff, you!</Title>
            <Search />
            <Filters />
           {showTitles()}
        </TitlesContainer>
    )

// ██████████████████████████████████████████████████████████████████████████
// ███▄░░░▄████▄░░░▄████▄░░░▄████▄░░░▄████▄░░░▄████▄░░░▄████▄░░░▄████▄░░░▄███
// ███▀░░░▀████▀░░░▀████▀░░░▀████▀░░░▀████▀░░░▀████▀░░░▀████▀░░░▀████▀░░░▀███
// ██████████████████████████████████████████████████████████████████████████


    function showTitles() {
        if (isLoading) {
            return <Loader />;
        }
        
        let result = titles;
        if (search || filter.genre.value.length > 0 || filter.rating.value) {
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
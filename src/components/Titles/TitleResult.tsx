import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { Card,  } from 'antd';
import { Duration, Genre, Genres, Rating, ReleaseYear, TitleResultContainer } from './Titles.styled';
import { titlesSetGenre } from '@/store/titles/titles.actions';
import { selectTitle } from '@/store/bookings/bookings.actions';
import { useNavigate } from 'react-router-dom';
import { getHomePath, getTitlePagePath } from '@/lib/paths';
const { Meta } = Card;

export function TitleResult({ id }: { id: string }) {
    const info = useSelector((state: RootState) => state.titles.byId[id]);
    const dispatch = useDispatch();
    const isLoading = (!info);
    const navigate = useNavigate();
    
    return (
        <TitleResultContainer
            loading={isLoading}
            onClick={() => {
                dispatch(selectTitle({ titleId: id }));
                navigate(getTitlePagePath(id));
            }}
            hoverable
            cover={<img alt="example" src={info?.poster} />}>
                {showRating()}
                {showDuration()}
                <ReleaseYear>{info?.releaseYear}</ReleaseYear>
                {showGenres()}
            <Meta title={info?.name} description={info?.details} />
        </TitleResultContainer>
    )

    function showRating() {
        if (!info) return null;
        return <Rating disabled defaultValue={info?.rating} count={10} />;
    }

    function showDuration() {
        if (!info) return null;
        let duration = 'Long Film';
        if (Number(info.duration) < 120 && Number(info.duration) >= 30) {
            duration = 'Normal Length';
        }
        if (Number(info.duration) < 30) {
            duration = 'Short Film';
        }
        return <Duration>{duration} ({info.duration} minutes)</Duration>;
    }

    function showGenres() {
        if (!info) return null;
        return <Genres>{
            info.genre.map((genre: string) => (
                <Genre key={genre} 
                    type="dashed"
                    size="small"
                    onClick={() => {
                    dispatch(titlesSetGenre({value: [genre]}));
                    navigate(getHomePath());
                }}>{genre}</Genre>
            ))
        }</Genres>;
    }
}
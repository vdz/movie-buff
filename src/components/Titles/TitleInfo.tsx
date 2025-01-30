import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { TitleInfoContainer, TitleInfoHeader } from './Titles.styled';
import { TitleResult } from './TitleResult';
import { Showtimes } from '@/components/Showtimes/Showtimes';
import { Outlet, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { selectTitle } from '@/store/bookings/bookings.actions';

export function TitleInfo() {
    const id = useParams().id;
    const selectedTitleId = useSelector((state: RootState) => state.bookings.selectedTitleId);
    const info = useSelector((state: RootState) => state.titles.byId[id!] || null);
    const dispatch = useDispatch();

    // when URL loaded directly manually set this, otherwise 
    // should be solve at the top level with router-connected solution
    useEffect(() => {
        if (!selectedTitleId) {
            dispatch(selectTitle({ titleId: id! }));
        }
    }, [id]);

    if (!id || !info) {
        return null;
    }

    return (
        <TitleInfoContainer>
            <TitleInfoHeader>
                <TitleResult id={id} />
            </TitleInfoHeader>
            <Showtimes />
            <Outlet />
        </TitleInfoContainer>
    )
}
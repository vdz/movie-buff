import { getTitlePagePath } from "@/lib/paths";

import { SeatsContainer } from "./Seats.styled";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { Showtime } from "@/store/theaters/types";
import { selectShowtime } from "@/store/bookings/bookings.actions";
import { useDispatch } from "react-redux";

export function Seats() {
    const titleId = useParams().id;
    const showtimeId = useParams().showtimeId;
    const dispatch = useDispatch();
    const showtime: Showtime = useSelector((state: RootState) => state.theaters.byShowtimes[showtimeId!]);
    
    const navigate = useNavigate();

    return (
        <SeatsContainer open={true}
                        centered
                        onCancel={() => {
                            navigate(getTitlePagePath(titleId!))
                            dispatch(selectShowtime({ showtimeId: '' }))
                        }}
                        title="Seats"
        >
            <pre>{JSON.stringify(showtime, null, 2)}</pre>
        </SeatsContainer>
    );
}
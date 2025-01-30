import { getHomePath, getTitlePagePath } from "@/lib/paths";
import { Empty, Typography } from "antd";
import { BookButton, BookingInfo, Info, SeatsContainer, SeatsHeader, ShowtimesInfo } from "./Seats.styled";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { bookSeats, selectShowtime } from "@/store/bookings/bookings.actions";
import { useDispatch } from "react-redux";
import { SeatSelector } from "./SeatSelector";
import { useShowtimeData } from "@/lib/useShowtimeData";
import { GENERIC_TICKET_PRICE } from "@/lib/constants";
import { formatShowtime } from "@/lib/formatShowtime";
import { useEffect } from "react";
import { resetBooking } from "@/store/bookings/bookings.actions";
import { getSummaryPagePath } from "@/lib/paths";
const { Title } = Typography;

export function Seats() {
    const titleId = useParams().id;
    const showtimeId = useParams().showtimeId;
    const isSelected = useSelector((state: RootState) => state.bookings.selectedShowtimeId === showtimeId);
    const reservedSeats = useSelector((state: RootState) => state.bookings.selectedSeats);
    const { showtime, theater, title } = useShowtimeData(showtimeId!);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // emergency hydradion in absence of a router-connected hydration 
    // (hydration should be solved in a more robust at the top level)
    // I used it when I was loading specific URL directly for debugging
    // My diregard this useEffect
    useEffect(() => {
        if (!isSelected) {
            dispatch(selectShowtime({ showtimeId: showtimeId! }));
        }
    }, []);

    if (!showtime) {
        return (
            <Empty description="No showtime found">
                <Link to={getHomePath()}>Back to home</Link>
            </Empty>
        );
    }

    return (
        <SeatsContainer open={true}
                        centered
                        footer={getBookButton()}
                        onCancel={() => {
                            navigate(getTitlePagePath(titleId!))
                            dispatch(selectShowtime({ showtimeId: '' }));
                            dispatch(resetBooking());
                        }}
                        title={<Title level={1}>Seat Selection</Title>}
        >
            <SeatsHeader direction="horizontal">
                <ShowtimesInfo>
                    <Info label="Title">{title.name}</Info>
                    <Info label="Theater">{theater?.name}</Info>
                    <Info label="Showtime">{formatShowtime(showtime?.showtime)}</Info>
                </ShowtimesInfo>
                <BookingInfo>
                    <Info label="Available">{showtime?.seatsAvailable}</Info>
                    <Info label="My Seats x Price">{reservedSeats.length} × ${GENERIC_TICKET_PRICE}</Info>
                    <Info label="Total Price">${reservedSeats.length * GENERIC_TICKET_PRICE}</Info>
                </BookingInfo>
            </SeatsHeader>
            <SeatSelector showtimeId={showtimeId!} />
        </SeatsContainer>
    );

// ██████████████████████████████████████████████████████████████████████████
// ███▄░░░▄████▄░░░▄████▄░░░▄████▄░░░▄████▄░░░▄████▄░░░▄████▄░░░▄████▄░░░▄███
// ███▀░░░▀████▀░░░▀████▀░░░▀████▀░░░▀████▀░░░▀████▀░░░▀████▀░░░▀████▀░░░▀███
// ██████████████████████████████████████████████████████████████████████████

    function getBookButton() {
        return <BookButton type="primary" 
            disabled={reservedSeats.length === 0}
            variant="filled"
            onClick={() => {
                dispatch(bookSeats());
                navigate(getSummaryPagePath());
            }}>
                Book
            </BookButton>;
    }
}
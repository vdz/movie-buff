import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Empty } from "antd";
import { Link } from "react-router-dom";
import { getHomePath } from "@/lib/paths";
import { formatShowtime } from "@/lib/formatShowtime";
import { SummaryList, SummaryContainer, Title, ExternalLink } from "./Summary.styled";

export function Summary() {
    const params = useParams();
    const selectedBookingId = useSelector((state: RootState) => state.bookings.selectedBookingId);
    const bookingId = params.id || selectedBookingId;
    const booking = useSelector((state: RootState) => state.bookings.bookings[bookingId!]);
    const showtime = useSelector((state: RootState) => state.theaters.byShowtimes[booking.showtimeId]);
    const { theaterId, titleId} = showtime;
    const theater = useSelector((state: RootState) => state.theaters.byId[theaterId]);
    const title = useSelector((state: RootState) => state.titles.byId[titleId]);
    
    if (!booking) {
        return <Empty description="No booking found">
            <Link to={getHomePath()}>Back to home</Link>
        </Empty>;
    }

    return (
        <SummaryContainer>
            <Title>Here's what you'd got</Title>
            <SummaryList>
                <dt>On a date of</dt>
                <dd>{new Date(booking.createdAt).toLocaleDateString()}</dd>
                <dt>yo booked a</dt>
                <dd>{title.name}</dd>
                <dt>to screen at</dt>
                <dd>{theater.name} in {theater.location}</dd>
                <dt>on</dt>
                <dd>{formatShowtime(showtime.showtime)}</dd>
                <dt>seats</dt>
                <dd>{booking.seats.length} </dd>
                <dt>specifically</dt>
                <dd>{booking.seats.map((seat) => `${seat.row}${seat.seat}`).join(', ')}</dd>
                <dt>and paid a total price of</dt>
                <dd>${booking.price}</dd>
                <dd className="actions">
                    <ExternalLink href="">Add to Calendar</ExternalLink>
                    <ExternalLink href="">Share with friends</ExternalLink>
                    <Link to={getHomePath()}>Back to home</Link>
                </dd>
            </SummaryList>
        </SummaryContainer>

    );
}
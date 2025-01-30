import { useCurrentRoute } from "@/lib/useCurrentRoute";
import { CurrentMovie, HeaderStyled, MovieSelector, SiteTitle } from "./Header.styled";
import { routes } from "@/router";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { getHomePath, getSummaryPagePath, getTitlePagePath } from "@/lib/paths";
import { useNavigate } from "react-router-dom";
import { BookingList } from "../Seats/Seats.styled";

export function Header() {
    const currentRoute = useCurrentRoute(routes)
    const params = useParams()
    const titles = useSelector((state: RootState) => state.titles.titles)
    const bookings = useSelector((state: RootState) => state.bookings.bookings)
    const navigate = useNavigate();

    return <HeaderStyled>
        <SiteTitle>
            <Link to={getHomePath()}>
                MovieBuff
            </Link>
        </SiteTitle>
        {showMovieSelector()}
        {showBookingInfo()}
    </HeaderStyled>

// ██████████████████████████████████████████████████████████████████████████
// ███▄░░░▄████▄░░░▄████▄░░░▄████▄░░░▄████▄░░░▄████▄░░░▄████▄░░░▄████▄░░░▄███
// ███▀░░░▀████▀░░░▀████▀░░░▀████▀░░░▀████▀░░░▀████▀░░░▀████▀░░░▀████▀░░░▀███
// ██████████████████████████████████████████████████████████████████████████

    function showMovieSelector() {
        if (!currentRoute) return null;
        if (!['titleInfo', 'seats'].includes(currentRoute.name)) {
            return null;
        }

        if (!titles.length) return null;

        const options = titles.map((title) => ({
            label: title.name,
            value: title.id,
        }))
        
        return (
            <CurrentMovie>
                Currently selected:
                <MovieSelector value={params.id} 
                    options={options}
                    variant="borderless"
                    onChange={(id: unknown) => {
                        navigate(getTitlePagePath(id as string))
                    }}/>
            </CurrentMovie>
        )
    }

    function showBookingInfo() {
        if (!Object.keys(bookings).length) return null;

        return <BookingList options={Object.entries(bookings).map(([id, booking]) => ({
                label: `Booking at ${new Date(booking.createdAt).toLocaleDateString()}`,
                value: id,
            }
        ))}
        placeholder="Your previous bookings"
        onChange={(id: unknown) => {
            navigate(getSummaryPagePath(id as string))
        }}/>
    }
}


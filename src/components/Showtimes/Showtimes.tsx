import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { ShowtimesContainer, TheaterSummary, TheaterDetails, ShowtimesList, TheaterShowtime, TheaterName, TheaterLocation, TheaterLocationImage } from "./Showtimes.styled";
import Loader from "../Loader/Loader";
import { theatersFetch } from "@/store/theaters/theaters.actions";
import { useManualHydration } from "@/lib/useManualHydration";
import { selectShowtime } from "@/store/bookings/bookings.actions";
import { useNavigate } from "react-router-dom";
import { getSeatsPath } from "@/lib/paths";
import { Showtime } from "@/store/theaters/types";
import { formatShowtime } from "@/lib/formatShowtime";
import { ShowtimesTitle } from "./Showtimes.styled";


export function Showtimes() {
    const theaters = useSelector((state: RootState) => state.theaters.theaters);
    const titleId = useSelector((state: RootState) => state.bookings.selectedTitleId);
    const title = useSelector((state: RootState) => state.titles.byId[titleId!].name);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // I used it when I was loading specific URL directly for debugging, 
    // but an alternative is to use a router-connected hydration
    // This is simple fix that React allows, in this architecture React 
    // shouldn't have to handle implementation details of a fetch, 
    // that is also why a reusable hook is possible here
    return (
        <ShowtimesContainer>
            <ShowtimesTitle level={2}>Showtimes for <span>{title}</span></ShowtimesTitle>
            {showListingsByTheater()}
        </ShowtimesContainer>
    );

// ██████████████████████████████████████████████████████████████████████████
// ███▄░░░▄████▄░░░▄████▄░░░▄████▄░░░▄████▄░░░▄████▄░░░▄████▄░░░▄████▄░░░▄███
// ███▀░░░▀████▀░░░▀████▀░░░▀████▀░░░▀████▀░░░▀████▀░░░▀████▀░░░▀████▀░░░▀███
// ██████████████████████████████████████████████████████████████████████████


    // You're probably wondering what about memoizing all of these 
    // functions I add as utility in components — especially the one below.
    // My answer to this is two fold: 
    // 1. I'd like to have my react component `return` statement as high as possible to undertand what's up?
    // 2. React Compiler (React v19) memoizies these functions out of the box
    // Also this query can be cached by the use of a premade selector (like we have elswhere in the project).
    function showListingsByTheater() {
        if (!theaters) return <Loader />;

        return theaters.map((theater) => {
            if (!theater) {
                return null;
            }
            const showtimes: Showtime[] = Array.from(theater.showtimes).sort((a, b) => {
                const aDate = new Date(a.showtime);
                const bDate = new Date(b.showtime);
                return aDate.getTime() - bDate.getTime();
            });
            return (
                <TheaterSummary key={`theater-summary-${theater.id}`}>
                    <TheaterDetails>
                        <TheaterName>{theater.name}</TheaterName>
                        <TheaterLocation>{theater.location}</TheaterLocation>
                        <TheaterLocationImage src={theater.locationImage} alt={theater.name} />
                    </TheaterDetails>
                    <ShowtimesList>
                        {showtimes.map((showtime) => {
                            const buttonProps = !showtime.seatsAvailable ? { danger: true } : {};
                            
                            return (
                                <TheaterShowtime key={`theater-showtime-${showtime.id}`}
                                    onClick={() => {
                                        if (!showtime.seatsAvailable) return;
                                        dispatch(selectShowtime({ showtimeId: showtime.id }));
                                        navigate(getSeatsPath(titleId!, showtime.id))
                                    }}
                                    title={showtime.seatsAvailable ? 
                                        `Select out of ${showtime.seatsAvailable} seats` : 
                                        `Sold Out`}
                                    data-availibility={showtime.seatsAvailable}
                                    {...buttonProps}
                                >
                                    {formatShowtime(showtime.showtime)}
                                </TheaterShowtime>
                            )
                        })}
                    </ShowtimesList>
                </TheaterSummary>
            );
        });
    }
}
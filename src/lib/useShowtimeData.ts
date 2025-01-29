import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export function useShowtimeData(showtimeId: string) {
    const showtime = useSelector((state: RootState) => state.theaters.byShowtimes[showtimeId]);
    const theater = useSelector((state: RootState) => state.theaters.byId[showtime?.theaterId]);
    const title = useSelector((state: RootState) => state.titles.byId[showtime?.titleId]);
 
    return { showtime, theater, title };
}
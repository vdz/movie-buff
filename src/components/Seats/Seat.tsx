import { SeatSelectorSeat } from "./Seats.styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import classNames from 'classnames';
import { addSeat } from "@/store/bookings/bookings.actions";
import { removeSeat } from "@/store/bookings/bookings.actions";

export function Seat({ showtimeId, seat, row }: { 
    showtimeId: string, 
    seat: number, 
    row: number 
}) {
    const { occupancy } = useSelector((state: RootState) => state.theaters.byShowtimes[showtimeId]);
    const { selectedSeats } = useSelector((state: RootState) => state.bookings);
    const isOccupied = occupancy?.[row]?.includes(seat) ?? false;
    //const isSelected = selectedSeats.includes({ row, seat });
    const isSelected = selectedSeats.some((selectedSeat) => selectedSeat.row === row && selectedSeat.seat === seat);

    const dispatch = useDispatch();

    const classes = classNames({
        'selected': isSelected,
        'occupied': isOccupied,
    });

    const buttonProps: any = {
        title: 'Select a seat',
    }
    if (isOccupied) {
        buttonProps.disabled = true;
        buttonProps.title = 'Occupied';
    }
    if (isSelected) {
        buttonProps.title = 'Remove selected seat';
    }

    return (
        <SeatSelectorSeat type="primary" 
            variant="solid"
            color="cyan"
            className={classes}
            onClick={() => {
                if (isOccupied) return;

                console.log(row, seat, isSelected);


                if (isSelected) {
                    dispatch(removeSeat({ seat: { row, seat } }));
                } else {
                    dispatch(addSeat({ seat: { row, seat } }));
                }
            }}
            {...buttonProps}
        >
        </SeatSelectorSeat>
    );
}
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Flex, Skeleton } from "antd";
import { RowNumber, SeatSelectorContainer, SeatSelectorRow } from "./Seats.styled";
import { Seat } from "./Seat";

export function SeatSelector({ showtimeId }: { showtimeId: string }) {
    const showtime = useSelector((state: RootState) => state.theaters.byShowtimes[showtimeId]);
    const theater = useSelector((state: RootState) => state.theaters.byId[showtime?.theaterId]);
    
    if (!showtime || !theater) return buildSkeleton();

    return (
        <SeatSelectorContainer>
            {showSeatRows()}
        </SeatSelectorContainer>
    );

    function showSeatRows() {
        const rows = theater.numberOfRows;
        const totalSeats = theater.totalSeats;
        const rowLength = Math.floor(totalSeats / rows);
        
        const result: JSX.Element[] = [];

        // iterate one row over for last short  row
        for (let row = 0; row <= rows+1; row++) {
            let currentRowLength = rowLength;
            const isLastRow = row === rows+1;

            const rowResult: JSX.Element[] = [];
            
            if (isLastRow) {
                currentRowLength = totalSeats - (rows * rowLength);
            }

            if (row === 0) {
                for (let seat = 1; seat <= currentRowLength; seat++) {
                    rowResult.push(<RowNumber 
                        type="text"
                        key={`label-${row}-${seat}`} 
                    >
                        {seat}
                    </RowNumber>);
                }
            } else {
                for (let seat = 1; seat <= currentRowLength; seat++) {
                    rowResult.push(<Seat 
                        key={`seat-${row}-${seat}`} 
                        showtimeId={showtimeId}
                        seat={seat} 
                        row={row} 
                        data-seat={seat}
                    />);
                }
                }

            result.push(
                <SeatSelectorRow key={`row-${row}`}
                    data-row={row > 0 ? row : '⋅'}
                >
                    {rowResult}
                </SeatSelectorRow>
            );
        }

        return result;
    }

    function buildSkeleton() {
        return (
            <Flex wrap gap="small">
                {Array.from({ length: 20 }).map((_, index) => (
                    <Skeleton.Button active size="small" key={`skeleton-button-${index}`} />
                ))}
            </Flex>
        );
    }

}
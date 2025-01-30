import { Skeleton } from "antd";
import { SummaryContainer, Title } from "./Summary.styled";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect } from "react";
import { getSummaryPagePath } from "@/lib/paths";
import { useNavigate } from "react-router-dom";

// This is a after sell page, where, while booking is 
//finalized with the server, other offers can be made,
// It has the least bit of client logic: 
// to navigate away when specific state changes
export function SummaryLoader() {
    const selectedBookingId = useSelector((state: RootState) => state.bookings.selectedBookingId);  
    const navigate = useNavigate();

    useEffect(() => {
        if (selectedBookingId) {
            navigate(getSummaryPagePath(selectedBookingId));
        }
    }, [selectedBookingId, navigate]);
    
    return (
        <SummaryContainer>
            <Title>Loading summary...</Title>
            <Skeleton active />
        </SummaryContainer>
    );
}

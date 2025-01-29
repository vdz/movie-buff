export function formatShowtime(showtime: string) {
    const date = new Date(showtime);
    return date.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
}

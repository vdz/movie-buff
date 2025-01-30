export const getHomePath = () => '/';
export const getTitlePagePath = (id: string) => `/title/${id}`;
export const getSeatsPath = (titleId: string, showtimeId: string) => `${getTitlePagePath(titleId)}/seats/${showtimeId}`;
export const getSummaryPagePath = (id?: string) => `/summary/${id || ''}`;

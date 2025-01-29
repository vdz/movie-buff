import { useDispatch } from "react-redux";
import { FiltersContainer, RatingSelect, GenreSelect } from "./Filters.styled";
import { titlesSetGenre, titlesSetRating } from "@/store/titles/titles.actions";
import { Flex, Typography } from "antd";

export function Filters() {
    const dispatch = useDispatch();

    return (
        <FiltersContainer>
            <Typography.Text>
                Filter by Genres (AND)
                Filter by Rating (Chosen and above)
            </Typography.Text>
            <Flex justify="space-between" align="center" gap="small">
                <GenreSelect mode="multiple" 
                    placeholder="Filter by Genres"
                    allowClear
                    size="middle"
                    options={genresOptions}
                    data-title="Filter by Genres (AND)"
                    onChange={(value: any) => {
                        dispatch(titlesSetGenre({ value }))
                    }}
                />
                <RatingSelect  
                    placeholder="Filter by Rating"
                    allowClear
                    size="middle"
                    options={ratingOptions}
                    onChange={(value: any) => {
                        dispatch(titlesSetRating({ value }))
                    }}/>
            </Flex>
        </FiltersContainer>
    )
}

const ratingOptions = [
    { label: '1 ⭐', value: 1 },
    { label: '2 ⭐⭐', value: 2 },
    { label: '3 ⭐⭐⭐', value: 3 },
    { label: '4 ⭐⭐⭐⭐', value: 4 },
    { label: '5 ⭐⭐⭐⭐⭐', value: 5 },
    { label: '6 ⭐⭐⭐⭐⭐⭐', value: 6 },
    { label: '7 ⭐⭐⭐⭐⭐⭐⭐', value: 7 },
    { label: '8 ⭐⭐⭐⭐⭐⭐⭐⭐', value: 8 },
    { label: '9 ⭐⭐⭐⭐⭐⭐⭐⭐⭐', value: 9 },
    { label: '10 ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐', value: 10 },
];

const genresOptions = [
    { label: 'Action', value: 'Action' },
    { label: 'Adventure', value: 'Adventure' },
    { label: 'Animation', value: 'Animation' },
    { label: 'Comedy', value: 'Comedy' },
    { label: 'Crime', value: 'Crime' },
    { label: 'Documentary', value: 'Documentary' },
    { label: 'Drama', value: 'Drama' },
    { label: 'Family', value: 'Family' },
    { label: 'Fantasy', value: 'Fantasy' },
    { label: 'History', value: 'History' },
    { label: 'Horror', value: 'Horror' },
    { label: 'Music', value: 'Music' },
    { label: 'Mystery', value: 'Mystery' },
    { label: 'Romance', value: 'Romance' },
    { label: 'Science Fiction', value: 'Science Fiction' },
    { label: 'Thriller', value: 'Thriller' },
    { label: 'War', value: 'War' },
    { label: 'Western', value: 'Western' },
];

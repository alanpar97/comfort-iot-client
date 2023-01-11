import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Button, CardActions, CardContent, Divider, Grid, Menu, MenuItem, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import GraphSection from './GraphSection';
import { gridSpacing } from 'store/constant';

//data
import { LoadInitialRooms } from './data/rooms_data';

// ==============================|| DASHBOARD DEFAULT - ROOMS CARD ||============================== //

const RoomsCard = ({ isLoading, temperatureFilter, lightFilter, humidityFilter }) => {
    const theme = useTheme();
    const [data, loading] = LoadInitialRooms("http://127.0.0.1:8087/rooms");
    console.log(data);
    if (loading) {
        return <p>Loading...</p>;
    }
    const filteredData = data.filter(item => temperatureFilter[0] <= item.room.temperature  && item.room.temperature <= temperatureFilter[1])
    .filter(item => lightFilter[0] <= item.room.light && item.room.light <= lightFilter[1])
    .filter(item => humidityFilter[0] <= item.room.humidity && item.room.humidity <= humidityFilter[1]);
    return (
        <>
            {isLoading ? (
                <SkeletonPopularCard />
            ) : (
                <MainCard content={false}>
                    <CardContent>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12}>
                                <Grid container alignContent="center" justifyContent="space-between">
                                    <Grid item>
                                        <Typography variant="h4">Rooms</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                {filteredData.map((item) =>(
                                    <Grid container direction="column">
                                        <Grid item>
                                            <Grid container alignItems="center" justifyContent="space-between">
                                                <Grid item>
                                                    <Typography variant="title1" color="inherit">
                                                        {item.room.room_name}
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Grid container alignItems="center" justifyContent="space-between">
                                                        <Grid item>
                                                            <Typography variant="subtitle1" sx={{ color: theme.palette.success.dark}}>
                                                                {item.room.temperature}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            <GraphSection />
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Divider sx={{ my: 1.5 }} />
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </CardContent>
                </MainCard>
            )}
        </>
    );
};

RoomsCard.propTypes = {
    isLoading: PropTypes.bool
};

export default RoomsCard;

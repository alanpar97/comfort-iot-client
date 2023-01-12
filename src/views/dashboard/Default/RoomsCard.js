import { CardContent, Divider, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';

import GraphSection from './GraphSection';

// material-ui
// project imports
//data
// ==============================|| DASHBOARD DEFAULT - ROOMS CARD ||============================== //

const RoomsCard = ({ data, loading, temperatureFilter, lightFilter, humidityFilter }) => {
    const theme = useTheme()
    const [filteredData, setFilteredData] = useState(null)

    useEffect(() => {
        if (data) {
            const filteredData = data
                .filter(
                    (item) =>
                        temperatureFilter[0] <= item.room.temperature &&
                        item.room.temperature <= temperatureFilter[1]
                )
                .filter(
                    (item) => lightFilter[0] <= item.room.light && item.room.light <= lightFilter[1]
                )
                .filter(
                    (item) =>
                        humidityFilter[0] <= item.room.humidity &&
                        item.room.humidity <= humidityFilter[1]
                )

            setFilteredData(filteredData)
        }
    }, [data, humidityFilter, lightFilter, temperatureFilter])

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        filteredData && (
            <>
                <MainCard content={false}>
                    <CardContent>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12}>
                                <Grid
                                    container
                                    alignContent="center"
                                    justifyContent="space-between"
                                >
                                    <Grid item>
                                        <Typography variant="h4">Rooms</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                {filteredData.map((item) => (
                                    <Grid container direction="column">
                                        <Grid item>
                                            <Grid
                                                container
                                                alignItems="center"
                                                justifyContent="space-between"
                                            >
                                                <Grid item>
                                                    <Typography variant="title1" color="inherit">
                                                        {item.room.room_name}
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Grid
                                                        container
                                                        alignItems="center"
                                                        justifyContent="space-between"
                                                    >
                                                        <Grid item>
                                                            <Typography
                                                                variant="subtitle1"
                                                                sx={{
                                                                    color: theme.palette.success
                                                                        .dark,
                                                                }}
                                                            >
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
            </>
        )
    )
}

RoomsCard.propTypes = {
    isLoading: PropTypes.bool,
}

export default RoomsCard

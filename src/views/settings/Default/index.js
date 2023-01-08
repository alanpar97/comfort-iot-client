import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import EarningCard from './EarningCard';
import MainCard from 'ui-component/cards/MainCard';
import RoomsCard from './RoomsCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import FilterTemperatureCard from './FilterTemperatureCard';
import FilterHumidityCard from './FilterHumidityCard';
import FilterAirPressureCard from './FilterAirPressureCard';
import PreferenceTemperatureCard from './PreferenceTemperatureCard';
import PreferenceHumidityCard from './PreferenceHumidityCard';
import PreferenceAirPressureCard from './PreferenceAirPressure';
import { gridSpacing } from 'store/constant';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <MainCard title="Settings">
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} md={4}>
                            <RoomsCard isLoading={isLoading} />
                        </Grid>
                        <Grid item lg={4} md={12} sm={12} xs={12}>
                            <Grid container spacing={gridSpacing}>
                                <Grid item sm={6} xs={12} md={6} lg={12}>
                                    <FilterTemperatureCard isLoading={isLoading} />
                                </Grid>
                                <Grid item sm={6} xs={12} md={6} lg={12}>
                                    <FilterHumidityCard isLoading={isLoading} />
                                </Grid>
                                <Grid item sm={6} xs={12} md={6} lg={12}>
                                    <FilterAirPressureCard isLoading={isLoading} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={4} md={12} sm={12} xs={12}>
                            <Grid container spacing={gridSpacing}>
                                <Grid item sm={6} xs={12} md={6} lg={12}>
                                    <PreferenceTemperatureCard isLoading={isLoading} />
                                </Grid>
                                <Grid item sm={6} xs={12} md={6} lg={12}>
                                    <PreferenceHumidityCard isLoading={isLoading} />
                                </Grid>
                                <Grid item sm={6} xs={12} md={6} lg={12}>
                                    <PreferenceAirPressureCard isLoading={isLoading} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default Dashboard;

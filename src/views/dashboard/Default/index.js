import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import RoomsCard from './RoomsCard';
import FilterTemperatureCard from './FilterTemperatureCard';
import FilterHumidityCard from './FilterHumidityCard';
import FilterLightCard from './FilterLightCard';
import PreferenceTemperatureCard from './PreferenceTemperatureCard';
import PreferenceHumidityCard from './PreferenceHumidityCard';
import PreferenceAirPressureCard from './PreferenceAirPressure';
import { gridSpacing } from 'store/constant';
import ImportancePreferences from 'views/settings';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    //Temperature Filtering
    const [tempFilter, setTempFilter] = useState([20,30]);
    const handleTempFilterChange = (newTempFilter) => {
      setTempFilter(newTempFilter);
    };

    //Light Filtering
    const [lightFilter, setLightFilter] = useState([70,80]);
    const handleLightFilterChange = (newLightFilter) => {
        setLightFilter(newLightFilter);
    };

    //Humidity Filtering
    const [humidityFilter, setHumidityFilter] = useState([25,35]);
    const handleHumidityFilterChange = (newHumidityFilter) => {
        setHumidityFilter(newHumidityFilter);
    };
    
    return (
        <MainCard title="Welcome!">
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={8} md={6}>
                            <RoomsCard isLoading={isLoading} temperatureFilter={tempFilter} lightFilter={lightFilter} humidityFilter={humidityFilter}/>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Grid container spacing={gridSpacing}>
                                <Grid item sm={6} xs={12} md={6} lg={12}>
                                    <FilterTemperatureCard isLoading={isLoading} onValueChange={handleTempFilterChange} initialValue={tempFilter}/>
                                </Grid>
                                <Grid item sm={6} xs={12} md={6} lg={12}>
                                    <FilterHumidityCard isLoading={isLoading} onValueChange={handleHumidityFilterChange} initialValue={humidityFilter} />
                                </Grid>
                                <Grid item sm={6} xs={12} md={6} lg={12}>
                                    <FilterLightCard isLoading={isLoading} onValueChange={handleLightFilterChange} initialValue={lightFilter} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <ImportancePreferences />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </MainCard>
    );
    
};

export default Dashboard;

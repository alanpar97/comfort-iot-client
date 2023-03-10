import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { gridSpacing } from 'store/constant';
import MainCard from 'ui-component/cards/MainCard';
import ImportancePreferences from 'views/settings';

import FilterHumidityCard from './FilterHumidityCard';
import FilterLightCard from './FilterLightCard';
import FilterTemperatureCard from './FilterTemperatureCard';
import RoomsCard from './RoomsCard';

// material-ui
// project imports
// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState(null)

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://127.0.0.1:8087/rooms', { method: 'POST' })
            const json = await response.json()
            setLoading(false)
            setData(json)
        }
        fetchData()
    }, [])

    //Temperature Filtering
    const [tempFilter, setTempFilter] = useState([20, 30])
    const handleTempFilterChange = (newTempFilter) => {
        setTempFilter(newTempFilter)
    }

    //Light Filtering
    const [lightFilter, setLightFilter] = useState([70, 80])
    const handleLightFilterChange = (newLightFilter) => {
        setLightFilter(newLightFilter)
    }

    //Humidity Filtering
    const [humidityFilter, setHumidityFilter] = useState([25, 35])
    const handleHumidityFilterChange = (newHumidityFilter) => {
        setHumidityFilter(newHumidityFilter)
    }

    const handleImportanceChange = async (preferences) => {
        const formData = new FormData()
        formData.append('ahp_object', preferences)
        const response = await fetch('http://127.0.0.1:8087/rooms', {
            method: 'POST',
            body: formData,
        })
        const json = await response.json()
        setLoading(false)
        setData(json)
    }

    return (
        <MainCard title="Welcome!">
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={8} md={6}>
                            <RoomsCard
                                data={data}
                                isLoading={isLoading}
                                temperatureFilter={tempFilter}
                                lightFilter={lightFilter}
                                humidityFilter={humidityFilter}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Grid container spacing={gridSpacing}>
                                <Grid item sm={6} xs={12} md={6} lg={12}>
                                    <FilterTemperatureCard
                                        isLoading={isLoading}
                                        onValueChange={handleTempFilterChange}
                                        initialValue={tempFilter}
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12} md={6} lg={12}>
                                    <FilterHumidityCard
                                        isLoading={isLoading}
                                        onValueChange={handleHumidityFilterChange}
                                        initialValue={humidityFilter}
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12} md={6} lg={12}>
                                    <FilterLightCard
                                        isLoading={isLoading}
                                        onValueChange={handleLightFilterChange}
                                        initialValue={lightFilter}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <ImportancePreferences onChange={handleImportanceChange} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </MainCard>
    )
}

export default Dashboard

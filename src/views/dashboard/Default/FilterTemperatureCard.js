import PropTypes from 'prop-types';
import * as React from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, List, ListItem, ListItemAvatar, Typography } from '@mui/material';
import Slider, { SliderThumb } from '@mui/material/Slider';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';

// assets
import TableChartOutlinedIcon from '@mui/icons-material/DeviceThermostat';

// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.light,
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(210.04deg, ${theme.palette.primary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
        borderRadius: '50%',
        top: -30,
        right: -180
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(140.9deg, ${theme.palette.primary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
        borderRadius: '50%',
        top: -160,
        right: -130
    }
}));

const marks = [
    {
        value: 20,
        label: '20°C'
    },
    {
        value: 22,
        label: '22°C'
    },
    {
        value: 24,
        label: '24°C'
    },
    {
        value: 26,
        label: '26°C'
    },
    {
        value: 28,
        label: '28°C'
    },
    {
        value: 30,
        label: '30°C'
    }
];

const TemperatureSlider = styled(Slider)(({ theme }) => ({
    color: '#fff'
}));

// ==============================|| DASHBOARD - TEMPERTURE CARD ||============================== //

const FilterTemperatureCard = ({ isLoading }) => {
    const theme = useTheme();
    const [value, setValue] = React.useState([24, 28]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            {isLoading ? (
                <TotalIncomeCard />
            ) : (
                <CardWrapper border={false} content={false}>
                    <Box sx={{ p: 3 }}>
                        <List sx={{ py: 0 }}>
                            <ListItem alignItems="flex-end" disableGutters sx={{ py: 0 }}>
                                <Typography
                                    sx={{
                                        fontSize: '.8rem',
                                        fontWeight: 100,
                                        color: '#fff'
                                    }}
                                >
                                    Filter by Temperature
                                </Typography>
                            </ListItem>
                            <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
                                <ListItemAvatar>
                                    <Avatar
                                        variant="rounded"
                                        sx={{
                                            ...theme.typography.commonAvatar,
                                            ...theme.typography.largeAvatar,
                                            backgroundColor: theme.palette.primary.dark,
                                            color: '#fff'
                                        }}
                                    >
                                        <TableChartOutlinedIcon fontSize="inherit" />
                                    </Avatar>
                                </ListItemAvatar>
                                <TemperatureSlider
                                    aria-label="TemperatureFilter"
                                    size="small"
                                    value={value}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                    marks
                                    min={20}
                                    max={30}
                                    color="secondary"
                                />
                            </ListItem>
                        </List>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};

FilterTemperatureCard.propTypes = {
    isLoading: PropTypes.bool
};

export default FilterTemperatureCard;

import PropTypes from 'prop-types';
import * as React from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography, Stack } from '@mui/material';
import Slider, { SliderThumb } from '@mui/material/Slider';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';

// assets
import TableChartOutlinedIcon from '@mui/icons-material/Air';

// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.light,
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(210.04deg, ${theme.palette.secondary[200]} -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
        borderRadius: '50%',
        top: -30,
        right: -180
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(140.9deg, ${theme.palette.secondary[200]} -14.02%, rgba(144, 202, 249, 0) 77.58%)`,
        borderRadius: '50%',
        top: -160,
        right: -130
    }
}));

const AirPressureSlider = styled(Slider)(({ theme }) => ({
    color: '#fff'
}));

// ==============================|| DASHBOARD - TEMPERTURE CARD ||============================== //

const FilterAirPressureCard = ({ isLoading }) => {
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
                                <Typography>Filter by Air Pressure</Typography>
                            </ListItem>
                            <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
                                <ListItemAvatar>
                                    <Avatar
                                        variant="rounded"
                                        sx={{
                                            ...theme.typography.commonAvatar,
                                            ...theme.typography.largeAvatar,
                                            backgroundColor: theme.palette.secondary.dark,
                                            color: '#fff'
                                        }}
                                    >
                                        <TableChartOutlinedIcon fontSize="inherit" />
                                    </Avatar>
                                </ListItemAvatar>
                                <AirPressureSlider
                                    aria-label="AirPressureFilter"
                                    size="small"
                                    value={value}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                    marks
                                    min={20}
                                    max={30}
                                    color="primary"
                                />
                            </ListItem>
                        </List>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};

FilterAirPressureCard.propTypes = {
    isLoading: PropTypes.bool
};

export default FilterAirPressureCard;

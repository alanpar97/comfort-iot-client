import PropTypes from 'prop-types';
import React, { useState } from 'react';

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

const MySlider = styled(Slider)(({ theme }) => ({
    color: '#fff'
}));

// ==============================|| DASHBOARD - TEMPERTURE CARD ||============================== //

const FilterTemperatureCard = ({ isLoading, onValueChange, initialValue }) => {
    const theme = useTheme();
    function TemperatureSlider() {
      

        const handleChange = (event, newValue) => {
            onValueChange(newValue);
        };
      
        return (
          <MySlider
            aria-label="TemperatureFilter"
            size="small"
            value={initialValue}
            onChange={handleChange}
            valueLabelDisplay="auto"
            marks
            min={20}
            max={30}
            color="secondary"
          />
        );
    }
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
                                <TemperatureSlider/>
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

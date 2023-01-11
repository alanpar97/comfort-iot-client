import PropTypes from 'prop-types';
import * as React from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography, Stack } from '@mui/material';
import Slider, { SliderThumb } from '@mui/material/Slider';
import red from '@mui/material/colors/red';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';

// assets
import StorefrontTwoToneIcon from '@mui/icons-material/Water';

// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
    backgroundColor: '#009688',
    color: '#80cbc4',
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(210.04deg, #fff -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
        borderRadius: '50%',
        top: -30,
        right: -180
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(140.9deg, #fff -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
        borderRadius: '50%',
        top: -160,
        right: -130
    }
}));

const MySlider = styled(Slider)(({ theme }) => ({
    color: '#fff'
}));

// ==============================|| DASHBOARD - TOTAL INCOME LIGHT CARD ||============================== //

const FilterHumidityCard = ({ isLoading, onValueChange, initialValue }) => {
    const theme = useTheme();
    function HumiditySlider() {
        const handleChange = (event, newValue) => {
            onValueChange(newValue);
        };
      
        return (
          <MySlider
            aria-label="LightFilter"
            size="small"
            value={initialValue}
            onChange={handleChange}
            valueLabelDisplay="auto"
            marks
            min={25}
            max={35}
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
                                    Filter by Humidity
                                </Typography>
                            </ListItem>
                            <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
                                <ListItemAvatar>
                                    <Avatar
                                        variant="rounded"
                                        sx={{
                                            ...theme.typography.commonAvatar,
                                            ...theme.typography.largeAvatar,
                                            backgroundColor: '#009688',
                                            color: '#fff'
                                        }}
                                    >
                                        <StorefrontTwoToneIcon fontSize="inherit" />
                                    </Avatar>
                                </ListItemAvatar>
                                <HumiditySlider />
                            </ListItem>
                        </List>
                    </Box>
                </CardWrapper>
            )}
        </>
    );
};

FilterHumidityCard.propTypes = {
    isLoading: PropTypes.bool
};

export default FilterHumidityCard;

import PropTypes from 'prop-types';
import * as React from 'react';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography, Stack } from '@mui/material';
import Slider from '@mui/material/Slider';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';

// assets
import TableChartOutlinedIcon from '@mui/icons-material/Air';

// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
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

// ==============================|| DASHBOARD - TEMPERTURE CARD ||============================== //

const PreferenceAirPressureCard = ({ isLoading }) => {
    const theme = useTheme();
    const [value, setValue] = React.useState(25);

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
                                <Typography>Set Air Pressure Preference</Typography>
                            </ListItem>
                            <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
                                <ListItemAvatar>
                                    <Avatar
                                        variant="rounded"
                                        sx={{
                                            ...theme.typography.commonAvatar,
                                            ...theme.typography.largeAvatar,
                                            backgroundColor: '#fff',
                                            color: theme.palette.secondary.dark
                                        }}
                                    >
                                        <TableChartOutlinedIcon fontSize="inherit" />
                                    </Avatar>
                                </ListItemAvatar>
                                <Slider
                                    aria-label="Temperature"
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

PreferenceAirPressureCard.propTypes = {
    isLoading: PropTypes.bool
};

export default PreferenceAirPressureCard;

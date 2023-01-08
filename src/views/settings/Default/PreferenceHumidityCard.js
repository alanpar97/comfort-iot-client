import PropTypes from 'prop-types';
import * as React from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography, Stack } from '@mui/material';
import Slider, { SliderThumb } from '@mui/material/Slider';
// project imports
import MainCard from 'ui-component/cards/MainCard';
import TotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';

// assets
import StorefrontTwoToneIcon from '@mui/icons-material/Water';

// styles
const CardWrapper = styled(MainCard)(({ theme }) => ({
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(210.04deg, #009688 -50.94%, rgba(144, 202, 249, 0) 83.49%)`,
        borderRadius: '50%',
        top: -30,
        right: -180
    },
    '&:before': {
        content: '""',
        position: 'absolute',
        width: 210,
        height: 210,
        background: `linear-gradient(140.9deg, #009688 -14.02%, rgba(144, 202, 249, 0) 70.50%)`,
        borderRadius: '50%',
        top: -160,
        right: -130
    }
}));

// ==============================|| DASHBOARD - TOTAL INCOME LIGHT CARD ||============================== //

const HumiditySlider = styled(Slider)(({ theme }) => ({
    color: '#009688'
}));

const PreferenceHumidityCard = ({ isLoading }) => {
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
                                <Typography>Set Humidity Preference</Typography>
                            </ListItem>
                            <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
                                <ListItemAvatar>
                                    <Avatar
                                        variant="rounded"
                                        sx={{
                                            ...theme.typography.commonAvatar,
                                            ...theme.typography.largeAvatar,
                                            backgroundColor: '#fff',
                                            color: '#009688'
                                        }}
                                    >
                                        <StorefrontTwoToneIcon fontSize="inherit" />
                                    </Avatar>
                                </ListItemAvatar>
                                <HumiditySlider
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

PreferenceHumidityCard.propTypes = {
    isLoading: PropTypes.bool
};

export default PreferenceHumidityCard;

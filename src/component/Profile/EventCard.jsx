import React from 'react';
import {Card, CardActions, CardContent, CardMedia, IconButton, Typography} from "@mui/material";
import {assets} from "../../assets/assets";
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = () => {
    return (
        <Card sx={{width:345}} >
            <CardMedia
            sx={{height:345}}
            image={assets.banner}
            />
                <CardContent>
                    <Typography variant='h5'>
                        VietNam
                    </Typography>

                    <Typography variant='body'>
                        50% off on your first order
                    </Typography>

                    <div className='py-2 space-y-2'>
                        <p>{"mumbai"}</p>
                        <p className='text-sm text-blue-500'> February 14, 2024 12:00 AM </p>
                        <p className='text-sm text-red-500'> February 15, 2024 12:00 AM </p>
                    </div>
                </CardContent>

            {false && <CardActions>
                <IconButton>
                    <DeleteIcon/>

                </IconButton>
            </CardActions>}
        </Card>
    );
};

export default EventCard;

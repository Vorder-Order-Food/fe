import React from 'react';
import {Card, Chip, IconButton} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {assets} from "../../assets/assets";

const RestaurantCard = () => {
    return (
        <div>
            <Card className='w-[18rem] '>
                <div className={`${ true ? 'cursor-pointer' : 'cursor-not-allowed'} relative`}>
                    <img src={assets.banner} className='w-full h-[10rem] rounded-t-md object-center' align=''/>

                    <Chip size='small' className='absolute top-2 left-2' color={true ? 'success' : 'error'}
                    label={true ? 'open' : 'closed'}/>

                </div>

                <div className='p-4 lg:flex w-full justify-between'>
                    <div className='space-y-1'>
                        <p className='font-semibold text-lg'>
                            VietNam Food
                        </p>
                        <p className='text-gray-500 text-sm'>
                            Olalalalallallala
                        </p>

                    </div>

                    <div>
                        <IconButton>
                            {true ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
                        </IconButton>
                    </div>
                </div>

            </Card>
            
        </div>
    );
};

export default RestaurantCard;

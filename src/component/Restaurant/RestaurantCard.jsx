import React, {useContext} from 'react';
import {Card, Chip, IconButton} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {assets} from "../../assets/assets";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToFavorite} from "../../State/Authentication/Action";
import {AppContext} from "../../context/AppContext";
import {isPresentInFavorites} from "../config/logic";

const RestaurantCard = ({ restaurant }) => {

    const { jwt } = useContext(AppContext);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { favorites } = useSelector((store) => store.auth)

    const handleNavigateToRestaurant = () => {
        if(restaurant.open){
            navigate(`/restaurant/${restaurant.address.city}/${restaurant.name}/${restaurant.id}`)
        }
    }


    const handleAddToFavorite = () => {
        dispatch(addToFavorite({jwt, restaurantId: restaurant.id}))
    }
    return (
        <div>
            <Card className='w-[18rem] '>
                <div className={`${ true ? 'cursor-pointer' : 'cursor-not-allowed'} relative`}>
                    <img src={restaurant.images[1]} className='w-full h-[10rem] rounded-t-md object-center' align=''/>

                    <Chip size='small' className='absolute top-2 left-2' color={restaurant.open ? 'success' : 'error'}
                    label={restaurant.open ? 'open' : 'closed'}/>

                </div>

                <div className='p-4 lg:flex w-full justify-between'>
                    <div className='space-y-1'>
                        <p className='font-semibold text-lg cursor-pointer' onClick={handleNavigateToRestaurant}>
                            {restaurant.name}
                        </p>
                        <p className='text-gray-500 text-sm'>
                            {restaurant.description}
                        </p>

                    </div>

                    <div>
                        <IconButton onClick={handleAddToFavorite}>
                            {isPresentInFavorites(favorites, restaurant) ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
                        </IconButton>
                    </div>
                </div>

            </Card>
            
        </div>
    );
};

export default RestaurantCard;

import React, {useContext} from 'react';
import {Button, Card, Chip, IconButton} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {assets} from "../../assets/assets";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToFavorite} from "../../State/Authentication/Action";
import {AppContext} from "../../context/AppContext";
import {isPresentInFavorites} from "../config/logic";
import {addItemToCart} from "../../State/Cart/Action";

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

    const handleAddItemToCart = (e) => {

        const regData = {
            token: jwt,
            cartItem: {
                productId: restaurant.id,
                quantity: 1,
            }
        }

        dispatch(addItemToCart(regData))
        console.log('cart', regData)
    }



    const handleAddToFavorite = () => {
        dispatch(addToFavorite({jwt, restaurantId: restaurant.id}))
    }
    return (
        <div>
            <Card className='w-[18rem] '>
                <div className={`${ true ? 'cursor-pointer' : 'cursor-not-allowed'} relative`}>
                    <img src={restaurant.images[0]} className='w-full h-[10rem] rounded-t-md object-center' align=''/>

                </div>

                <div className='p-4 lg:flex w-full justify-between'>
                    <div className='space-y-1'>
                        <p className='font-semibold text-lg cursor-pointer' onClick={handleNavigateToRestaurant}>
                            {restaurant.name}
                        </p>
                        <p className='text-gray-500 text-sm'>
                            {restaurant.price}
                        </p>

                    </div>



                    <div>
                        <Button onClick={handleAddItemToCart}>
                            Add to cart
                        </Button>
                    </div>
                </div>

            </Card>
            
        </div>
    );
};

export default RestaurantCard;

import React, {useContext} from 'react';
import {Button, Card, CardContent, CardHeader, Grid} from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {useDispatch, useSelector} from "react-redux";
import {updateRestaurantStatus} from "../../State/Restaurant/Action";
import {AppContext} from "../../context/AppContext";

const Details = () => {

    const { jwt } = useContext(AppContext)
    const dispatch = useDispatch()
    const { usersRestaurant } = useSelector((store) => store.restaurant)

    const handleRestaurantStatus = () => {
        dispatch(updateRestaurantStatus({
            restaurantId: usersRestaurant.id,
            jwt: jwt
        }))
    }
    return (
        <div className='lg:px-20 px-5 pb-10'>
            <div className='py-5 flex justify-center items-center gap-5'>
                <h1 className='text-2xl lg:text-7xl text-center font-bold p-5'>{usersRestaurant?.name}</h1>
                <div>
                    <Button color={!usersRestaurant?.open ? 'primary' : 'error'} className='py-[1rem] px-[2rem]' onClick={handleRestaurantStatus}  variant='contained' size='large'>
                        {usersRestaurant?.open ? 'close' : 'open'}
                    </Button>
                </div>

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader
                                title={<span className='text-gray-300'>Restaurant</span>}
                            />

                            <CardContent>
                                <div className='space-y-4 text-gray-200'>
                                    <div className='flex'>
                                        <p className='w-48'>{usersRestaurant?.owner.fullName}</p>
                                        <p className='text-gray-400'>
                                            <span>-</span>
                                            V
                                        </p>
                                    </div>

                                    <div className='flex'>
                                        <p className='w-48'>Restaurant Name</p>
                                        <p className='text-gray-400'>
                                            <span>-</span>
                                            {usersRestaurant?.name}
                                        </p>
                                    </div>

                                    <div className='flex'>
                                        <p className='w-48'>Cuisine Type</p>
                                        <p className='text-gray-400'>
                                            <span>-</span>
                                            {usersRestaurant?.cuisineType}

                                        </p>
                                    </div>

                                    <div className='flex'>
                                        <p className='w-48'>Opening Hours</p>
                                        <p className='text-gray-400'>
                                            <span>-</span>
                                            {usersRestaurant?.openingHours}
                                        </p>
                                    </div>

                                    <div className='flex'>
                                        <p className='w-48'>Status</p>
                                        <p className='text-gray-400'>
                                            <span>-</span>
                                            {
                                                usersRestaurant?.open ?
                                                    <span
                                                        className='px-5 py-2 rounded-full bg-green-400 text-gray-950'>Open</span>

                                                    :
                                                    <span
                                                        className='px-5 py-2 rounded-full bg-red-400 text-gray-950'>Closed</span>

                                            }
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} lg={6}>
                        <Card>
                            <CardHeader
                                title={<span className='text-gray-300'>Address</span>}
                            />

                            <CardContent>
                                <div className='space-y-4 text-gray-200'>
                                    <div className='flex'>
                                        <p className='w-48'>Country</p>
                                        <p className='text-gray-400'>
                                            <span>-</span>
                                            V
                                        </p>
                                    </div>

                                    <div className='flex'>
                                        <p className='w-48'>City</p>
                                        <p className='text-gray-400'>
                                            <span>-</span>
                                            V
                                        </p>
                                    </div>

                                    <div className='flex'>
                                        <p className='w-48'>Postal Code</p>
                                        <p className='text-gray-400'>
                                            <span>-</span>
                                            V
                                        </p>
                                    </div>

                                    <div className='flex'>
                                        <p className='w-48'>Street Address</p>
                                        <p className='text-gray-400'>
                                            <span>-</span>
                                            V
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} lg={6}>
                        <Card>
                            <CardHeader
                                title={<span className='text-gray-300'>Contact Information</span>}
                            />

                            <CardContent>
                                <div className='space-y-4 text-gray-200'>
                                    <div className='flex'>
                                        <p className='w-48'>Email</p>
                                        <p className='text-gray-400'>
                                            <span>-</span>
                                            {usersRestaurant?.contactInformation.email}
                                        </p>
                                    </div>

                                    <div className='flex'>
                                        <p className='w-48'>Mobile</p>
                                        <p className='text-gray-400'>
                                            <span>-</span>
                                            {usersRestaurant?.contactInformation.mobile}
                                        </p>
                                    </div>

                                    <div className='flex'>
                                        <p className='w-48'>Social</p>
                                        <div className='flex items-center pb-3 gap-2 text-gray-400'>
                                            <span className='pr-5 '>-</span>
                                            <a href={usersRestaurant?.contactInformation.instagram}
                                            >
                                                <FacebookIcon sx={{fontSize: "3rem"}}/>
                                            </a>

                                            <a href='/'>
                                                <InstagramIcon sx={{fontSize: "3rem"}}/>
                                            </a>

                                            <a href=
                                                   {usersRestaurant?.contactInformation.twitter}
                                            >
                                                <XIcon sx={{fontSize: "3rem"}}/>
                                            </a>

                                            <a href='/'>
                                                <LinkedInIcon sx={{fontSize: "3rem"}}/>
                                            </a>
                                        </div>
                                    </div>


                                </div>
                            </CardContent>
                        </Card>
                    </Grid>


                </Grid>
            </div>

        </div>
    );
};

export default Details;

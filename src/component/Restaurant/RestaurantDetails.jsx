import React, {useContext, useState} from 'react';
import {Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography} from "@mui/material";
import {assets} from "../../assets/assets";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MenuCard from "./MenuCard";
import {AppContext} from "../../context/AppContext";

const categories = [
    "pizza",
    "burger",
    "chicken"
]
const foodType = [
    {label: "All", value: "all"},
    {label: "Vegetarian only", value: "vegetarian"},
    {label: "Non-Vegetarian", value: "non_vegetarian"},
    {label: "Seasonal", value: "seasonal"}
]
const menu = [1, 1, 1, 1, 1]

const RestaurantDetails = () => {

    const {currency} = useContext(AppContext)

    // const [foodType, setFoodType] = useState("all")

    const handleFilter = (e) => {
        console.log(e.target.value)
    }
    return (
        <div className='px-5 lg:px-20'>
            <section>
                <h3 className='text-gray-500 py-2 mt-10'>Home / vietnam / vietnam food / 3 </h3>
                <div>
                    <Grid container spacing={12}>
                        <Grid item xs={12}>
                            <img src={assets.banner} alt='' className='w-full h-[40vh] object-cover'/>
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <img src={assets.banner} alt='' className='w-full h-[40vh] object-cover'/>
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <img src={assets.banner} alt='' className='w-full h-[40vh] object-cover'/>
                        </Grid>
                    </Grid>

                </div>

                <div className='pt-3 pb-5'>
                    <h1 className='text-4xl font-semibold'>Viet Nam Food</h1>

                    <p className='text-gray-500 mt-1'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>

                    <div className='space-y-3 mt-3'>
                        <p className='text-gray-400 flex items-center gap-3'>
                            <LocationOnIcon/>
                            <span>
                            VietNam, Da Nang

                       </span>
                        </p>


                        <p className='text-gray-400 flex items-center gap-3'>
                            <CalendarTodayIcon/>
                            <span>
                         Mon-Sun: 9:00 AM - 9:00 PM
                       </span>
                        </p>
                    </div>
                </div>
            </section>
            <Divider/>
            <section className='pt-[2rem] lg:flex relative'>
                <div className='space-y-10 lg:w-[20%] filter'>

                    <div className='space-y-5 lg:sticky top-28'>
                        <div>
                            <Typography variant='h5' sx={{paddingBottom: '1rem'}}>
                                Food Type
                            </Typography>

                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <RadioGroup onChange={(e) => handleFilter(e)} name="food_type" value={foodType}>
                                    {foodType.map((item) =>
                                        <FormControlLabel
                                            key={item.value}
                                            value={item.value}
                                            control={<Radio/>}
                                            label={item.label}/>)
                                    }
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider />
                        <div>
                            <Typography variant='h5' sx={{paddingBottom: '1rem'}}>
                                Food Category
                            </Typography>

                            <FormControl className='py-10 space-y-5' component={"fieldset"}>
                                <RadioGroup onChange={(e) => handleFilter(e)} name="categories" value={categories}>
                                    {categories.map((item) =>
                                        <FormControlLabel
                                            key={item}
                                            value={item}
                                            control={<Radio/>}
                                            label={item}/>)
                                    }
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>

                </div>

                <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                    {menu.map((item) => <MenuCard/>)}
                </div>
            </section>
        </div>
    );
};

export default RestaurantDetails;

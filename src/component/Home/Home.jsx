import React, {useContext, useEffect} from 'react';
import MultiItemCarousel from "./MultiItemCarousel";
import RestaurantCard from "../Restaurant/RestaurantCard";
import {useDispatch, useSelector} from "react-redux";
import {AppContext} from "../../context/AppContext";
import {getAllRestaurants} from "../../State/Restaurant/Action";
import {useNavigate} from "react-router-dom";
import {findCart} from "../../State/Cart/Action";


const Home = () => {

    const { jwt } = useContext(AppContext);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { restaurants } = useSelector((state) => state.restaurant || []);


    useEffect(() => {
        dispatch(getAllRestaurants(jwt))
        dispatch(findCart(jwt))
    }, []);

    return (
        <div className='pb-10'>
            <section
                className='bg-cover bg-no-repeat w-full h-[90vh] -z-50 relative flex flex-col justify-center items-center'
                style={{
                    backgroundImage: "url('https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg')"
                }}
            >
                <div className='w-[50vw] z-10 text-center'>
                    <p className='text-2xl lg:text-6xl font-bold z-10 py-5'>Vorder</p>
                    <p className='z-10 text-gray-300 text-xl lg:text-4xl'>Taste the convenience</p>
                </div>

                <div className='w-full h-[90vh] bg-black opacity-40 absolute top-0 left-0 right-0'>

                </div>

                <div className=''>

                </div>

            </section>

            <section className='p-10 lg:py-10 lg:px-20 '>
                <p className='text-2xl font-semibold text-gray-400 py-3 pb-10'>Top Meals</p>
                <MultiItemCarousel/>
            </section>

            <section className='px-5 lg:px-20 pt-10'>
                <h1 className='text-2xl font-semibold text-gray-400 pb-8'>Order from our hanpicked favourites</h1>
                <div className='flex flex-wrap items-center justify-around gap-5'>
                    {restaurants?.map((item) => <RestaurantCard key={item.id} restaurant={item}/>)}
                </div>
            </section>

        </div>
    );
};

export default Home;

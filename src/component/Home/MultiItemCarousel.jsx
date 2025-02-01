import React, {useContext, useEffect} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import {TopMeal} from "./TopMeal";
import CarouselItem from "./CarouselItem";
import {getAllRestaurants} from "../../State/Restaurant/Action";
import {findCart} from "../../State/Cart/Action";
import {AppContext} from "../../context/AppContext";
import {useDispatch, useSelector} from "react-redux";

const MultiItemCarousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    };

    const { jwt } = useContext(AppContext);
    const dispatch = useDispatch()
    const { restaurants } = useSelector((state) => state.restaurant || []);



    useEffect(() => {
        dispatch(getAllRestaurants(jwt))
    }, []);
    return (
        <div>
            <Slider {...settings}>
                {restaurants.map((item) => <CarouselItem key={item.id} image={item?.images[0]} title={item?.name}/>)}
            </Slider>
        </div>
    );
};

export default MultiItemCarousel;

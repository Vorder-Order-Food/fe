import React from 'react';
import RestaurantCard from "../Restaurant/RestaurantCard";
import { useSelector } from "react-redux";

const Favorites = () => {
    const { favorites } = useSelector((store) => store.auth); // Ensure correct state mapping

    console.log(favorites); // Debug the favorites array


    return (
        <div>
            <h1 className='py-5 text-xl font-semibold text-center'>My favorites</h1>

            <div className='flex flex-wrap gap-5 justify-center'>
                {favorites && favorites.length > 0 ? (
                    favorites.map((item) => <RestaurantCard key={item.id} restaurant={item} />)
                ) : (
                    <p>No favorites added yet.</p>
                )}
            </div>
        </div>
    );
};

export default Favorites;

import React, {useContext, useEffect} from 'react';
import AdminSideBar from "./AdminSideBar";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard";
import Orders from "./Orders/Orders";
import Menu from "./Menu/Menu";
import Events from "./Events/Events";
import FoodCategory from "./FoodCategory/FoodCategory";
import Ingredients from "./Ingredient/Ingredients";
import Details from "./Details";
import CreateMenuForm from "./Menu/CreateMenuForm";
import {AppContext} from "../../context/AppContext";
import {useDispatch, useSelector} from "react-redux";
import {getRestaurantById, getRestaurantCategory} from "../../State/Restaurant/Action";
import {getMenuItemsByRestaurantId} from "../../State/Menu/Action";
import {fetchRestaurantOrder} from "../../State/Restaurant Order/Action";
import CreateRestaurantForm from "./CreateRestaurantForm";

const Admin = () => {

    const { jwt } = useContext(AppContext)
    const dispatch = useDispatch()
    const { usersRestaurant } = useSelector((store) => store.restaurant)

    const handleClose = () => {

    }

    useEffect(() => {
        dispatch(getRestaurantCategory({jwt, restaurantId: usersRestaurant?.id}))
        dispatch(fetchRestaurantOrder({
            restaurantId: usersRestaurant?.id,
            jwt
        }))
    }, [jwt]);

    return (
        <div>
            <div className='lg:flex justify-between'>
                <div>
                    <AdminSideBar handleClose={handleClose} />

                </div>

                <div className='lg:w-[80%]'>
                    <Routes>
                        <Route path='/' element={<CreateRestaurantForm/>}/>
                        <Route path='/orders' element={<Orders/>}/>
                        <Route path='/menu' element={<Menu/>}/>
                        <Route path='/category' element={<FoodCategory/>}/>
                        <Route path='/ingredients' element={<Ingredients/>}/>
                        <Route path='/event' element={<Events/>}/>
                        <Route path='/details' element={<Details/>}/>
                        <Route path='/add-menu' element={<CreateMenuForm/>}/>
                    </Routes>

                </div>

            </div>
        </div>
    );
};

export default Admin;

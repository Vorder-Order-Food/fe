import React from 'react';
import {Route, Routes} from "react-router-dom";
import CreateRestaurantForm from "../component/AdminComponent/CreateRestaurantForm";
import Admin from "../component/AdminComponent/Admin";
import {useSelector} from "react-redux";

const AdminRoute = () => {

    const { usersRestaurant } = useSelector((store) => store.restaurant)

    return (
        <div>

            {/*<Routes>*/}
            {/*    <Route path='/*' element={ !usersRestaurant ? <CreateRestaurantForm/> : <Admin/>}/>*/}
            {/*</Routes>*/}

            <Routes>
                <Route path='/*' element={ <Admin/>}/>
            </Routes>


        </div>
    );
};

export default AdminRoute;

import React from 'react';
import {Route, Routes} from "react-router-dom";
import CreateRestaurantForm from "../component/AdminComponent/CreateRestaurantForm";
import Admin from "../component/AdminComponent/Admin";

const AdminRoute = () => {
    return (
        <div>
            <Routes>
                <Route path='/*' element={true ? <CreateRestaurantForm/> : <Admin/>} />
            </Routes>
        </div>
    );
};

export default AdminRoute;

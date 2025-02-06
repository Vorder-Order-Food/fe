import React from 'react';
import {Route, Routes} from "react-router-dom";
import CreateProductForm from "../component/AdminComponent/CreateProductForm";
import Admin from "../component/AdminComponent/Admin";
import {useSelector} from "react-redux";

const AdminRoute = () => {

    const { usersRestaurant } = useSelector((store) => store.restaurant)

    return (
        <div>

            {/*<Routes>*/}
            {/*    <Route path='/*' element={ !usersRestaurant ? <CreateProductForm/> : <Admin/>}/>*/}
            {/*</Routes>*/}

            <Routes>
                <Route path='/*' element={ <Admin/>}/>
            </Routes>


        </div>
    );
};

export default AdminRoute;

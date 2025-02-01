import React from 'react';
import {ShoppingBag} from "@mui/icons-material";
import ShopTwoIcon from '@mui/icons-material/ShopTwo';
import CategoryIcon from '@mui/icons-material/Category';

import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';
import {Divider, Drawer, useMediaQuery} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "../../State/Authentication/Action";

const menu = [
    {title: "Product", icon: <CategoryIcon/>, path: '/'},
    {title: "Orders", icon: <ShoppingBag/>, path: '/orders'},
    {title: "Menu", icon: <ShopTwoIcon/>, path: '/menu'},
    {title: "Details", icon: <AdminPanelSettingsIcon/>, path: '/details'},
    {title: "Logout", icon: <LogoutIcon/>, path: '/'},
]

const AdminSideBar = ({handleClose}) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isSmallScreen = useMediaQuery("(max-witdh:1080px)")

    const handleNavigate = (item) => {
        navigate(`/admin/restaurant${item.path}`)

        if(item.title === "Logout"){
            navigate("/")
            dispatch(logout())
            handleClose()
        }
    }

    return (
        <div>
            <>
                <Drawer sx={{zIndex: 1}} anchor='left' open={true} onClose={handleClose}
                        variant={isSmallScreen ? 'temporary' : 'permanent'}>
                    <div
                        className='w-[70vw lg:w-[20vw] h-screen flex flex-col justify-start mt-24 text-xl space-y-[1.65rem]'>
                        {
                            menu.map((item, index) =>
                                <>
                                    <div onClick={() => handleNavigate(item)} className='px-5 flex  items-center gap-5 cursor-pointer'>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </div>
                                    {
                                        index !== menu.length -1  && <Divider/>
                                    }
                                </>
                            )
                        }
                    </div>
                </Drawer>
            </>
        </div>
    );
};

export default AdminSideBar;

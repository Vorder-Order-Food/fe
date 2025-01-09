import React from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';
import {Divider, Drawer, useMediaQuery} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "../../State/Authentication/Action";

const menu = [
    {title:'Orders', icon: <ShoppingBagIcon/>},
    {title:'Favorites', icon: <FavoriteIcon/>},
    {title:'Address', icon: <AddIcon/>},
    {title:'Payments', icon: <AccountBalanceWalletIcon/>},
    {title:'Notification', icon: <NotificationsActiveIcon/>},
    {title:'Events', icon: <EventIcon/>},
    {title:'Logout', icon: <LogoutIcon/>},
]
const ProfileNavigation = ({open, handleClose}) => {

    const isSmallScreen = useMediaQuery('(max-width:900)')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleNavigate = (item) => {
        if(item.title === "Logout"){
            dispatch(logout())
            navigate('/')
        } else
        navigate(`/my-profile/${item.title.toLowerCase()}`)
    }


    return (
        <div>
            <Drawer sx={{ zIndex: -1, position: 'sticky'}}
                    anchor='left'
                    open={isSmallScreen ? open : true}
                    onClose={handleClose}
                    variant={isSmallScreen ? 'temporary' : 'permanent'}
            >

                <div className='w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl gap-8'>
                    {menu.map((item, index) =>
                    <>
                        <div onClick={() => handleNavigate(item)} className='flex items-center space-x-5 cursor-pointer px-5'>
                            {item.icon}
                            <span>
                                {item.title}
                            </span>
                        </div>
                        {/*ko hien divide o dong cuoi*/}
                        { index !== menu.length - 1 && <Divider/> }
                    </>
                    )}

                </div>
            </Drawer>
        </div>
    );
};

export default ProfileNavigation;

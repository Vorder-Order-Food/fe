import React, {useEffect} from 'react';
import { motion } from 'framer-motion';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Badge, IconButton } from "@mui/material";
import { pink } from "@mui/material/colors";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Person} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const Navbar = () => {
    const { auth } = useSelector(store => store)
    const navigate = useNavigate()

    const handleAvatarClick = () => {
        if(auth.user?.role === "ROLE_CUSTOMER"){
            navigate("/my-profile")
        } else {
            navigate("/admin/restaurant")
        }
    }

    useEffect(() => {
        console.log(auth)
    }, []);


    return (
        <motion.div
            className='flex justify-between sticky top-0 px-5 z-50 py-[.8rem] bg-[#e91e63] lg:px-20'
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.div
                className='lg:mr-10 cursor-pointer flex items-center space-x-4'
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <li onClick={() => navigate('/')} className='logo font-semibold text-gray-300 text-2xl list-none'>
                    Vorder
                </li>
            </motion.div>


            <div className='flex items-center space-x-2 lg:space-x-10'>

                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                    <IconButton>
                        <SearchIcon sx={{ fontSize: "1.5rem" }} />
                    </IconButton>
                </motion.div>


                <motion.div whileHover={{ rotate: 10 }} transition={{ type: "spring", stiffness: 200 }}>
                    {
                        auth.user
                            ? <Avatar onClick={handleAvatarClick} sx={{ bgcolor: "white", color: pink.A400 }}>{auth.user?.fullName[0].toUpperCase()}</Avatar>
                            :
                            <IconButton onClick={() => navigate('/account/login')}>
                                <Person/>
                            </IconButton>
                    }
                </motion.div>

                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                    <IconButton>
                        <Badge color='success' badgeContent={3}>
                            <ShoppingCartIcon sx={{ fontSize: "1.5rem" }} />
                        </Badge>
                    </IconButton>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Navbar;

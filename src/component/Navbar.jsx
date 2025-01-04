import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {Avatar, Badge, IconButton} from "@mui/material";
import {pink} from "@mui/material/colors";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {
    return (
        <div className='flex justify-between px-5 z-50 py-[.8rem] bg-[#e91e63] lg:px-20'>
                <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
                    <li className='logo font-semibold text-gray-300 text-2xl list-none'>
                        Vorder
                    </li>
                </div>

            <div className='flex items-center space-x-2 lg:space-x-10'>
                <div>
                    <IconButton>
                        <SearchIcon sx={{fontsize: "1.5rem"}}/>
                    </IconButton>
                </div>

                <div>
                    <Avatar sx={{bgcolor: "white", color: pink.A400}}>V</Avatar>
                </div>

                <div>
                   <IconButton>
                       <Badge color='success' badgeContent={3}>
                           <ShoppingCartIcon sx={{fontsize: "1.5rem"}}/>
                       </Badge>
                   </IconButton>
                </div>

            </div>
        </div>
    );
};

export default Navbar;

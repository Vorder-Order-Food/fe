import React, {useEffect} from 'react';
import {motion} from 'framer-motion';
import SearchIcon from '@mui/icons-material/Search';
import {Avatar, Badge, Divider, IconButton, ListItemIcon, Menu, MenuItem} from "@mui/material";
import {pink} from "@mui/material/colors";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Logout, Person, PersonAdd, Settings} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {logout} from "../State/Authentication/Action";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavbarLower from "./NavbarLower";



const Navbar = () => {
    const {user} = useSelector((store) => store.auth)
    const {cart} = useSelector((store) => store.cart)
    const navigate = useNavigate()
    const dispatch = useNavigate()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        handleClose(); // Close the menu first
        setTimeout(() => {
            dispatch(logout());
        }, 0); // Ensure the logout action happens after re-render
    };


    return (
        <div className="sticky top-0 z-50 bg-[#e91e63] shadow-md">

            <motion.div
                className="flex justify-between items-center px-5 py-3 lg:px-20"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6, ease: "easeOut"}}
            >
                <motion.div
                    className='lg:mr-10 cursor-pointer flex items-center space-x-4'
                    whileHover={{scale: 1.1}}
                    transition={{type: "spring", stiffness: 300}}
                >
                    <li onClick={() => navigate('/')} className='logo font-semibold text-gray-300 text-2xl list-none'>
                        Vorder
                    </li>
                </motion.div>




            <div className='flex items-center space-x-2 lg:space-x-10'>

                <motion.div whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                    <IconButton>
                        <SearchIcon sx={{fontSize: "1.5rem"}}/>
                    </IconButton>
                </motion.div>


                <motion.div whileHover={{rotate: 10}} transition={{type: "spring", stiffness: 200}}>
                    {
                        user
                            ?
                            <Avatar
                                onClick={handleClick}
                                size="small"
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                sx={{bgcolor: "white", color: pink.A400}}>{user?.username[0].toUpperCase()}</Avatar>
                            :
                            <IconButton onClick={() => navigate('/account/login')}>
                                <Person/>
                            </IconButton>
                    }


                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        slotProps={{
                            paper: {
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&::before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            },
                        }}
                        transformOrigin={{horizontal: 'right', vertical: 'top'}}
                        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                    >
                        <MenuItem onClick={() => navigate("/my-profile")}>
                            My Profile
                        </MenuItem>

                        <Divider/>
                        {
                            user?.roles[0]?.name === "ADMIN" && <MenuItem onClick={() => navigate("/admin/restaurant")}>
                                Go to admin dashboard
                            </MenuItem>
                        }


                        <MenuItem onClick={handleLogout}>
                            <ListItemIcon>
                                <Logout fontSize="small"/>
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>


                </motion.div>

                <motion.div whileHover={{scale: 1.2}} whileTap={{scale: 0.9}}>
                    <IconButton onClick={() => navigate("/cart")}>
                        <Badge color='success' badgeContent={cart?.items?.length}>
                            <ShoppingCartIcon sx={{fontSize: "1.5rem"}}/>
                        </Badge>
                    </IconButton>
                </motion.div>
            </div>

            </motion.div>


          <NavbarLower />
        </div>
    );
};

export default Navbar;

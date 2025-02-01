import React, {useContext, useEffect} from 'react';
import {assets} from "../../assets/assets";
import {Chip, IconButton} from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {AppContext} from "../../context/AppContext";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {removeCartItem, updateCartItem} from "../../State/Cart/Action";

const CartItem = ( { item } ) => {

    const {currency, jwt} = useContext(AppContext)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const token = localStorage.getItem("jwt")

    const handleUpdateCartItem = (value) => {
        if(value === -1 && item.quantity === 1){
            handleRemoveCartItem()
        }

        const data = {
            cartItemId: item.id,
            quantity: item.quantity + value
        }

        dispatch(updateCartItem({data, jwt}))
    }

    const handleRemoveCartItem = () => {
        dispatch(removeCartItem({cartItemId: item.id, jwt: jwt || token}))
    }

    useEffect(() => {

    }, []);


    return (
        <div className='px-5'>
            <div className='lg:flex items-center lg:space-x-5'>
                <div>
                    <img className='w-[5rem] h-[5rem] object-cover' src={item?.images[0]} alt='' />
                </div>

                <div className='flex items-center justify-between lg:w-[70%]'>
                    <div className='space-y-1 lg:space-y-3 w-full'>
                        <p>{item.productName}</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center space-x-1'>
                                <IconButton onClick={() => handleUpdateCartItem(-1)}>
                                    <RemoveCircleOutlineIcon/>
                                </IconButton>
                                <div className='w-5 h-5 text-xs flex items-center justify-center'>
                                    {item.quantity}
                                </div>
                                <IconButton onClick={() => handleUpdateCartItem(1)}>
                                    <AddCircleOutlineIcon/>
                                </IconButton>
                            </div>
                        </div>
                    </div>
                    <p>{currency}{item.totalPrice}</p>
                </div>
            </div>

        </div>
    );
};

export default CartItem;

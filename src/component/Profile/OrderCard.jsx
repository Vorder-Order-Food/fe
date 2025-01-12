import React, {useContext} from 'react';
import {Button, Card} from "@mui/material";
import {assets} from "../../assets/assets";
import {AppContext} from "../../context/AppContext";

const OrderCard = ({item, order}) => {
    const {currency} = useContext(AppContext)
    return (
        <Card className='flex justify-between items-center p-5'>
            <div className='flex items-center space-x-5'>
                <img className='h-16 w-16' src={item.food.images[0]} alt=''/>
            </div>
            <div>
                <p>{item.food.name}</p>
                <p>{currency}{item.totalPrice}</p>
            </div>
            <div>
                <Button className='cursor-not-allowed'>
                    {order.orderStatus}
                </Button>
            </div>
        </Card>
    );
};

export default OrderCard;

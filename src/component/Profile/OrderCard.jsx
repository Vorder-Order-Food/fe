import React, {useContext} from 'react';
import {Button, Card} from "@mui/material";
import {assets} from "../../assets/assets";
import {AppContext} from "../../context/AppContext";


const statusImages = {
    PENDING: assets.pending,
    COMPLETED: assets.pending,
    OUT_FOR_DELIVERY: assets.delivery,
    DELIVERED: assets.deliverysuccess
};
const OrderCard = ({item}) => {
    const {currency} = useContext(AppContext)
    return (
        <Card className='flex justify-between items-center p-5'>
            <div className='flex items-center space-x-5'>
                <img
                    className='h-16 w-16'
                    src={statusImages[item?.orderStatus] || "/images/default.png"}
                    alt={item?.orderStatus}
                />
            </div>
            <div className='flex flex-1 justify-center'>
                {/*<p>{item.food.name}</p>*/}
                <p>{currency}{item?.totalPrice}</p>
            </div>
            <div className='flex flex-1 justify-end'>
                <Button className='cursor-not-allowed'>
                    {item?.orderStatus}
                </Button>
            </div>
        </Card>
    );
};

export default OrderCard;

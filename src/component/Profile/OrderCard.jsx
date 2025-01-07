import React from 'react';
import {Button, Card} from "@mui/material";
import {assets} from "../../assets/assets";

const OrderCard = () => {
    return (
        <Card className='flex justify-between items-center p-5'>
            <div className='flex items-center space-x-5'>
                <img className='h-16 w-16' src={assets.banner} alt=''/>
            </div>
            <div>
                <p>Pizza</p>
                <p>400</p>
            </div>
            <div>
                <Button className='cursor-not-allowed'>
                    completed
                </Button>
            </div>
        </Card>
    );
};

export default OrderCard;

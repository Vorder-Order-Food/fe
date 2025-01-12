import React, {useContext, useEffect} from 'react';
import OrderCard from "./OrderCard";
import {AppContext} from "../../context/AppContext";
import {useDispatch, useSelector} from "react-redux";
import {getUserOrders} from "../../State/Orders/Action";

const Orders = () => {
    const {jwt} = useContext(AppContext);

    const { orders } = useSelector((store) => store.order)
    const { user } = useSelector((store) => store.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserOrders(jwt))
    }, [jwt]);

    return (
        <div className='flex items-center flex-col'>
            <h1 className='text-xl text-center py-7 font-semibold'>My Orders</h1>
            <div className='space-y-5 w-full lg:w-1/2'>
                {
                    orders?.map((order) => order.items.map((item) =>
                        <OrderCard order={order} item={item} key={item.id}/>))
                }
            </div>
        </div>
    );
};

export default Orders;

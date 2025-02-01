import React, { useContext, useEffect, useState } from 'react';
import OrderCard from "./OrderCard";
import { AppContext } from "../../context/AppContext";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrders } from "../../State/Orders/Action";
import { Pagination, Stack } from "@mui/material";
import { motion } from "framer-motion";

const Orders = () => {
    const { jwt } = useContext(AppContext);
    const { orders } = useSelector((store) => store.order);
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        dispatch(getUserOrders(jwt));
    }, [jwt, dispatch]);

    const indexOfLastOrder = currentPage * itemsPerPage;
    const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
    const currentOrders = orders?.slice()
        .sort((a,b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(indexOfFirstOrder, indexOfLastOrder);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <div className='flex items-center flex-col'>
            <motion.h1
                className='text-xl text-center py-7 font-semibold'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                My Orders
            </motion.h1>

            <motion.div
                className='space-y-5 w-full lg:w-1/2'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {currentOrders?.map((order, index) => (
                    <motion.div
                        key={order.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                        <OrderCard item={order} />
                    </motion.div>
                ))}
            </motion.div>

            {/* Pagination */}
            <Stack spacing={2} className="mt-5">
                <Pagination
                    count={Math.ceil((orders?.length || 0) / itemsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                />
            </Stack>
        </div>
    );
};

export default Orders;

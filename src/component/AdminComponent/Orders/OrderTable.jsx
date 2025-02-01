import React, { useContext, useEffect, useState } from 'react';
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Card,
    CardHeader,
    Chip,
    Menu,
    MenuItem, Pagination,
    Paper, Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import { AppContext } from '../../../context/AppContext';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurantOrder, updateOrderStatus } from '../../../State/Restaurant Order/Action';
import {getUserOrders} from "../../../State/Orders/Action";

const orderStatus = [
    { label: 'Pending', value: 'PENDING' },
    { label: 'Completed', value: 'COMPLETED' },
    { label: 'Out for delivery', value: 'OUT_FOR_DELIVERY' },
    { label: 'Delivered', value: 'DELIVERED' },
];

const OrderTable = () => {
    const { jwt, currency } = useContext(AppContext);
    const dispatch = useDispatch();
    const { usersRestaurant } = useSelector((store) => store.restaurant);
    const { orders } = useSelector((store) => store.restaurantOrder);

    const [menuState, setMenuState] = useState({});


    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;


    const indexOfLastOrder = currentPage * itemsPerPage;
    const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
    const currentOrders = orders
        ?.slice()
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(indexOfFirstOrder, indexOfLastOrder);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };


    const handleClick = (event, id) => {
        setMenuState({ [id]: event.currentTarget });
    };

    const handleClose = (id) => {
        setMenuState((prevState) => ({ ...prevState, [id]: null }));
    };



    const handleUpdateOrderStatus = (orderId, orderStatus) => {
        dispatch(
            updateOrderStatus({
                orderId,
                orderStatus,
                jwt,
            })
        );
        handleClose(orderId);
    };

    useEffect(() => {
        dispatch(
            fetchRestaurantOrder({
                restaurantId: usersRestaurant?.id,
                jwt,
            })
        );
    }, [jwt]);

    return (
        <Box>
            <Card className="mt-1">
                <CardHeader title="All Orders" sx={{ pt: 2, alignItems: 'center' }} />

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {/*<TableCell align="right">Image</TableCell>*/}
                                <TableCell align="right">Customer</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Status</TableCell>
                                <TableCell align="right">Update</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {currentOrders?.map((item) => (
                                <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                                    {/*<TableCell align="right">*/}
                                    {/*    <AvatarGroup>*/}
                                    {/*        {item.map((orderItem, index) => (*/}
                                    {/*            <Avatar key={index} src={orderItem.food?.images} />*/}
                                    {/*        ))}*/}
                                    {/*    </AvatarGroup>*/}
                                    {/*</TableCell>*/}
                                    <TableCell align="right">{item?.username}</TableCell>
                                    <TableCell align="right">
                                        {currency}
                                        {item?.totalPrice}
                                    </TableCell>
                                    <TableCell align="right">
                                        {item?.items.map((orderItem, index) => (
                                            <p key={index}>{orderItem?.productName}</p>
                                        ))}
                                    </TableCell>

                                    <TableCell align="right">{item.orderStatus}</TableCell>

                                    <TableCell align="right">
                                        <Button
                                            id={`button-${item.id}`}
                                            aria-controls={menuState[item.id] ? `menu-${item.id}` : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={menuState[item.id] ? 'true' : undefined}
                                            onClick={(event) => handleClick(event, item.id)}
                                        >
                                            Update
                                        </Button>
                                        <Menu
                                            id={`menu-${item.id}`}
                                            anchorEl={menuState[item.id]}
                                            open={Boolean(menuState[item.id])}
                                            onClose={() => handleClose(item.id)}
                                            MenuListProps={{
                                                'aria-labelledby': `button-${item.id}`,
                                            }}
                                        >
                                            {orderStatus.map((status) => (
                                                <MenuItem
                                                    key={status.value}
                                                    onClick={() => handleUpdateOrderStatus(item.id, status.value)}
                                                >
                                                    {status.label}
                                                </MenuItem>
                                            ))}
                                        </Menu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>

            <Stack spacing={2} className="mt-5">
                <Pagination
                    count={Math.ceil((orders?.length || 0) / itemsPerPage)}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                />
            </Stack>
        </Box>
    );
};

export default OrderTable;

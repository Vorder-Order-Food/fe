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
    MenuItem,
    Paper,
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
                                <TableCell>Id</TableCell>
                                <TableCell align="right">Image</TableCell>
                                <TableCell align="right">Customer</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">Name</TableCell>
                                <TableCell align="right">Ingredients</TableCell>
                                <TableCell align="right">Status</TableCell>
                                <TableCell align="right">Update</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orders.map((item) => (
                                <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell component="th" scope="row">
                                        {item.id}
                                    </TableCell>
                                    <TableCell align="right">
                                        <AvatarGroup>
                                            {item.items.map((orderItem, index) => (
                                                <Avatar key={index} src={orderItem.food?.images} />
                                            ))}
                                        </AvatarGroup>
                                    </TableCell>
                                    <TableCell align="right">{item.customer?.fullName}</TableCell>
                                    <TableCell align="right">
                                        {currency}
                                        {item?.totalPrice}
                                    </TableCell>
                                    <TableCell align="right">
                                        {item?.items.map((orderItem, index) => (
                                            <p key={index}>{orderItem.food?.name}</p>
                                        ))}
                                    </TableCell>
                                    <TableCell align="right">
                                        {item.items?.map((orderItem, index) => (
                                            <div key={index}>
                                                {orderItem.ingredients.map((ingredient, idx) => (
                                                    <Chip key={idx} label={ingredient} />
                                                ))}
                                            </div>
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
        </Box>
    );
};

export default OrderTable;

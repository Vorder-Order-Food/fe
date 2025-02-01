import React, {useContext, useEffect} from 'react';
import {
    Avatar,
    Box,
    Card, CardActions,
    CardHeader, Chip, IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import CreateIcon from '@mui/icons-material/Create';
import {Delete} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {AppContext} from "../../../context/AppContext";
import {useDispatch, useSelector} from "react-redux";
import {deleteFood, getMenuItemsByRestaurantId} from "../../../State/Menu/Action";

const MenuTable = () => {

    const {jwt, currency} = useContext(AppContext)
    const dispatch = useDispatch()
    const {usersRestaurant} = useSelector((store) => store.restaurant)
    const {menuItems} = useSelector((store) => store.menu)
    const navigate = useNavigate()

    const handleDelete = (id) => {
        dispatch(deleteFood({
            foodId: id,
            jwt
        }))
    }

    useEffect(() => {
        dispatch(getMenuItemsByRestaurantId({
            jwt,
            restaurantId: usersRestaurant?.id,
            vegetarian: false,
            nonveg: false,
            seasonal: false,
            foodCategory: ''
        }))
    }, [jwt]);

    return (
        <Box>
            <Card className='mt-1'>
                <CardHeader
                    title={"Menu"}
                    sx={{pt: 2, alignItems: "center"}}
                    action={
                        <IconButton onClick={() => navigate('/admin/restaurant/add-menu')} aria-label="settings">
                            <CreateIcon/>
                        </IconButton>
                    }
                />


                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">Image</TableCell>
                                <TableCell align="right">Title</TableCell>
                                <TableCell align="right">Ingredients</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">availability</TableCell>
                                <TableCell align="right">delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {menuItems?.map((item) => (
                                <TableRow
                                    key={item.id}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell component="th" scope="row">
                                        <Avatar src={item.images[0]}/>
                                    </TableCell>
                                    <TableCell align="right">
                                        {item.name}
                                    </TableCell>
                                    <TableCell align="right">
                                        {item.ingredients.map((ingredient) => <Chip label={ingredient.name}/>)}
                                    </TableCell>
                                    <TableCell align="right">{currency}{item.price}</TableCell>
                                    <TableCell align="right">{item.available ? 'in stock' : 'out of stock'}</TableCell>
                                    <TableCell align="right">
                                        <IconButton onClick={() => handleDelete(item.id)} color='primary'>
                                            <Delete/>
                                        </IconButton>
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

export default MenuTable;

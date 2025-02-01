import React, {useContext, useEffect} from 'react';
import {
    Box, Button,
    Card,
    CardHeader,
    IconButton, Modal,
    Paper,
    Table, TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import CreateFoodCategoryForm from "../FoodCategory/CreateFoodCategoryForm";
import CreateIngredientForm from "./CreateIngredientForm";
import {AppContext} from "../../../context/AppContext";
import {useDispatch, useSelector} from "react-redux";
import {getIngredientsOfRestaurant, updateStockOfIngredient} from "../../../State/Ingredients/Action";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const IngredientsTable = () => {

    const { jwt } = useContext(AppContext)
    const dispatch = useDispatch()
    const { ingredients } = useSelector((store) => store.ingredients)
    const { usersRestaurant } = useSelector((store) => store.restaurant)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleUpdateStock = (id) => {
        dispatch(updateStockOfIngredient({
            id,
            jwt
        }))
    }

    useEffect(() => {
        dispatch(getIngredientsOfRestaurant({
            jwt,
            id: usersRestaurant?.id
        }))
    }, [jwt]);


    return (
        <Box>
            <Card className='mt-1'>
                <CardHeader
                    title={"Ingredients"}
                    sx={{pt:2, alignItems:"center"}}
                    action={
                        <IconButton onClick={handleOpen} aria-label="settings">
                            <CreateIcon />
                        </IconButton>
                    }
                />


                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Id</TableCell>
                                <TableCell align="left">Name</TableCell>
                                <TableCell align="left">Category</TableCell>
                                <TableCell align="left">Availability</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ingredients.map((item) => (
                                <TableRow
                                    key={item.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {item.id}
                                    </TableCell>
                                    <TableCell align="left">{item.name}</TableCell>
                                    <TableCell align="left">{item.category.name}</TableCell>

                                   <TableCell align="left">
                                       <Button onClick={() => handleUpdateStock(item.id)}>
                                           {item.inStoke ? 'in stock' : 'out of stock'}
                                       </Button>
                                   </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Card>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <CreateIngredientForm/>
                </Box>
            </Modal>
        </Box>
    );
};

export default IngredientsTable;

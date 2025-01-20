import React from 'react';
import {
    Box,
    Card,
    CardHeader,
    IconButton,
    Paper,
    Table, TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";

const IngredientCategoryTable = () => {
    return (
        <Box>
            <Card className='mt-1'>
                <CardHeader
                    title={"Ingredient Category"}
                    sx={{pt:2, alignItems:"center"}}
                    action={
                        <IconButton aria-label="settings">
                            <CreateIcon />
                        </IconButton>
                    }
                />


                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">Id</TableCell>
                                <TableCell align="left">Name</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {ingredientCategories.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {1}
                                    </TableCell>
                                    <TableCell align="left">{row.calories}</TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>


            </Card>
        </Box>
    );
};

export default IngredientCategoryTable;

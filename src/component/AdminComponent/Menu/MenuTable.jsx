import React from 'react';
import {
    Box,
    Card, CardActions,
    CardHeader, IconButton,
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

const MenuTable = () => {
    return (
        <Box>
            <Card className='mt-1'>
                <CardHeader
                    title={"Menu"}
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
                                <TableCell align="right">Image</TableCell>
                                <TableCell align="right">Title</TableCell>
                                <TableCell align="right">Ingredients</TableCell>
                                <TableCell align="right">Price</TableCell>
                                <TableCell align="right">availability</TableCell>
                                <TableCell align="right">delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {menus.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {1}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                    <TableCell align="right"><IconButton>
                                        <Delete/>
                                    </IconButton></TableCell>
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

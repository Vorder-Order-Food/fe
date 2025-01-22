import React, {useState} from 'react';
import {Card, FormControl, FormControlLabel, Radio, RadioGroup, Typography} from "@mui/material";
import OrderTable from "./OrderTable";

const orderStatus = [
    {label: "Pending", value:"PENDING"},
    {label: "Completed", value:"COMPLETED"},
    {label: "Out for delivery", value:"OUT_FOR_DELIVERY"},
    {label: "Delivered", value:"DELIVERED"}
]
const Orders = () => {

    const [filterValue, setFilterValue] = useState('')

    const handleFilter = (e, value) => {
        setFilterValue(value)
    }

    return (
        <div className='px-2'>
            <Card className='p-5'>
                <Typography sx={{paddingBottom:"1rem"}} variant='h5'>
                    Order Status
                </Typography>
                <FormControl>
                    <RadioGroup onChange={handleFilter} row name='category' value={filterValue || "all"}>
                        {
                            orderStatus.map((item) =>
                            <FormControlLabel key={item.label}
                                              control={<Radio/>}
                                              value={item.value}  l
                                              label={item.label}
                                              sx={{color:"gray"}}
                            />
                            )
                        }
                    </RadioGroup>
                </FormControl>

            </Card>

            <OrderTable/>

        </div>
    );
};

export default Orders;

import React from 'react';
import Grid from "@mui/material/Grid2";
import MenuTable from "./Menu/MenuTable";
import OrderTable from "./Orders/OrderTable";

const Dashboard = () => {
    return (
        <div>

            <Grid container spacing={2}>
                <Grid item size={12} lg={12}>
                    <MenuTable/>
                </Grid>

                <Grid item size={12} lg={12}>
                    <OrderTable/>
                </Grid>
            </Grid>

        </div>
    );
};

export default Dashboard;

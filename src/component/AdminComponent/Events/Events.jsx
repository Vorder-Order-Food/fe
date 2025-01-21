import React, {useState} from 'react';
import {Box, Button, Modal, TextField} from "@mui/material";
import Grid from '@mui/material/Grid2';
import dayjs from "dayjs";
import {DateTimePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";

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

const initialValues = {
    image: '',
    location: '',
    name: '',
    startedAt: null,
    endAt: null
}

const Events = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [formData, setFormData] = useState(initialValues)


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submit event", formData)
        setFormData(initialValues)

    }

    const handleFormChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleDateChange = (date, dateType) => {
        const formattedDate = dayjs(date).format("MMMM DD, YYYY hh:mm A")
        setFormData({...formData, [dateType]: formattedDate})
    }

    return (
        <div>
            <div className='p-5'>
                <Button onClick={handleOpen} variant='contained'>Create New Event</Button>


                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>

                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        name='image'
                                        label='Image Url'
                                        variant='outlined'
                                        fullWidth
                                        value={formData.image}
                                        onChange={handleFormChange}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        name='location'
                                        label='Location'
                                        variant='outlined'
                                        fullWidth
                                        value={formData.location}
                                        onChange={handleFormChange}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        name='name'
                                        label='Event Name'
                                        variant='outlined'
                                        fullWidth
                                        value={formData.name}
                                        onChange={handleFormChange}
                                    />
                                </Grid >

                                <Grid item xs={12}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                                        <DateTimePicker
                                            renderInput={(props => <TextField {...props} />)}
                                            className='w-full'
                                            sx={{width: "100%"}}
                                            inputFormat="MM/dd/yyyy hh:mm a"
                                            label='Start date and time'
                                            value={formData.startedAt}
                                            onChange={(value) => handleDateChange(value, "startedAt")}
                                        />

                                    </LocalizationProvider>
                                </Grid>


                                <Grid item xs={12}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                                        <DateTimePicker
                                            renderInput={(props => <TextField {...props} />)}
                                            className='w-full'
                                            sx={{width: "100%"}}
                                            inputFormat="MM/dd/yyyy hh:mm a"
                                            label='End date and time'
                                            value={formData.endAt}
                                            onChange={(value) => handleDateChange(value, "endAt")}
                                        />

                                    </LocalizationProvider>
                                </Grid>


                            </Grid>

                            <Box mt={2}>
                                <Button type='submit' variant='contained'>
                                    Create event
                                </Button>
                            </Box>

                        </form>
                    </Box>
                </Modal>
            </div>
        </div>
    );
};

export default Events;

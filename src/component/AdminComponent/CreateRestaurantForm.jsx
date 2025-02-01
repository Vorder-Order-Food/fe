import React, {useContext, useState} from 'react';
import {useFormik} from "formik";
import {Button, CircularProgress, Grid, IconButton, TextField} from "@mui/material";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';
import {uploadImageToCloudinary} from "./util/UploadImageToCloudinary";
import {useDispatch} from "react-redux";
import {createRestaurant} from "../../State/Restaurant/Action";
import {AppContext} from "../../context/AppContext";
import {useNavigate} from "react-router-dom";


const initialValues = {
    name: "",
    price: "",
    images: []
}

const CreateRestaurantForm = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch()
    const { jwt } = useContext(AppContext)
    const [uploadImage, setUploadImage] = useState(false)
    const formik = useFormik({
        initialValues,
        validate: (values) => {
            const errors = {};

            if (!values.price || isNaN(values.price)) {
                errors.price = 'Price must be a valid number';
            } else {
                const priceAsLong = parseInt(values.price, 10);
                if (isNaN(priceAsLong)) {
                    errors.price = 'Price must be a valid number';
                }
            }

            return errors;
        },
        onSubmit: (values) => {
            const priceAsLong = parseInt(values.price, 10);
            const data = {
                name: values.name,
                price: priceAsLong,
                images: values.images
            };

            console.log("data ---", data);
            dispatch(createRestaurant({ data, token: jwt }));
        }
    });

    const handleImageChange = async (e) => {
        const file = e.target.files[0]
        setUploadImage(true)
        const image = await uploadImageToCloudinary(file)
        formik.setFieldValue("images", [...formik.values.images, image])
        setUploadImage(false)
    }

    const handleRemoveImage = (index) => {
        const updatedImages = [...formik.values.images]
        updatedImages.splice(index, 1)
        formik.setFieldValue("images", updatedImages)
    }
    return (
        <div className='py-10 px-5 lg:flex items-center justify-center min-h-screen'>
            <div className='lg:max-w-4xl'>
                <h1 className='font-bold text-2xl text-center py-2'>
                    Add New Food
                </h1>
            <form onSubmit={formik.handleSubmit} className='space-y-4'>
                <Grid container spacing={2}>
                    <Grid item xs={12} className='flex flex-wrap gap-5'>
                        <input type="file"
                               accept='image/*'
                               id='fileInput'
                               style={{display: 'none'}}
                               onChange={handleImageChange}

                        />
                        <label htmlFor='fileInput' className='relative'>
                            <span className='w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-600'>
                                <AddPhotoAlternateIcon className='text-white'  />
                            </span>
                            {
                                uploadImage && <div className='absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center'>
                                <CircularProgress />
                                </div>
                            }
                        </label>

                        <div className='flex flex-wrap gap-2 '>
                            {
                                formik.values.images.map((item, index) =>
                                    <div className='relative'>
                                    <img
                                        className='w-24 h-24 object-cover'
                                        key={index}
                                        src={item}
                                        alt=''
                                    />
                                    <IconButton
                                        size='small'
                                        sx={{position:"absolute", top: 0, right: 0, outline:"none"}}
                                        onClick={() => handleRemoveImage(index)}>
                                        <CloseIcon sx={{fontSize:"1rem"}}/>
                                    </IconButton>
                                </div> )
                            }
                        </div>
                    </Grid>


                    <Grid item xs={12} >
                       <TextField fullWidth id='name' name='name' label='Name' variant='outlined'
                                  onChange={formik.handleChange}
                                  value={formik.values.name}
                       >

                       </TextField>
                    </Grid>



                    <Grid item xs={12} >
                        <TextField fullWidth id='price' name='price' label='Price' variant='outlined'
                                   onChange={formik.handleChange}
                                   value={formik.values.price}
                        >

                        </TextField>
                    </Grid>


                </Grid>

                <Button variant='contained' color='primary' type='submit'>
                    Create
                </Button>
            </form>

            </div>


        </div>
    );
};

export default CreateRestaurantForm;

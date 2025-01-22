import React, {useContext, useState} from 'react';
import {Button, TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {createCategory} from "../../../State/Restaurant/Action";
import {AppContext} from "../../../context/AppContext";

const CreateFoodCategoryForm = () => {

    const { jwt } = useContext(AppContext)
    const dispatch = useDispatch()

    const [formData, setFormData] = useState(
        {
            categoryName: '',
            restaurantId: ''
        }
    )
    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            name : formData.categoryName,
            restaurantId: {
                id: 1
            }
        }
        dispatch(createCategory({
            reqData: data,
            jwt: jwt
        }))
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData(
            {
                ...formData, [name]: value
            }
        )
    }
    return (
        <div className=''>
            <div className='p-5'>
                <h1 className='text-gray-400 text-center text-xl pb-10'>Create Category</h1>

                <form className='space-y-5' onSubmit={handleSubmit}>
                    <TextField fullWidth id='categoryName' name='categoryName' label='Food Category' variant='outlined'
                               onChange={handleInputChange}
                               value={formData.categoryName}
                    />

                    <Button variant='contained' type='submit' >
                        Create
                    </Button>
                </form>

            </div>
        </div>
    );
};

export default CreateFoodCategoryForm;

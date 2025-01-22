import React, {useContext, useState} from 'react';
import {Button, TextField} from "@mui/material";
import {AppContext} from "../../../context/AppContext";
import {useDispatch, useSelector} from "react-redux";
import {createIngredientCategory} from "../../../State/Ingredients/Action";

const CreateIngredientCategoryForm = () => {

    const { jwt } = useContext(AppContext)
    const dispatch = useDispatch()
    const { usersRestaurant } = useSelector((store) => store.restaurant)

    const [formData, setFormData] = useState(
        {
            name: '',
        }
    )
    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            name: formData.name,
            restaurantId: usersRestaurant?.id
        }
        dispatch(createIngredientCategory({
            data,
            jwt
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
                <h1 className='text-gray-400 text-center text-xl pb-10'>Create Ingredient Category</h1>

                <form className='space-y-5' onSubmit={handleSubmit}>
                    <TextField fullWidth id='name' name='name' label='Category' variant='outlined'
                               onChange={handleInputChange}
                               value={formData.name}
                    />

                    <Button variant='contained' type='submit' >
                        Create
                    </Button>
                </form>

            </div>
        </div>
    );
};


export default CreateIngredientCategoryForm;

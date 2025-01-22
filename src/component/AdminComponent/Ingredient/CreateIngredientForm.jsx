import React, {useContext, useState} from 'react';
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {AppContext} from "../../../context/AppContext";
import {useDispatch, useSelector} from "react-redux";
import {createIngredient, createIngredientCategory} from "../../../State/Ingredients/Action";


const CreateIngredientForm = () => {

    const { jwt } = useContext(AppContext)
    const dispatch = useDispatch()
    const { usersRestaurant } = useSelector((store) => store.restaurant)
    const { category } = useSelector((store) => store.ingredients)

    const [formData, setFormData] = useState(
        {
            name: '',
            categoryId: ''
        }
    )
    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            ...formData,
            restaurantId: usersRestaurant?.id
        }
        dispatch(createIngredient({
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
                <h1 className='text-gray-400 text-center text-xl pb-10'>Create Ingredient</h1>

                <form className='space-y-5' onSubmit={handleSubmit}>
                    <TextField fullWidth id='name' name='name' label='Ingredient Name' variant='outlined'
                               onChange={handleInputChange}
                               value={formData.name}
                    />


                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="categoryId"
                            value={formData.categoryId}
                            label='Category'
                            onChange={handleInputChange}
                            name="categoryId"
                        >
                            {
                                category.map((item) =>
                                    <MenuItem value={item.id}>{item.name}</MenuItem>
                                )
                            }
                        </Select>
                    </FormControl>

                    <Button variant='contained' type='submit' >
                        Create
                    </Button>
                </form>

            </div>
        </div>
    );
};

export default CreateIngredientForm;

import React, {useState} from 'react';
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@mui/material";


const CreateIngredientForm = () => {


    const [formData, setFormData] = useState(
        {
            name: '',
            ingredientCategoryId: ''
        }
    )
    const handleSubmit = () => {
        const data = {
            name : formData.name,
            restaurantId: {
                id: 1
            }
        }
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
                    <TextField fullWidth id='categoryName' name='categoryName' label='Category Name' variant='outlined'
                               onChange={handleInputChange}
                               value={formData.categoryName}
                    />


                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="ingredientCategoryId"
                            value={formData.ingredientCategoryId}
                            label='Category'
                            onChange={handleInputChange}
                            name="ingredientCategoryId"
                        >
                            <MenuItem value={true}>Yes</MenuItem>
                            <MenuItem value={false}>No</MenuItem>
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

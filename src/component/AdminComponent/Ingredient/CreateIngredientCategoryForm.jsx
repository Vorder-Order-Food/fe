import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";

const CreateIngredientCategoryForm = () => {


    const [formData, setFormData] = useState(
        {
            name: '',
        }
    )
    const handleSubmit = () => {

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

import React, {useContext, useState} from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary, Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Typography
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {assets} from "../../assets/assets";
import {AppContext} from "../../context/AppContext";
import {categorizeIngredients} from "../util/categorizeIngredients";
import {useDispatch} from "react-redux";
import {addItemToCart} from "../../State/Cart/Action";


const demo = [
    {
        category: "Nuts & seeds",
        ingredients: ["Cashews"]
    },
    {
        category: "Protein",
        ingredients: ["Bacon strips", "Ground Beefs"]
    }
]

const MenuCard = ({item}) => {

    const {currency, jwt} = useContext(AppContext)
    const [selectedIngredients, setSelectedIngredients] = useState([])
    const dispatch = useDispatch()

    const handleCheckBoxChange = (itemName) => {
        if(selectedIngredients.includes(itemName)){
            setSelectedIngredients(selectedIngredients.filter((item) => item !== itemName))
        } else {
            setSelectedIngredients([...selectedIngredients, itemName])
        }
    }

    const handleAddItemToCart = (e) => {

        e.preventDefault()

        const regData = {
            token: jwt,
            cartItem: {
                foodId: item.id,
                quantity: 1,
                ingredients: selectedIngredients
            }
        }

        dispatch(addItemToCart(regData))
        console.log('cart', regData)
    }


    return (
        <div>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <div className='lg:flex items-center justify-between'>
                        <div className='lg:flex items-center lg:gap-5'>
                            <img className='w-[7rem] h-[7rem] object-cover' src={item.images[0]} alt=''/>
                            <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                                <p className='font-semibold text-xl'>{item.name}</p>
                                <p className='font-semibold text-xl'>{currency}{item.price}</p>
                                <p className='text-gray-400'>{item.price}</p>
                            </div>
                        </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse*/}
                    {/*malesuada lacus ex, sit amet blandit leo lobortis eget.*/}
                    <form onSubmit={(e) => handleAddItemToCart(e)}>
                        <div className='flex gap-5 flex-wrap'>
                            {
                                Object.keys(categorizeIngredients(item.ingredients)).map((category) =>
                                    <div>
                                        <p>{category}</p>
                                        <FormGroup>
                                            {
                                                categorizeIngredients(item.ingredients)[category].map((item, index) =>
                                                    <FormControlLabel
                                                        key={item.id}
                                                        control={<Checkbox
                                                            onChange={(e) => handleCheckBoxChange(item.name)}/>}
                                                        label={item?.name}/>
                                                )
                                            }
                                        </FormGroup>
                                    </div>
                                )
                            }
                        </div>

                        <div className='pt-5'>
                            <Button type='submit' variant='contained' disabled={false}>
                                {true ? "Add to cart" : "Out of stock"}
                            </Button>
                        </div>
                    </form>
                </AccordionDetails>
            </Accordion>

        </div>
    );
};

export default MenuCard;

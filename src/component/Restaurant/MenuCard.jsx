import React, {useContext} from 'react';
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


const demo = [
    {
        category:"Nuts & seeds",
        ingredients:["Cashews"]
    },
    {
        category:"Protein",
        ingredients:["Bacon strips", "Ground Beefs"]
    }
]

const MenuCard = () => {

    const {currency} = useContext(AppContext)
    const handleCheckBoxChange = (e) => {
        console.log(e)
    }

    return (
        <div>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <div className='lg:flex items-center justify-between'>
                        <div className='lg:flex items-center lg:gap-5'>
                            <img className='w-[7rem] h-[7rem] object-cover' src={assets.banner} alt=''/>
                            <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                                <p className='font-semibold text-xl'>Pizza</p>
                                <p className='font-semibold text-xl'>{currency}100</p>
                                <p className='text-gray-400'>nice nice nice !!!</p>
                            </div>
                        </div>
                    </div>
                    {/*<Typography component="span">Accordion 1</Typography>*/}
                </AccordionSummary>
                <AccordionDetails>
                    {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse*/}
                    {/*malesuada lacus ex, sit amet blandit leo lobortis eget.*/}
                    <form>
                        <div className='flex gap-5 flex-wrap'>
                            {
                                demo.map((item) =>
                                    <div>
                                        <p>{item.category}</p>
                                        <FormGroup>
                                            {
                                                item.ingredients.map((item) =>
                                                    <FormControlLabel control={<Checkbox
                                                        onChange={(e) => handleCheckBoxChange(item)} />}
                                                                      label={item} />
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

import React, {useContext, useEffect} from 'react';
import {Box, Button, Card, Divider, Grid, Modal, TextField} from "@mui/material";
import CartItem from "./CartItem";
import {AppContext} from "../../context/AppContext";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {createOrder} from "../../State/Orders/Action";
import {clearCart, findCart} from "../../State/Cart/Action";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline: 'none',
    boxShadow: 24,
    p: 4,
};



const Cart = () => {

    const {currency, jwt} = useContext(AppContext);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate()

    const { cartItems, cart } = useSelector((store) => store.cart)
    const dispatch = useDispatch()


    const createOrderUsingSelectedAddress = () => {

    }


    const handleSubmit = async (values) => {
       try{
           const data ={
               jwt: jwt,
               order:{
                   // restaurantId: cartItems[0].food?.restaurant.id,
               }
           }
           await dispatch(createOrder(data))

           console.log("form value", values)
           await Swal.fire({
               position: "top-end",
               title: "Order Success! Please check your email!",
               icon: "success",
               showConfirmButton: false,
               timer: 1500,
               backdrop: false
           });
           // dispatch(clearCart())
           // navigate("/my-profile/orders")
       } catch (e){
           console.log("cart error", e)
           await Swal.fire({
               position: "top-end",
               title: "Out of stock",
               icon: "error",
               showConfirmButton: false,
               timer: 1500,
               backdrop: false
           });
       }

    }
    const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    useEffect(() => {
        if (totalQuantity > 0) {
            dispatch(findCart(jwt));
        }
        console.log(cartItems);
    }, [totalQuantity, jwt]);

    return (
        <>
            <main className='lg:flex justify-between'>
                <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
                    {
                       cartItems?.map((item) => <CartItem key={item.id} item={item}/>)
                    }

                    <Divider/>

                    <div className='px-5 text-sm'>
                        <p className='font-extralight py-5'>Bill Details</p>
                        <div className='space-y-3'>
                            <div className='flex justify-between text-gray-400'>
                                <p>Item Total</p>
                                <p>{currency} {cart?.total}</p>
                            </div>

                            <div className='flex justify-between text-gray-400'>
                                <p>Deliver Fee</p>
                                <p>{currency}40</p>
                            </div>

                            <div className='flex justify-between text-gray-400'>
                                <p>VTA</p>
                                <p>{currency}20</p>
                            </div>
                            <Divider/>
                        </div>
                        <div className='justify-between flex text-gray-400'>
                            <p>Total pay</p>
                            <p>{currency} {cart?.total + 40 + 20}</p>
                        </div>
                    </div>


                    <Button fullWidth variant="contained" onClick={handleSubmit} color="primary">
                        Save
                    </Button>
                </section>


                <Divider orientation="vertical" flexItem />


            </main>



        </>
    );
};

export default Cart;

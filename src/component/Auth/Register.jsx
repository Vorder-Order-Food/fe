import React from 'react';
import {Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import {Field, Form, Formik} from "formik";
import {useNavigate} from "react-router-dom";
import {loginUser, registerUser} from "../../State/Authentication/Action";
import {useDispatch} from "react-redux";

const initialValues = {
    username:'',
    email:'',
    password:'',
}

const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = async (values) => {
        console.log(values)
        dispatch(registerUser({userData:values, navigate}))
        navigate("/account/login")

    }
    return (
        <div>
            <Typography variant='h5' className='text-center'>
                Register
            </Typography>

            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form>
                    <Field
                        as={TextField}
                        name="username"
                        label="UserName"
                        fullWidth
                        variant="outlined"
                        margin="normal"

                    />

                    <Field
                        as={TextField}
                        name="email"
                        label="Email"
                        fullWidth
                        variant="outlined"
                        margin="normal"

                    />

                    <Field
                        as={TextField}
                        name="password"
                        label="Password"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        type="password"
                    />

                    {/*<FormControl fullWidth  margin="normal">*/}
                    {/*    <InputLabel id="role-label">Role</InputLabel>*/}
                    {/*    <Field*/}
                    {/*        as={Select}*/}
                    {/*        labelId="role-label"*/}
                    {/*        id="demo-simple-select"*/}
                    {/*        label="Role"*/}
                    {/*        name="role"*/}
                    {/*    >*/}
                    {/*        <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>*/}
                    {/*        <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>*/}
                    {/*    </Field>*/}
                    {/*</FormControl>*/}

                    <Button sx={{mt: 2, padding: "1rem"}} fullWidth type='submit' variant='contained'>
                        Register
                    </Button>

                </Form>

            </Formik>

            <Typography variant='body2' align='center' sx={{mt: 3}}>
                Have an account already?
                <Button onClick={() => navigate("/account/login")}>
                    login
                </Button>
            </Typography>
        </div>
    );
};

export default Register;

import React from 'react';
import {Box, Button} from "@mui/material";
import {fetchCustomers} from "../asyncActions/customers";
import {addCustomerAction, removeCustomerAction} from "../store/customerReducer";
import {useDispatch, useSelector} from "react-redux";

const MyCustomers = () => {
    const dispatch = useDispatch()
    const customers = useSelector(state => state.customers.customers)


    const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now()
        }
        dispatch(addCustomerAction(customer))
    }

    function removeCustomer(customer) {
        dispatch(removeCustomerAction(customer.id))
    }

    return (
        <React.Fragment>
            <Box>
                <Button
                    variant="outline"
                    onClick={() => addCustomer(prompt())}
                >Добавить клиента</Button>
                <Button
                    onClick={() => dispatch(fetchCustomers())}
                >
                    Получить клиентов из базы</Button>
            </Box>
            {customers.length > 0 ?
                <Box>
                    {customers.map(customer =>
                        <Box
                            key={customer.id}
                            sx={{
                                fontSize:'2rem',
                                border:'1px solid black',
                                padding:'10px 20px',
                                mt:2
                            }}
                            onClick={() => removeCustomer(customer)}
                        >{customer.name}</Box>
                    )}
                </Box>
                :
                <Box sx={{fontSize:"2rem", mt: 2}}>
                    Клиенты отсутсвуют!
                </Box>
            }
        </React.Fragment>
    );
};

export default MyCustomers;
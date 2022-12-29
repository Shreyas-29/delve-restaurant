import React from 'react'
import getStripe from '../lib/getStripe';
import { toast } from 'react-hot-toast';
import { useStateContext } from '../context/StateContext';
import Head from 'next/head';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, styled, tableCellClasses } from '@mui/material';

const orders = () => {

    const { totalPrice, totalQuantities, cartItems } = useStateContext();

    const handlePay = async () => {
        const stripe = await getStripe();

        const response = await fetch('/api/stripe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartItems),
        });

        if (response.statusCode === 500) return;

        const data = await response.json();

        toast.loading("Redirecting...");
        stripe.redirectToCheckout({ sessionId: data.id });
    }

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));


    return (
        <div className='container mx-auto lg:px-20 px-0 my-8'>
            <Head>
                <title>Delve | Home </title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
            </Head>

            <TableContainer component={Paper} className='!my-16'>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="center">Quantity</StyledTableCell>
                            <StyledTableCell align="center">Price </StyledTableCell>
                            <StyledTableCell align="center">Total</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartItems.length >= 1 && cartItems.map((item) => (
                            <StyledTableRow key={item.id}>
                                <StyledTableCell component="th" scope="row">
                                    {item.title}
                                </StyledTableCell>
                                <StyledTableCell align="center">{item.quantity}</StyledTableCell>
                                <StyledTableCell align="center">{item.price}</StyledTableCell>
                                <StyledTableCell align="center">{totalPrice}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {cartItems.length >= 1 ? (
                <div className="btn-container px-5 my-8">
                    <button
                        onClick={handlePay}
                        className='mt-5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-md text-white font-medium w-full py-3 capitalize hover:scale-110 transition ease-in-out duration-500 shadow-md shadow-orange-500/30'>
                        Pay Now
                    </button>
                </div>
            ) : (
                <p className='w-full text-center'>No items in cart, please add items to checkout.</p>
            )}

        </div>
    )
}

export default orders

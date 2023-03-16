import {loadStripe} from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements} from "@stripe/react-stripe-js"
import axios from "axios";
import { useState } from 'react';

const stripePromise = loadStripe("pk_test_51MmEVxDdNtbibviI8qCsSmAANVCN1WiKvJKsifuVD3hf8gKUP2hbZHRv5BhMWLTxWHqWriOv3qgt3D0sy1gXOuWi00uGrDHt0y")

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();


        const {error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        setLoading(true);

        if(!error){
            const {id, amount} = paymentMethod
            try {
                const {data} = await axios.post("http//localhost:3001/api/checkout", {id, amount})

                console.log(data)


                elements.getElement(CardElement).clear();
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }

    }
    return (
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col py-14 px-4 sm:pax-6 lg:flex-none lg:px-20 xl:px-24">
            <h3 className="text-center my-2">Price: $100</h3>
            
                <CardElement className="mx-auto w-full max-w-sm lg:max-w-lg lg:w-[100rem]"/>
            
            <button disabled={!stripe} className="m2-2 w-full py-3 bg-sky-700 text-white">
                {loading ? (
                    <div className='spinner-border text-light' role="status">
                        <span className='sr-only'>Loading...</span>
                    </div>
                ):"Buy"}
            </button>
        </form>
    )
}

export default function Payment(){

    return (
        <Elements stripe = {stripePromise}>
            <CheckoutForm />
        </Elements>
    )
}
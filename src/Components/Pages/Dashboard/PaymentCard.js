import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import Loading from "../Shareable/Loading";

const PaymentCard = ({ payData, refetch }) => {
    const { name, qunatity, email, toPay, _id } = payData;
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState("");
    const [transationId, setTransationId] = useState();
    const closeRef = useRef();
    const [clientSecret, setClientSecret] = useState("");
    const [payLoading,setPayLoading] = useState(false);
    console.log(clientSecret);


    useEffect(() => {
        if (toPay) {
            fetch(
                "https://celestial123.herokuapp.com/create-payment-intent",
                {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify({ total: toPay }),
                }
            )
                .then((res) => res.json())
                .then((res) => {
                    if (res.clientSecret) {
                        setClientSecret(res.clientSecret);
                    }
                });
        }
    }, [toPay]);

    const handleSubmit = async (event) => {
        setTransationId("");
        event.preventDefault();
        setPayLoading(true);
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            setCardError(error?.message || "");
        }

        const { paymentIntent, error: intentError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email,
                    },
                },
            });

        if (intentError) {
            setCardError(intentError?.message);
        } else {
            setTransationId(paymentIntent.id);
            setCardError("");
            const update = { status: "paid", transationId: paymentIntent.id };
            console.log(update);
            await fetch(`https://celestial123.herokuapp.com/shipment/${_id}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(update),
            })
                .then((res) => res.json())
                .then(async (result) => {
                    console.log(result);
                    if (result.modifiedCount > 0) {
                        setPayLoading(false);
                        closeRef.current.click();
                        toast.success("Payment is successfull");
                        refetch();
                    }
                });
        }
    };

    return (
        <>
            <input type="checkbox" id="pay-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                    {payLoading && (
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                        <Loading />
                        </div>
                      )}
                    <h3 className="font-bold text-lg mt-2">Payment For {name}</h3>
                    <h2 className="mt-3">User {email},</h2>
                    <p className="mt-2">
                        You have to pay {toPay}$ for the {qunatity} pcs of{" "}
                        {name}
                    </p>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <CardElement
                                options={{
                                    style: {
                                        base: {
                                            fontSize: "16px",
                                            fontWeight: "600",
                                            color: "rgb(212 212 216)",
                                            "::placeholder": {
                                                color: "#aab7c4",
                                            },
                                        },
                                        invalid: {
                                            color: "rgb(219 39 119)",
                                        },
                                    },
                                }}
                            />

                            <button
                                disabled={!stripe || !clientSecret}
                                className="btn btn-sm"
                                type="submit"
                            >
                                Pay
                            </button>
                            <span className="block pt-2 text-xs text-error">
                                {cardError}
                            </span>
                        </form>
                    </div>
                    <div className="modal-action">
                        <label ref={closeRef} for="pay-modal" className="btn">
                            Close
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PaymentCard;

import React from 'react';
import useForm from 'components/use_form/useForm';
import { bidPriceValidate, autoBidPriceValidate } from "utilities/validation";
import FormContainer from 'components/UI/FormContainer';
import { convertPenniesToDollars, convertDollarsToPennies } from 'utilities/price';
import './ItemBidForm.scss';

const ItemBidForm = ({ minimum_price, submit, success, auction_active, auto_bid, setAutoBidMode }) => {
    let priceLabel = "Your Bid (USD)";
    let validation = auto_bid ? autoBidPriceValidate : bidPriceValidate;
    let minimumMaxBid;

    const { values, errors, handleChange, handleSubmit, formHasErrors } = useForm({
        submit,
        validate: validation,
        minimum_price,
        initialValues: {
            price: "",
            max_price: ""
        }
    });

    if (auto_bid) {
        const price = values.price || minimum_price;
        minimumMaxBid = convertPenniesToDollars(convertDollarsToPennies(price) + 100);
        priceLabel = "Your Minimum Bid (USD)";
    }

    return auction_active && (
        <section className='item-bid-form--container'>
            <div className='bid-switch--controller'>
                <button className={!auto_bid ? 'btn-focused' : ''} onClick={() => setAutoBidMode(false)}>Single Bid</button>
                <button className={auto_bid ? 'btn-focused' : ''} onClick={() => setAutoBidMode(true)}>Auto Bid</button>
            </div>
            <FormContainer>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="price">{priceLabel}</label>
                    <p>You must bid at least ${minimum_price}</p>
                    <input
                        id="price"
                        name="price"
                        inputMode="decimal"
                        aria-invalid={!!errors.price}
                        aria-describedby="price-error"
                        value={values.price}
                        onChange={handleChange}
                        placeholder={minimum_price}
                        type="text"
                    />
                    {errors.price && (
                        <span id="price-error" className="error">
                            {errors.price}
                        </span>
                    )}
                    {
                        auto_bid && (
                            <>
                                <label htmlFor="price">Your Maximum Bid (USD)</label>
                                <p>You must bid at least ${minimumMaxBid}</p>
                                <input
                                    id="max_price"
                                    name="max_price"
                                    inputMode="decimal"
                                    aria-invalid={!!errors.max_price}
                                    aria-describedby="price-error"
                                    value={values.max_price}
                                    onChange={handleChange}
                                    placeholder={minimumMaxBid}
                                    type="text"
                                />
                                {errors.max_price && (
                                    <span id="price-error" className="error">
                                        {errors.max_price}
                                    </span>
                                )}
                                <p className='auto-bid--instructions'>
                                    If you are out-bid by another bidder, we will
                                    automatically place a bid for you until your
                                    maximum bid is reached.
                                </p>
                            </>
                        )
                    }
                    <button className="btn-primary" type="submit" disabled={formHasErrors(errors)}>
                        Submit Bid
                    </button>
                </form>
            </FormContainer>
            {success && <h5>You've successfully bid on this item!</h5>}
        </section>
    )
}

export default ItemBidForm;
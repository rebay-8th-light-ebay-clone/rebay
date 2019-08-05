import React from 'react';
import useForm from 'components/use_form/useForm';
import { bidPriceValidate } from "utilities/validation";
import FormContainer from 'components/UI/FormContainer';
import './ItemBidForm.scss';

const ItemBidForm = ({ minimum_price, auction_active, submit }) => {
    const initialValues = {
        price: minimum_price
    }
    const { values, errors, handleChange, handleSubmit } = useForm({
        submit,
        validate: bidPriceValidate,
        initialValues,
        minimum_price
    });

    return auction_active && (
        <section className='item-bid-form--container'>
            <FormContainer>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="price">Your Bid (USD)</label>
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
                    />
                    {errors.price && (
                        <span id="price-error" className="error">
                            {errors.price}
                        </span>
                    )}
                    <button className="btn-primary" type="submit">
                        Submit Bid
                    </button>
                </form>
            </FormContainer>
        </section>
    )
}

export default ItemBidForm;
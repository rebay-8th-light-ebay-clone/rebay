import React from "react";
import useForm from "../use_form/useForm";

const ItemForm = ({ submit, validate, initialValues = {}, editing = false }) => {
  const { values, errors, handleChange, handleSubmit } = useForm({
    submit,
    validate,
    initialValues
  });

  return (
    <section className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          aria-invalid={!!errors.title}
          aria-describedby="title-error"
          value={values.title}
          onChange={handleChange}
        />
        {errors.title && (
          <span id="title-error" className="error">
            {errors.title}
          </span>
        )}

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          aria-invalid={!!errors.description}
          aria-describedby="description-error"
          value={values.description}
          onChange={handleChange}
        />
        {errors.description && (
          <span id="description-error" className="error">
            {errors.description}
          </span>
        )}

        <label htmlFor="image">Image URL</label>
        <input
          id="image"
          name="image"
          inputMode="url"
          aria-invalid={!!errors.image}
          aria-describedby="image-error"
          value={values.image}
          onChange={handleChange}
        />
        {errors.image && (
          <span id="image-error" className="error">
            {errors.image}
          </span>
        )}

        <label htmlFor="price">Starting Price (USD)</label>
        <input
          id="price"
          name="price"
          inputMode="decimal"
          aria-invalid={!!errors.price}
          aria-describedby="price-error"
          value={values.price}
          onChange={handleChange}
          disabled={editing}
        />
        {errors.price && (
          <span id="price-error" className="error">
            {errors.price}
          </span>
        )}

        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          aria-invalid={!!errors.category}
          aria-describedby="category-error"
          value={values.category}
          onChange={handleChange}
        >
          <option value="other">Other</option>
          <option value="collectibles">Collectibles &amp; Art</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="entertainment">Entertainment</option>
          <option value="garden">Home &amp; Garden</option>
          <option value="motors">Motors</option>
          <option value="sporting">Sporting Goods</option>
          <option value="toys">Toys &amp; Hobbies</option>
        </select>
        {errors.category && (
          <span id="category-error" className="error">
            {errors.category}
          </span>
        )}

        <label htmlFor="date">Auction End Date</label>
        <input
          id="date"
          name="date"
          type="date"
          aria-invalid={!!errors.date}
          aria-describedby="date-error"
          value={values.date}
          onChange={handleChange}
          disabled={editing}
        />
        {errors.date && (
          <span id="date-error" className="error">
            {errors.date}
          </span>
        )}

        <button className="btn-primary" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default ItemForm;

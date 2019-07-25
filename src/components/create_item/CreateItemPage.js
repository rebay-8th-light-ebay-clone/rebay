import React from 'react';
import useForm from 'react-hook-form';
import Page from '../UI/Page';
import './CreateItemPage.scss';

const CreateItemPage = () => {
  const { handleSubmit, register, errors } = useForm({
    mode: 'onChange'
  });
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <Page>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          ref={register({ required: true })}
        />
        <div className="error">{errors.title && "Title is required."}</div>
        <label htmlFor="Description">Description</label>
        <textarea
          id="description"
          name="description"
          ref={register({ required: true })}
        ></textarea>
        <div className="error">{errors.description && "Description is required."}</div>
        <label htmlFor="image">Image URL</label>
        <input
          id="image"
          name="image"
          type="url"
          ref={register({ required: true })}
        />
        <div className="error">{errors.image && "Image URL is required."}</div>
        <label htmlFor="price">Starting Price</label>
        <input
          id="price"
          name="price"
          ref={register({
            required: true,
            pattern: /^\$?\d+(,\d{3})*(\.\d*)?$/
          })}
        />
        <div className="error">{errors.price && "Starting price above 1 is required."}</div>
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          ref={register({ required: true })}
        >
          <option value="collectibles">Collectibles &amp; Art</option>
          <option value="electronics">Electronics</option>
          <option value="electronics">Fashion</option>
          <option value="entertainment">Entertainment</option>
          <option value="garden">Home &amp; Garden</option>
          <option value="motors">Motors</option>
          <option value="sporting">Sporting Goods</option>
          <option value="toys">Toys &amp; Hobbies</option>
        </select>
        <div className="error">{errors.category && "Category is required."}</div>
        <label htmlFor="date">Auction End Date</label>
        <input
          id="date"
          name="date"
          type="date"
          ref={register({ required: true })}
        />
        <div className="error">{errors.date && "Auction end date is required."}</div>
        <label htmlFor="date">Auction End Time</label>
        <input
          id="time"
          name="time"
          type="time"
          ref={register({ required: true })}
        />
        <div className="error">{errors.date && "Time is required."}</div>
        <button type="submit">Submit</button>
      </form>
    </Page>
  );
}

export default CreateItemPage;

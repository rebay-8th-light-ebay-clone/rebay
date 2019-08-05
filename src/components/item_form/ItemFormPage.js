import React from 'react';
import ItemForm from 'components/item_form/ItemForm';
import Page from 'components/UI/Page';
import Error from 'components/UI/Error';
import { validate } from "utilities/validation";
import { Redirect } from 'react-router'
import './ItemFormPage.scss';

const setDefaultInitialValues = () => {
  return localStorage.getItem("create_item")
    ? JSON.parse(localStorage.getItem("create_item"))
    : {
      category: "other",
      title: "",
      description: "",
      image: "",
      price: "",
      date: ""
    }
}

const ItemFormPage = ({
  success,
  errors,
  editing = false,
  initialValues = setDefaultInitialValues(),
  pageTitle,
  submit
}) => {
  if (success) {
    const { user_uuid, uuid } = success;
    return <Redirect to={`/users/${user_uuid}/items/${uuid}`} />
  } else {
    return (
      <Page>
        <h1 className="page-title">{pageTitle}</h1>
        {errors && <Error message={errors} />}
        {Object.keys(initialValues).length !== 0 &&
          <ItemForm
            submit={submit}
            validate={validate}
            editing={editing}
            initialValues={initialValues}
          />
        }
      </Page>
    )
  }
}

export default ItemFormPage;
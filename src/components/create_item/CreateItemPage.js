import React, { useState } from "react";
import Page from "../UI/Page";
import ItemForm from "../item_form/ItemForm";
import { validate } from "./validation";
import { formatRequest } from "./formatRequest";
import { Redirect } from 'react-router'
import Error from 'components/UI/Error';
import "./CreateItemPage.scss";

const CreateItemPage = ({ apiHandler }) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const initialValues = localStorage.getItem("create_item")
    ? JSON.parse(localStorage.getItem("create_item"))
    : {
      category: "other",
      title: "",
      description: "",
      image: "",
      price: "",
      date: ""
    };

  const submit = async values => {
    const formattedValues = formatRequest(values);
    const userUUID = JSON.parse(localStorage.getItem("user"));
    if (userUUID && userUUID.uuid) {
      const result = await apiHandler.post(`/api/users/${userUUID.uuid}/items`, formattedValues);
      if (result.data) {
        setSuccess(result.data);
        localStorage.removeItem("create_item");
      }
    }
    setError("You are not authorized to create a new item. Please log in first.")
    return;
  }

  if (success) {
    const { user_uuid, uuid } = success;
    return <Redirect to={`/users/${user_uuid}/items/${uuid}`} />
  } else {
    return (
      <Page>
        <h1 className="page-title">Create New Item Listing</h1>
        {error && <Error message={error} />}
        <ItemForm
          submit={submit}
          validate={validate}
          initialValues={initialValues}
        />
      </Page>
    );
  }
};

export default CreateItemPage;

import React, { useState } from "react";
import Page from "../UI/Page";
import ItemForm from "../item_form/ItemForm";
import { validate } from "./validation";
import { formatRequest } from "./formatRequest";
import { Redirect } from 'react-router'
import Error from 'components/UI/Error';
import "./CreateItemPage.scss";

const CreateItemPage = ({ apiHandler, match }) => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const {user_uuid} = match.params;

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
    const userUUID = JSON.parse(localStorage.getItem("user")).uuid;
    if (userUUID === user_uuid) {
      const result = await apiHandler.post(`/api/users/${user_uuid}/items`, formattedValues);
      if (result.data) {
        setSuccess(result.data);
        localStorage.removeItem("create_item");
      }
    }
    setError("You are not authorized to create a new item.")
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

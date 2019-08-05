import React, { useState } from "react";
import ItemFormPage from "../item_form/ItemFormPage";
import { formatItemRequest } from "utilities/formatRequest";

const CreateItemPage = ({ apiHandler, match }) => {
  const [errors, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { user_uuid } = match.params;

  const submit = async values => {
    const formattedValues = formatItemRequest(values);
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

  return <ItemFormPage
    success={success}
    errors={errors}
    editing={false}
    pageTitle={"Create New Item Listing"}
    submit={submit}
  />
};

export default CreateItemPage;

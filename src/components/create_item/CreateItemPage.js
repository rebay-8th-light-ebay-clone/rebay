import React, { useState } from "react";
import ItemFormPage from "../item_form/ItemFormPage";
import { formatItemRequest } from "utilities/formatRequest";

const CreateItemPage = ({ apiHandler, match }) => {
  const [errors, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { user_uuid } = match.params;

  const submit = async values => {
    localStorage.setItem("create_item", JSON.stringify(values));
    const formattedValues = formatItemRequest(values);
    const userUUID = JSON.parse(localStorage.getItem("user")).uuid;
    if (userUUID === user_uuid) {
      const { data, errors } = await apiHandler.post(`/api/users/${user_uuid}/items`, formattedValues);
      if (data) {
        setSuccess(data);
        localStorage.removeItem("create_item");
      } else {
        return setError(errors)
      }
    }
    setError("You are not authorized to create a new item.")
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

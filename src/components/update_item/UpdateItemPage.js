import React, { useState, useEffect } from "react";
import { formatItemRequest } from "utilities/formatRequest";
import { formatItemResponse } from "utilities/formatResponse";
import ItemFormPage from 'components/item_form/ItemFormPage';

const UpdateItemPage = ({ apiHandler, match }) => {
  const [item, setItem] = useState({});
  const [errors, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { user_uuid, uuid } = match.params;

  useEffect(() => {
    const fetchItems = async () => {
      const { data, errors } = await apiHandler.get(`/api/users/${user_uuid}/items/${uuid}`);
      data ? setItem(formatItemResponse(data)) : setError(errors);
    }
    fetchItems();
  }, [apiHandler, user_uuid, uuid]);

  const submit = async values => {
    const formattedValues = formatItemRequest(values);
    const userUUID = JSON.parse(localStorage.getItem("user")).uuid;
    if (user_uuid === userUUID) {
      const { data, message } = await apiHandler.put(`/api/users/${user_uuid}/items/${uuid}`, formattedValues);
      if (data) {
        setSuccess(data);
        localStorage.removeItem("create_item");
      } else {
        setError(message);
      }
    }
    setError("You are not authorized to edit this item.")
    return;
  }

  return <ItemFormPage
    success={success}
    errors={errors}
    editing={true}
    initialValues={item}
    pageTitle={"Update Item Listing"}
    submit={submit}
  />
}

export default UpdateItemPage;
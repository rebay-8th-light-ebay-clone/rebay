import React, { useState, useEffect } from "react";
import Page from "../UI/Page";
import Error from 'components/UI/Error';
import ItemForm from "../item_form/ItemForm";
import { validate } from "../create_item/validation";
import { formatRequest, formatResponse } from "../create_item/formatRequest";
import { Redirect } from 'react-router'
import "../create_item/CreateItemPage.scss";

const UpdateItemPage = ({ apiHandler, match }) => {
  const [item, setItem] = useState({});
  const [errors, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const {user_uuid, uuid} = match.params;

  useEffect(() => {
    const fetchItems = async () => {
        const { data, errors } = await apiHandler.get(`/api/users/${user_uuid}/items/${uuid}`);
        data ? setItem(formatResponse(data)) : setError(errors);
    }
    fetchItems();
  }, [apiHandler, user_uuid, uuid]);

  const submit = async values => {
    const formattedValues = formatRequest(values);
    const userUUID = JSON.parse(localStorage.getItem("user")).uuid;
    if (user_uuid === userUUID) {
      const { data, errors } = await apiHandler.put(`/api/users/${user_uuid}/items/${uuid}`, formattedValues);
      if (data) {
        setSuccess(data);
        localStorage.removeItem("create_item");
      } else {
          setError(errors);
      }
    }
    setError("You are not authorized to edit this item.")
    return;
  }

  if (success) {
    const { user_uuid, uuid } = success;
    return <Redirect to={`/users/${user_uuid}/items/${uuid}`} />
  } else {
    return (
      <Page>
        <h1 className="page-title">Update Item Listing</h1>
        {errors && <Error message={errors} />}
        {Object.keys(item).length !== 0 &&       
          <ItemForm
            submit={submit}
            validate={validate}
            editing={true}
            initialValues={item}
          />
        }
      </Page>
    )
  }
}

export default UpdateItemPage;
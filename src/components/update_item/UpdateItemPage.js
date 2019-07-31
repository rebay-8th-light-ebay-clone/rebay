import React, { useState, useEffect } from "react";
import Page from "../UI/Page";
import ItemForm from "../item_form/ItemForm";
import { validate } from "../create_item/validation";
import { pennyToDollarConverter } from 'utilities/price';
// import { formatRequest } from "../create_item/formatRequest";
// import { Redirect } from 'react-router'
// import Error from 'components/UI/Error';
import "../create_item/CreateItemPage.scss";

const UpdateItemPage = ({ apiHandler, match }) => {
  const [item, setItem] = useState({});
  const [errors, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
        const {user_uuid, uuid} = match.params;
        const { data, errors } = await apiHandler.get(`/api/users/${user_uuid}/items/${uuid}`);
        data ? setItem(Object.assign(data, {price: pennyToDollarConverter(data.price), date: data.end_date.split('T')[0]})) : setError(errors);
    }
    fetchItems();
  }, [apiHandler, match.params, item]);

  return (
    <Page>
      <h1 className="page-title">Create New Item Listing</h1>
      {Object.keys(item).length !== 0 &&       
        <ItemForm
          validate={validate}
          editing={true}
          initialValues={item}
        />
      }
      </Page>
  )
}

export default UpdateItemPage
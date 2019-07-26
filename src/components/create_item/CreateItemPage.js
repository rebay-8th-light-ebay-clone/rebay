import React from "react";
import Page from "../UI/Page";
import ItemForm from "../item_form/ItemForm";
import { validate } from "./validation";
import { formatRequest } from "./formatRequest";
import "./CreateItemPage.scss";

const CreateItemPage = () => {
  const initialValues = {
    category: "other",
    title: "",
    description: "",
    image: "",
    price: "",
    date: ""
  };

  const submit = values => console.log(formatRequest(values));

  return (
    <Page>
      <h1 className="page-title">Create New Item Listing</h1>
      <ItemForm
        submit={submit}
        validate={validate}
        initialValues={initialValues}
      />
    </Page>
  );
};

export default CreateItemPage;

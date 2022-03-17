import React, { Fragment } from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  ImageField,
  ImageInput,
  required,
} from "react-admin";

const StoreCategoryEdit = (props) => {
  console.log(props);
  return (
    <Fragment>
      <Edit title="Edit a Store Category" {...props}>
        <SimpleForm>
          <TextInput source="name" validate={required()} />
          <TextInput source="slug" validate={required()} />
          <ImageInput source="image" accept="image/*" validate={required()}>
            <ImageField source="src" title="title" />
          </ImageInput>
        </SimpleForm>
      </Edit>
    </Fragment>
  );
};

export default StoreCategoryEdit;

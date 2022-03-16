import React, { Fragment } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ImageField,
  ImageInput,
  required,
} from "react-admin";

const StoreCategoryCreate = (props) => {
  return (
    <Fragment>
      <Create title="Create a Store Category" {...props}>
        <SimpleForm>
          <TextInput source="name" validate={required()} />
          <TextInput source="slug" validate={required()} />
          <ImageInput source="image" accept="image/*" validate={required()}>
            <ImageField source="src" title="title" />
          </ImageInput>
        </SimpleForm>
      </Create>
    </Fragment>
  );
};

export default StoreCategoryCreate;

import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  ImageField,
  ImageInput
} from "react-admin";

const BannerCreate = (props) => {
  return (
    <Create title="Create a Banner" {...props}>
      <SimpleForm>
        <NumberInput source="id" />
        <TextInput source="link" />
        <ImageInput source="image" accept="image/*">
          <ImageField source="image" title="Image" />
        </ImageInput>
      </SimpleForm>
    </Create>
  );
};

export default BannerCreate;

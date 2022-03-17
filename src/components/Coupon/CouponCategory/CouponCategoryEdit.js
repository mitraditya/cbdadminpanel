import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  BooleanInput,
  ImageInput,
  ImageField
} from "react-admin";

const CouponCategoryEdit = (props) => {
  return (
    <Edit title="Edit a Coupon Category" {...props}>
      <SimpleForm>
        <BooleanInput source="featured" />
        <NumberInput source="visits" />
        <TextInput source="h1" label="h1" />
        <TextInput source="h2" label="h2" />
        <ImageInput source="featured_image_url" accept="image/*" >
            <ImageField source="src" title="title" />
        </ImageInput>
      </SimpleForm>
    </Edit>
  );
};

export default CouponCategoryEdit;

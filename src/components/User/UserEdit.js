import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  DateInput,
  BooleanInput,
  AutocompleteInput,
  ImageField,
  ImageInput,
} from "react-admin";

const choices = [
  { id: "admin", name: "ADMIN" },
  { id: "user", name: "USER" },
];

const UserEdit = (props) => {
  return (
    <Edit title="Edit a User" {...props}>
      <SimpleForm>
        <NumberInput source="id" />
        <TextInput source="first_name" />
        <TextInput source="last_name" />
        <TextInput source="email" />
        <TextInput source="mobile" />
        <AutocompleteInput
          source="role"
          choices={choices}
          optionText="name"
          optionValue="id"
        />
        <ImageInput source="image" accept="image/*">
          <ImageField source="image" title="Image" />
        </ImageInput>
        <TextInput source="referralLink" />
        <NumberInput source="referralUser" />
        <BooleanInput source="is_email_verified" />
        <BooleanInput source="is_mobile_verified" />
        <BooleanInput source="is_profile_complete" />
        <TextInput source="city" />
        <DateInput source="date_of_birth" />
        <BooleanInput source="is_user_banned" />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;

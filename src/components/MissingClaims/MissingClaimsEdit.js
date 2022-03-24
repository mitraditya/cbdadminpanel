import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  AutocompleteInput,
} from "react-admin";

const closedByChoices = [
  { id: "user", name: "user" },
  { id: "admin", name: "admin" },
];

const platformChoices = [
  { id: "website", name: "website" },
  { id: "android", name: "android" },
  { id: "mobile", name: "mobile" },
  { id: "ios", name: "ios" },
];

const statusChoices = [
  { id: "open", name: "open" },
  { id: "hold", name: "hold" },
  { id: "answered", name: "answered" },
  { id: "closed", name: "closed" },
];

const MissingClaimsEdit = (props) => {
  return (
    <Edit title="Edit a Missing Claim" {...props}>
      <SimpleForm>
        <TextInput source="user_id.email" label="User" />
        <TextInput source="click_id.id" label="Click" />
        <TextInput source="store_id.name" label="Store" />
        <TextInput source="network_id.name" label="Network" />
        <TextInput source="click_time" />
        <TextInput source="order_id" />
        <TextInput source="currency_iso" />
        <NumberInput source="order_amount" />
        <TextInput source="transaction_date" />
        <AutocompleteInput
          source="platform"
          choices={platformChoices}
          optionText="name"
          optionValue="id"
        />
        <TextInput source="user_message" />
        <TextInput source="admin_note" />
        <AutocompleteInput
          source="status"
          choices={statusChoices}
          optionText="name"
          optionValue="id"
        />
        <AutocompleteInput
          source="closed_by"
          choices={closedByChoices}
          optionText="name"
          optionValue="id"
        />
      </SimpleForm>
    </Edit>
  );
};

export default MissingClaimsEdit;

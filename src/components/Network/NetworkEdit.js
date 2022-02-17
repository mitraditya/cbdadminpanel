import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  NumberInput,
  AutocompleteInput,
} from "react-admin";

const currencyChoices = [
  { id: "INR", name: "INR" },
  { id: "USD", name: "USD" },
];

const NetworkEdit = (props) => {
  return (
    <Edit title="Edit Store" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput source="shortname" />
        <TextInput source="namespace" />
        <TextInput source="affiliate_id" label="Affiliate Id"/>
        <TextInput source="website_id" />
        <NumberInput source="confirm_days" />
        <BooleanInput source="enabled" />
        <AutocompleteInput
          source="currency"
          choices={currencyChoices}
          optionText="name"
          optionValue="id"
        />
        <NumberInput source="direct_merchant" />
        <TextInput source="campaign_statuses" />
        <TextInput source="sale_statuses" />
        <TextInput source="columns_update" />
        <TextInput source="api_key" />
        <TextInput source="auth_tokens" />
        <TextInput source="credentials" />
        <TextInput source="network_platform" />
        <TextInput source="subids" />
        <TextInput source="campaign_info_url" />
        <TextInput source="network_subids" />
      </SimpleForm>
    </Edit>
  );
};

export default NetworkEdit;

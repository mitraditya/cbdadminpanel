import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  BooleanInput,
  NumberInput,
  AutocompleteInput,
  required,
} from "react-admin";

const currencyChoices = [
  { id: "INR", name: "INR" },
  { id: "USD", name: "USD" },
];

const NetworkCreate = (props) => {
  return (
    <Create title="Create a Network" {...props}>
      <SimpleForm>
        <TextInput source="name" validate={required()} />
        <TextInput source="shortname" validate={required()} />
        <TextInput source="namespace" validate={required()} />
        <TextInput source="affiliate_id" label="Affiliate Id"/>
        <TextInput source="website_id" />
        <NumberInput source="confirm_days" validate={required()} />
        <BooleanInput source="enabled"/>
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
    </Create>
  );
};

export default NetworkCreate;

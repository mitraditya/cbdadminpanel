import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  NumberInput,
  ImageField,
  ImageInput,
  AutocompleteInput,
} from "react-admin";

const choices = [
  { id: "Cashback", name: "Cashback" },
  { id: "Reward", name: "Reward" }
];

const StoreEdit = (props) => {
  return (
    <Edit title="Edit Store" {...props}>
      <SimpleForm>
        <NumberInput disabled source="id" />
        <TextInput source="name" />
        <TextInput multiline source="homepage" />
        <TextInput multiline source="affiliate_link" />
        <TextInput source="network_id" label="Network Id"/>
        <BooleanInput label="Featured" source="featured" />
        <BooleanInput label="Cashback Enabled" source="cashback_enabled" />
        <NumberInput source="cashback_percent" />
        <NumberInput source="cashback" />
        <AutocompleteInput
          source="cashback_type"
          choices={choices}
          optionText="name"
          optionValue="id"
        />
        <TextInput source="amount_type" />
        <TextInput source="rate_type" />
        <TextInput source="cashback_was" />
        <TextInput source="tracking_speed" />
        <NumberInput source="visits" />
        <TextInput source="terms" />
        <TextInput source="tips" />
        <TextInput source="h1" />
        <TextInput source="h2" />
        <TextInput source="description" />
        <ImageInput source="image" accept="image/*">
            <ImageField source="image" title="Image" />
        </ImageInput>
        <TextInput source="network_campaign_id" label="Network Campaign Id" />
        <NumberInput source="coupon_count" />
        <NumberInput source="clicks" />
        <NumberInput source="payout_days" />
        <BooleanInput source="is_claimable" />
        <TextInput source="domain_name" />
        <TextInput source="apply_coupon" />
        <TextInput source="checkout_url" />
        <TextInput source="slug" />
        <TextInput source="status" />
        <TextInput source="color1" />
        <TextInput source="color2" />
      </SimpleForm>
    </Edit>
  );
};

export default StoreEdit;

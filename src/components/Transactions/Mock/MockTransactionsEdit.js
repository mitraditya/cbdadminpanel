import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
} from "react-admin";

const MockTransactionsEdit = (props) => {
  return (
    <Edit title="Edit Mock Transaction" {...props}>
      <SimpleForm>
      <TextInput source='network_id.name' label='Network Id' />
        <TextInput source='network_campaign_id' label='Network Campaign Id' />
        <TextInput source='transaction_id' label='Transaction Id' />
        <TextInput source='commission_id' label='Commission Id' />
        <TextInput source='order_id' label='Order Id' />
        <TextInput source='sale_date' />
        <NumberInput source='sale_amount' />
        <NumberInput source='base_commission' />
        <TextInput source='currency' />
        <TextInput source='status' />
        <TextInput source='aff_sub1' />
        <TextInput source='aff_sub2' />
        <TextInput source='aff_sub3' />
        <TextInput source='aff_sub4' />
        <TextInput source='aff_sub5' />
        <TextInput source='extra_information' />
      </SimpleForm>
    </Edit>
  );
};

export default MockTransactionsEdit;

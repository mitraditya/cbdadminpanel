import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
} from "react-admin";

const SalesTransactionsEdit = (props) => {
  return (
    <Edit title="Edit a Sales Transaction" {...props}>
      <SimpleForm>
        <TextInput source='network_id.name' label='Network Id' />
        <TextInput source='network_campaign_id' label='Network Campaign Id' />
        <TextInput source='transaction_id' label='Transaction Id' />
        <TextInput source='commission_id' label='Commission Id' />
        <TextInput source='order_id' label='Order Id' />
        <TextInput source='click_date' />
        <TextInput source='sale_date' />
        <NumberInput source='sale_amount' />
        <NumberInput source='base_commission' />
        <NumberInput source='commission_amount' />
        <TextInput source='currency' />
        <TextInput source='sale_status'  />
        <TextInput source='status' />
        <TextInput source='sale_update_time' />
        <TextInput source='aff_sub1' />
        <TextInput source='aff_sub2' />
        <TextInput source='aff_sub3' />
        <TextInput source='aff_sub4' />
        <TextInput source='aff_sub5' />
        <TextInput source='ex_info' />
        <TextInput source='batch_id' />
      </SimpleForm>
    </Edit>
  );
};

export default SalesTransactionsEdit;

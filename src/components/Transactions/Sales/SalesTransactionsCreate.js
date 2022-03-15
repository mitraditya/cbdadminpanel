import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  required,
} from "react-admin";

const SalesTransactionsCreate = (props) => {
  return (
    <Create title="Create a Sales Transaction" {...props}>
      <SimpleForm>
        <TextInput source='network_id.name' label='Network Id' />
        <TextInput source='network_campaign_id' label='Network Campaign Id' />
        <TextInput source='transaction_id' label='Transaction Id' validate={required()} />
        <TextInput source='commission_id' label='Commission Id' />
        <TextInput source='order_id' label='Order Id' validate={required()} />
        <TextInput source='click_date' />
        <TextInput source='sale_date' />
        <NumberInput source='sale_amount' validate={required()} />
        <NumberInput source='base_commission' validate={required()} />
        <NumberInput source='commission_amount' validate={required()} />
        <TextInput source='currency' validate={required()} />
        <TextInput source='sale_status'  validate={required()} />
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
    </Create>
  );
};

export default SalesTransactionsCreate;

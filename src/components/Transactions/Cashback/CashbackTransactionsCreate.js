import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  BooleanInput,
  NumberInput,
  required,
} from "react-admin";

const CashbackTransactionsCreate = (props) => {
  return (
    <Create title="Create a Cashback Transaction" {...props}>
      <SimpleForm>
        <TextInput source='user' />
        <TextInput source='sale_id' label='Sale Id' />
        <TextInput source='network_id.name' label='Network Id' />
        <TextInput source='order_id' label='Order Id' />
        <TextInput source='store' />
        <TextInput source='click_id' label='Click Id' />
        <NumberInput source='sale_amount' validate={required()} />
        <NumberInput source='cashback' validate={required()} />
        <TextInput source='currency' />
        <TextInput source='status' />
        <BooleanInput source='mail_sent' />
      </SimpleForm>
    </Create>
  );
};

export default CashbackTransactionsCreate;

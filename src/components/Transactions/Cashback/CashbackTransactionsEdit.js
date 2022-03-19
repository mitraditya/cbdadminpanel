import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  BooleanInput,
  NumberInput,
} from "react-admin";

const CashbackTransactionsEdit = (props) => {
  return (
    <Edit title="Edit a Cashback Transaction" {...props}>
      <SimpleForm>
        <TextInput source='user.email' label='user' />
        <TextInput source="sale_id" label="Sale Id" />
        <TextInput source="network_id.id" label="Network Id" />
        <TextInput source="order_id" label="Order Id" />
        <TextInput source="store.name" label="Store" />
        <TextInput source="click_id.id" label="Click Id" />
        <NumberInput source="sale_amount" />
        <NumberInput source="cashback" />
        <TextInput source="currency" />
        <TextInput source="status" />
        <BooleanInput source="mail_sent" />
      </SimpleForm>
    </Edit>
  );
};

export default CashbackTransactionsEdit;

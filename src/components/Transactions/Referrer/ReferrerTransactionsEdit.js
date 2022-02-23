import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  BooleanInput
} from "react-admin";

const ReferrerTransactionsEdit = (props) => {
  return (
    <Edit title="Edit a Referrer Transaction" {...props}>
      <SimpleForm>
        <TextInput source='user' />
        <TextInput source='store' />
        <TextInput source='shopper' />
        <NumberInput source='sale_amount' />
        <TextInput source='currency' />
        <TextInput source='txn_date_time' />
        <NumberInput source='referrer_amount' />
        <TextInput source='awarded_on' />
        <TextInput source='expires_on' />
        <TextInput source='status' />
        <BooleanInput source='mail_sent' />
      </SimpleForm>
    </Edit>
  );
};

export default ReferrerTransactionsEdit;

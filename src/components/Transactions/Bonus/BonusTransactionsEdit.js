import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput
} from "react-admin";

const BonusTransactionsEdit = (props) => {
  return (
    <Edit title="Edit a Bonus Transaction" {...props}>
      <SimpleForm>
        <TextInput source='user' />
        <TextInput source='bonus_code' label='Bonus Type' />
        <NumberInput source='amount' />
        <TextInput source='awarded_on' />
        <TextInput source='expires_on' />
        <TextInput source='status' />
      </SimpleForm>
    </Edit>
  );
};

export default BonusTransactionsEdit;

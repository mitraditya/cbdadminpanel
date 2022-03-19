import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  DateInput
} from "react-admin";

const BonusTransactionsEdit = (props) => {
  return (
    <Edit title="Edit a Bonus Transaction" {...props}>
      <SimpleForm>
        <TextInput source='user.email' />
        <TextInput source='bonus_code' label='Bonus Type' />
        <NumberInput source='amount' />
        <DateInput source='awarded_on' />
        <DateInput source='expires_on' />
        <TextInput source='status' />
      </SimpleForm>
    </Edit>
  );
};

export default BonusTransactionsEdit;

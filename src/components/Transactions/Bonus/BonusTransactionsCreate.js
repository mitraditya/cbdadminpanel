import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  DateInput,
  required
} from "react-admin";

const BonusTransactionsCreate = (props) => {
  return (
    <Create title="Create a Bonus Transaction" {...props}>
      <SimpleForm>
        <TextInput source='user' validate={required()} />
        <TextInput source='bonus_code' label='Bonus Type' validate={required()} />
        <NumberInput source='amount' validate={required()} />
        <DateInput source='awarded_on' validate={required()} />
        <DateInput source='expires_on' />
        <TextInput source='status' />
      </SimpleForm>
    </Create>
  );
};

export default BonusTransactionsCreate;

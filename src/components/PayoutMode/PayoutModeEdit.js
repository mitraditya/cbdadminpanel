import React from 'react';
import { Edit, SimpleForm, TextInput, BooleanInput } from "react-admin";

const PayoutModeEdit = (props) => {
  return (
    <Edit title="Edit a Payout Mode" {...props}>
        <SimpleForm>
            <TextInput source='user.email' label='User' />
            <TextInput source='name' />
            <TextInput source='method_code' />
            <TextInput source='account' />
            <BooleanInput source='enabled' />
        </SimpleForm>
    </Edit>);
};

export default PayoutModeEdit;

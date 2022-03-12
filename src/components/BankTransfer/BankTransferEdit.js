import React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput } from "react-admin";

const BankTransferEdit = (props) => {
  return (
    <Edit title="Edit a Bank Transfer Paytm Api" {...props}>
        <SimpleForm>
            <TextInput source='payment_id' label='Payment Id'/>
            <TextInput source='user_id.email' label='User'/>
            <TextInput source='payment_mode' label='Method Code' />
            <NumberInput source='cashback_amount' />
            <NumberInput source='reward_amount' />
            <TextInput source='status' />
            <TextInput source='api_status' />
            <TextInput source='api_response' />
            <TextInput source='note' />
            <TextInput source='payment_ref_num' />
            <TextInput source='paid_at' />
        </SimpleForm>
    </Edit>
  );
};

export default BankTransferEdit;

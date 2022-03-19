import React from 'react';
import { Create, SimpleForm, TextInput, NumberInput, DateInput } from "react-admin";

const PaytmWalletTransferCreate = (props) => {
  return (
    <Create title="Create a Paytm Wallet Transfer" {...props}>
        <SimpleForm>
            <TextInput source='payment_id' label='Payment Id'/>
            <TextInput source='user_id.email' label='User'/>
            <TextInput source='payment_mode' label='Method' />
            <NumberInput source='cashback_amount' />
            <NumberInput source='reward_amount' />
            <TextInput source='status' />
            <TextInput source='api_status' />
            <TextInput source='api_response' />
            <TextInput source='note' />
            <TextInput source='payment_ref_num' />
            <DateInput source='paid_at' />
        </SimpleForm>
    </Create>
  );
};

export default PaytmWalletTransferCreate;

import React from 'react';
import { Create, SimpleForm, TextInput, NumberInput } from "react-admin";

const PayoutRequestsCreate = (props) => {
  return (
    <Create title="Create a Payout Request" {...props}>
        <SimpleForm>
            <TextInput source='payment_id' label='Payment Id'/>
            <TextInput source='user_id' label='User'/>
            <TextInput source='payment_mode' label='Method' />
            <NumberInput source='account' />
            <NumberInput source='cashback_amount' />
            <NumberInput source='reward_amount' />
            <TextInput source='status' />
            <TextInput source='api_status' />
            <TextInput source='api_response' />
            <TextInput source='note' />
            <TextInput source='payment_ref_num' />
            <TextInput source='paid_at' />
        </SimpleForm>
    </Create>
  );
};

export default PayoutRequestsCreate;

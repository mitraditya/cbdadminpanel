import React from 'react';
import { List, Datagrid, TextField, NumberField, EditButton, DeleteButton } from "react-admin";

const PayoutRequestsList = (props) => {
  return <List {...props}>
    <Datagrid rowClick="edit">
        <NumberField source='id' />
        <TextField source='user_id.email' label='User'/>
        <TextField source='payment_mode.method_code' label='Method' />
        <NumberField source='cashback_amount' />
        <TextField source='status' />
        <TextField source='payment_ref_num' />
        <TextField source='paid_at' />
        <TextField source='updated_at' />
        <EditButton basePath='payoutrequests' />
        <DeleteButton basePath='payoutrequests' />
    </Datagrid>
  </List>;
};

export default PayoutRequestsList;

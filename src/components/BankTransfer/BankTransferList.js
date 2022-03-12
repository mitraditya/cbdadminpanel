import React from 'react';
import { List, Datagrid, TextField, NumberField, EditButton, DeleteButton } from "react-admin";

const BankTransferList = (props) => {
  return <List {...props}>
    <Datagrid rowClick="edit">
        <NumberField source='id' />
        <TextField source='payment_id' label='Payment Id'/>
        <TextField source='user_id.email' label='User'/>
        <TextField source='payment_mode' label='Method Code' />
        <NumberField source='cashback_amount' />
        <TextField source='status' />
        <TextField source='api_status' />
        <TextField source='paid_at' />
        <TextField source='updated_at' />
        <EditButton basePath='payoutrequests/bankpayouts' />
        <DeleteButton basePath='payoutrequests/bankpayouts' />
    </Datagrid>
  </List>;
};

export default BankTransferList;

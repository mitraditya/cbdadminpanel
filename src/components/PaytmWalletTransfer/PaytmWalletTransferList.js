import React from 'react';
import { List, Datagrid, TextField, NumberField, EditButton, DeleteButton } from "react-admin";

const PaytmWalletTransferList = (props) => {
  return <List {...props}>
    <Datagrid rowClick="edit">
        <NumberField source='id' />
        <TextField source='payment_id' label='Payment Id'/>
        <TextField source='user_id.email' label='User'/>
        <TextField source='payment_mode' label='Method Code' />
        <NumberField source='cashback_amount' />
        <TextField source='status' />
        <TextField source='paid_at' />
        <TextField source='updated_at' />
        <EditButton basePath='payoutrequests' />
        <DeleteButton basePath='payoutrequests' />
    </Datagrid>
  </List>;
};

export default PaytmWalletTransferList;

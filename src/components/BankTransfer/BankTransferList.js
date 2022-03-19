import React from 'react';
import { List, Datagrid, TextField, DateField, NumberField, DeleteButton } from "react-admin";

const BankTransferList = (props) => {
  return <List {...props}>
    <Datagrid>
        <NumberField source='id' />
        <TextField source='payment_id' label='Payment Id'/>
        <TextField source='user_id.email' label='User'/>
        <TextField source='payment_mode.method_code' label='Method Code' />
        <NumberField source='cashback_amount' />
        <TextField source='status' />
        <TextField source='api_status' />
        <DateField source='paid_at' />
        <DateField source='updated_at' />
        <DeleteButton basePath='bankpayouts' />
    </Datagrid>
  </List>;
};

export default BankTransferList;

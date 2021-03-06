import React from 'react';
import { List, Datagrid, TextField, NumberField, DateField, EditButton, DeleteButton } from "react-admin";

const CashbackTransactionsList = (props) => {
  return <List {...props}>
    <Datagrid rowClick="edit">
        <NumberField source='id' />
        <TextField source='user.email' />
        <TextField source='network_id.name' label='Network' />
        <TextField source='store.name' label='Store' />
        <NumberField source='click_id.id' />
        <NumberField source='cashback' />
        <TextField source='status' />
        <DateField source='updated_at' />
        <EditButton basePath='txn/cashback' />
        <DeleteButton basePath='txn/cashback' />
    </Datagrid>
  </List>;
};

export default CashbackTransactionsList;

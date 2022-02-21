import React from 'react';
import { List, Datagrid, TextField, NumberField, EditButton, DeleteButton } from "react-admin";

const CashbackTransactionsList = (props) => {
  return <List {...props}>
    <Datagrid rowClick="edit">
        <NumberField source='id' />
        <TextField source='user' />
        <TextField source='network_id.name' label='Network' />
        <TextField source='store' />
        <NumberField source='click_id' />
        <NumberField source='cashback' />
        <TextField source='status' />
        <TextField source='updated_at' />
        <EditButton basePath='txn/cashback' />
        <DeleteButton basePath='txn/cashback' />
    </Datagrid>
  </List>;
};

export default CashbackTransactionsList;

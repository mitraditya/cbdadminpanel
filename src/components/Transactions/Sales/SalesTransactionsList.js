import React from 'react';
import { List, Datagrid, TextField, DateField, NumberField, EditButton, DeleteButton } from "react-admin";

const SalesTransactionsList = (props) => {
  return <List {...props}>
    <Datagrid rowClick="edit">
        <NumberField source='id' />
        <TextField source='network_id.name' label='Network' />
        <TextField source='transaction_id' />
        <DateField source='sale_date' />
        <NumberField source='commission_amount' />
        <TextField source='status' />
        <NumberField source='aff_sub1' />
        <DateField source='updated_at' />
        <EditButton basePath='txn/sales' />
        <DeleteButton basePath='txn/sales' />
    </Datagrid>
  </List>;
};

export default SalesTransactionsList;

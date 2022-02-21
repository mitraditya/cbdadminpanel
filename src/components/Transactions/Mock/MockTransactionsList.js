import React from 'react';
import { List, Datagrid, TextField, NumberField, EditButton, DeleteButton } from "react-admin";

const MockTransactionsList = (props) => {
  return <List {...props}>
    <Datagrid rowClick="edit">
        <NumberField source='id' />
        <TextField source='network_id.name' label='Network' />
        <TextField source='sale_date' />
        <NumberField source='sale_amount' />
        <NumberField source='base_commission' />
        <TextField source='status' />
        <NumberField source='aff_sub1' />
        <TextField source='updated_at' />
        <EditButton basePath='txn/mock' />
        <DeleteButton basePath='txn/mock' />
    </Datagrid>
  </List>;
};

export default MockTransactionsList;

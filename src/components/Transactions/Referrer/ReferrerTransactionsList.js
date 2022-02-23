import React from 'react';
import { List, Datagrid, TextField, NumberField, EditButton, DeleteButton } from "react-admin";

const ReferrerTransactionsList = (props) => {
  return <List {...props}>
    <Datagrid rowClick="edit">
        <NumberField source='id' />
        <TextField source='store' />
        <TextField source='user' />
        <TextField source='shopper' />
        <NumberField source='referrer_amount' />
        <TextField source='status' />
        <TextField source='updated_at' />
        <EditButton basePath='txn/referrer' />
        <DeleteButton basePath='txn/referrer' />
    </Datagrid>
  </List>;
};

export default ReferrerTransactionsList;

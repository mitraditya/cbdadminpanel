import React from 'react';
import { List, Datagrid, TextField, NumberField, DateField, EditButton, DeleteButton } from "react-admin";

const BonusTransactionsList = (props) => {
  return <List {...props}>
    <Datagrid rowClick="edit">
        <NumberField source='id' />
        <TextField source='user.email' />
        <TextField source='bonus_code' label='Bonus Type' />
        <NumberField source='amount' />
        <DateField source='awarded_on' />
        <DateField source='expires_on' />
        <TextField source='status' />
        <EditButton basePath='txn/bonus' />
        <DeleteButton basePath='txn/bonus' />
    </Datagrid>
  </List>;
};

export default BonusTransactionsList;

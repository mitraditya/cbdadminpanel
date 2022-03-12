import React from 'react';
import { List, Datagrid, TextField, NumberField, BooleanField } from "react-admin";

const PayoutModeList = (props) => {
  return <List {...props}>
    <Datagrid rowClick="edit">
        <NumberField source='id' />
        <TextField source='user.email' label='User' />
        <TextField source='name' />
        <TextField source='account' />
        <BooleanField source='enabled' />
        <TextField source='updated_at' />
    </Datagrid>
  </List>;
};

export default PayoutModeList;

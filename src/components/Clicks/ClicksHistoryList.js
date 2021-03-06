import React from 'react';
import { List, Datagrid, DateField, TextField, NumberField, BooleanField } from "react-admin";

const ClicksHistoryList = (props) => {
  return <List {...props}>
    <Datagrid>
        <NumberField source='id' label='Click Id'/>
        <DateField source='createdAt' label='Click Time' />
        <TextField source='store.name' label='Store' />
        <TextField source='user.email' label='User' />
        <BooleanField source='store.cashback_enabled' label='Cashback Enabled' />
        <TextField source='network.name' label='Network' />
    </Datagrid>
  </List>;
};

export default ClicksHistoryList;

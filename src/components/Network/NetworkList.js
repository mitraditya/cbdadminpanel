import React from 'react';
import { List, Datagrid, TextField, NumberField, DateField, EditButton, DeleteButton } from "react-admin";

const NetworkList = (props) => {
  return <List {...props}>
    <Datagrid  rowClick="edit">
        <NumberField source='id' />
        <TextField source='name' label='store'/>
        <TextField source='affiliate_id' label='Affiliate Id' />
        <TextField source='confirm_days' />
        <TextField source='enabled' />
        <DateField source='updated_at' />
        <EditButton basePath='networks' />
        <DeleteButton basePath='networks' />
    </Datagrid>
  </List>;
};

export default NetworkList;

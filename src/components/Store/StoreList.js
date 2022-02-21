import React from 'react';
import { List, Datagrid, TextField, NumberField, EditButton, DeleteButton } from "react-admin";

const StoreList = (props) => {
  return <List {...props}>
    <Datagrid rowClick="edit">
        <NumberField source='id' />
        <TextField source='name' label='store'/>
        <TextField source='homepage' />
        <TextField source='cashback_enabled' />
        <TextField source='cashback_percent' />
        <TextField source='cashback_type' />
        <TextField source='network_id.name' label='Network' />
        <EditButton basePath='stores' />
        <DeleteButton basePath='stores' />
    </Datagrid>
  </List>;
};

export default StoreList;

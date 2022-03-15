import React from 'react';
import { List, Datagrid, TextField, NumberField, EditButton, DeleteButton } from "react-admin";

const SnELinksList = (props) => {
  return <List {...props}>
    <Datagrid rowClick="edit">
        <TextField source='user.email' label='User'/>
        <TextField source='store.name' />
        <NumberField source='clicks' />
        <NumberField source='earning' />
        <TextField source='createdAt' />
        <EditButton basePath='links' />
        <DeleteButton basePath='links' />
    </Datagrid>
  </List>;
};

export default SnELinksList;

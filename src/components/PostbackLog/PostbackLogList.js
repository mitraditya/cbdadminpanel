import React from 'react';
import { List, Datagrid, TextField, NumberField, DateField, EditButton, DeleteButton } from "react-admin";

const PostbackLogList = (props) => {
  return <List {...props}>
    <Datagrid rowClick="edit">
        <NumberField source='id' />
        <TextField source='network_id.name' label='Network'/>
        <DateField source='sale_date' />
        <NumberField source='base_commission' />
        <TextField source='currency' />
        <TextField source='status' label='Sale Status'/>
        <NumberField source='aff_sub1' />
        <DateField source='updated_at' />
        <EditButton basePath='/logs' />
        <DeleteButton basePath='/logs' />
    </Datagrid>
  </List>;
};

export default PostbackLogList;

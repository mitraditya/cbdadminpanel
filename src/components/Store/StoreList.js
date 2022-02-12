import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton } from "react-admin";

const StoreList = (props) => {
  return <List {...props}>
    <Datagrid  rowClick="edit">
        <TextField source='id' />
        <TextField source='store' />
        <TextField source='homepage' />
        <TextField source='cashbackEnabled' />
        <TextField source='cashbackPercent' />
        <TextField source='cashbackType' />
        <TextField source='network' />
        <EditButton basePath='stores' />
        <DeleteButton basePath='stores' />
    </Datagrid>
  </List>;
};

export default StoreList;

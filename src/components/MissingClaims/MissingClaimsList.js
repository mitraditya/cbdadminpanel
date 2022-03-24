import React from "react";
import { List, Datagrid, TextField, NumberField } from "react-admin";

const MissingClaimsList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="user_id.email" label="User" />
        <NumberField source="click_id.id" label="Click Id" />
        <TextField source="store_id.name" label="Store" />
        <TextField source="network_id.name" label="Network" />
        <TextField source="status" />
      </Datagrid>
    </List>
  );
};

export default MissingClaimsList;

import React from "react";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  DateField,
  DeleteButton,
  EditButton,
} from "react-admin";

const NotifList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField source="id" />
        <TextField source="title" />
        <TextField source="desc" />
        <TextField source="store.name" label="Store" />
        <DateField source="created" />
        <EditButton basePath="notification" />
        <DeleteButton basePath="notification" />
      </Datagrid>
    </List>
  );
};

export default NotifList;

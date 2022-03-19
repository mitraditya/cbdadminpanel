import React from "react";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  DateField,
  EditButton,
} from "react-admin";

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField source="id" />
        <TextField source="first_name" />
        <TextField source="last_name" />
        <TextField source="email" />
        <TextField source="mobile" />
        <TextField source="role" />
        <DateField source="user_registered" />
        <EditButton basePath="user" />
      </Datagrid>
    </List>
  );
};

export default UserList;

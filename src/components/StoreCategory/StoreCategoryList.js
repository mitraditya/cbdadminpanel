import React from "react";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  EditButton,
  DeleteButton,
} from "react-admin";

const StoreCategoryList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField source="cat_id" label="cat_id" />
        <TextField source="name" label="Store" />
        <TextField source="slug" />
        <EditButton basePath="category" />
        <DeleteButton basePath="category" />
      </Datagrid>
    </List>
  );
};

export default StoreCategoryList;

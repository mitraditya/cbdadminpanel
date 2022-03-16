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
        <NumberField source="id" />
        <NumberField source="cat_id" label="cat_id" />
        <TextField source="name" label="store" />
        <TextField source="slug" />
        <EditButton basePath="stores/category" />
        <DeleteButton basePath="stores/category" />
      </Datagrid>
    </List>
  );
};

export default StoreCategoryList;

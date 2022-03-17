import React from "react";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  EditButton,
  DeleteButton,
} from "react-admin";

const CouponCategoryList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField source="id" />
        <TextField source="h1" label="h1" />
        <TextField source="h2" label="h2" />
        <TextField source="featured" />
        <TextField source="visits" />
        <EditButton basePath="networks" />
        <DeleteButton basePath="networks" />
      </Datagrid>
    </List>
  );
};

export default CouponCategoryList;

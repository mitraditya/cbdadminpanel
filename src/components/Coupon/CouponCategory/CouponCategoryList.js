import React from "react";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  BooleanField,
  EditButton,
  DeleteButton,
} from "react-admin";

const CouponCategoryList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField source="id" />
        <BooleanField source="featured" />
        <NumberField source="visits" />
        <TextField source="h1" label="h1" />
        <TextField source="h2" label="h2" />
        <EditButton basePath="couponcategory" />
        <DeleteButton basePath="couponcategory" />
      </Datagrid>
    </List>
  );
};

export default CouponCategoryList;

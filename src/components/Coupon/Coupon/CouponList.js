import React from "react";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  EditButton,
  DeleteButton,
} from "react-admin";

const CouponList = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField source="id" />
        <TextField source="discount" />
        <TextField source="coupon_code" /> 
        <TextField source="link" /> 
        <NumberField source="store_id.name" label="Store" />
        <NumberField source="network_id.name" label="Network" />
        <EditButton basePath="coupon" />
        <DeleteButton basePath="coupon" />
      </Datagrid>
    </List>
  );
};

export default CouponList;

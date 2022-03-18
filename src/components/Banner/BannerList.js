import React from "react";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  DeleteButton,
} from "react-admin";

const BannerList = (props) => {
  console.log(props);
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <NumberField source="id" />
        <TextField source="link" />
        <DeleteButton basePath="banner" />
      </Datagrid>
    </List>
  );
};

export default BannerList;
